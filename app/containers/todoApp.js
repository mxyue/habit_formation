import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions
} from 'react-native';
import { connect } from 'react-redux'
import { addTodo, completeTodo,
    setVisibilityFilter,
    newInputValue,
    switchBtn,
    timeGo,
    markTodo,
    switchMode,
    markSwitch,
    removeTodo,
    resetMarks,
    setTodoContent,
    switchContentView,
    setEditInputValue,
    setIntervalDay,
    setInitialDate,
    VisibilityFilters } from '../actions/todoActions';
import EditBar from '../components/todos/editBar'
import AddTodo from '../components/todos/addTodo'
import TodoList from '../components/todos/todoList'
import TodoShow from './todoShow'
var dispatch;
import TransparentLayer from '../components/base/transparentLayer'

class TodoApp extends  Component {
    constructor(props) {
        super(props)
        dispatch = this.props.dispatch
    }

    navTodoShow=(todo)=>{
        this.props.navigator.push({
            name: 'TodoShow',
            component: TodoShow,
            passProps: {
                todo: todo,
                setTodoContent: (content)=>dispatch(setTodoContent(todo.id, content)),
                setIntervalDay: (day)=>dispatch(setIntervalDay(todo.id, day)),
                setInitialDate: (timestamps)=>dispatch(setInitialDate(todo.id, timestamps))
            }
        })
    };
    render() {
        const {  visibleTodos,inputValue,editMode,visibilityFilter,allTodos } = this.props;
        return (
                <View style={{flex:1, backgroundColor: '#fff'}}>

                    <EditBar
                    editMode={editMode}
                    onClickRemove={()=>{
                        dispatch(removeTodo());
                        dispatch(switchMode(false))
                    } }
                    onClickCancel={()=>{
                         dispatch(switchMode(false));
                         dispatch(resetMarks())
                    }}
                    inputValue = {inputValue}
                    onAddClick={() => {
                        dispatch(addTodo(inputValue));
                        dispatch(newInputValue(''))
                    }}
                    openDrawer={()=> this.props.openDrawer()}
                    visibilityFilter={visibilityFilter}
                />
                <AddTodo
                    onAddClick={() => {
                        dispatch(addTodo(inputValue));
                        dispatch(newInputValue(''))
                    }}
                    setNewValue={(content) =>{
                        dispatch(newInputValue(content))
                        }
                    }
                    inputValue = {inputValue}
                />
                <TodoList
                    todos={visibleTodos}
                    switchBtn={(id,boo)=>dispatch(switchBtn(id,boo))}
                    timeGo={(id,num)=>dispatch(timeGo(id,num))}
                    onClickCheckbox={id=>dispatch(completeTodo(id))}
                    onTodoClick={(todo) => {

                        if(editMode) {
                            dispatch(markSwitch(todo.id))
                        }else{
                            this.navTodoShow(todo)
                        }
                    }}
                    onTodoLongClick={id=> {
                        dispatch(markTodo(id));
                        dispatch(switchMode(true))
                        }
                    }
                />
                </View>
        )
    }
}

function selectTodos(todos, filter) {
    var revTodos = todos.filter(function(ele){
        return( ele.beDeleted === false)
    });
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return revTodos
        case VisibilityFilters.SHOW_COMPLETED:
            return revTodos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return revTodos.filter(todo => !todo.completed);
        case VisibilityFilters.TODAY_TODOS:
            var nowDate = (new Date()).setHours(0,0,0,0);
            return revTodos.filter(todo => {
                return (todo.initialDate === nowDate ||
                    (nowDate - todo.initialDate)/(1000*60*60*24)%(todo.intervalDay)===0)
                    && !todo.completed && todo.initialDate <=  nowDate
            })
    }
}



export default connect(state => ({
    allTodos: state.todos,
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter,
    inputValue: state.inputValue,
    editMode: state.editMode,
    //onTodoIndex: selectOnTodo(state.todos)
}))(TodoApp);