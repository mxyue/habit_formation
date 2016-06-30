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

    navTodoShow=(todo,index)=>{

        this.props.navigator.push({
            name: 'TodoShow',
            component: TodoShow,
            passProps: {
                todo: todo,
                setTodoContent: (content)=>dispatch(setTodoContent(index, content)),
                setIntervalDay: (day)=>dispatch(setIntervalDay(index, day))
            }
        })
    };
    render() {
        const {  visibleTodos,inputValue,editMode,visibilityFilter } = this.props;
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
                    switchBtn={(index,boo)=>dispatch(switchBtn(index,boo))}
                    timeGo={(index,num)=>dispatch(timeGo(index,num))}
                    onClickCheckbox={index=>dispatch(completeTodo(index))}
                    onTodoClick={index => {
                        if(editMode) {
                            dispatch(markSwitch(index))
                        }else{
                            this.navTodoShow(visibleTodos[index],index)
                        }
                    }}
                    onTodoLongClick={index=> {
                        dispatch(markTodo(index));
                        dispatch(switchMode(true))
                        }
                    }
                />
                </View>
        )
    }
}

function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
        case VisibilityFilters.TODAY_TODOS:
            var nowDate = (new Date()).setHours(0,0,0,0);
            return todos.filter(todo => {
                return (todo.initialDate == nowDate || (nowDate - todo.initialDate)%(todo.intervalDay)==0)  && !todo.completed
            })
    }
}



export default connect(state => ({
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter,
    inputValue: state.inputValue,
    editMode: state.editMode,
    //onTodoIndex: selectOnTodo(state.todos)
}))(TodoApp);