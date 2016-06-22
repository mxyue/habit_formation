import React, { Component } from 'react';
import  {
    Text,
    View,
    ListView,
} from 'react-native'
import TodoItem from './todoItem'
var ds;

export default class TodoList extends  Component {
    constructor(prop) {
        super(prop)
        ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
    }

    componentDidMount() {
        this.timer = setInterval(
            () => {
                this.timeInc()
            },
            1000
        );
    }

    componentWillUnmount() {
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearInterval(this.timer);
    }

    render() {
        return this.todoRender()
    }

    timeInc = ()=> {
        this.props.todos.forEach((ele, id, arr)=> {
            if (ele.switchValue) {
                let num = ele.time + 1;
                this.props.timeGo(id, num)
            }
        })
    }
    todoRender = ()=>{
        if(this.props.todos.length > 0){
            return (
                <ListView
                    dataSource={ds.cloneWithRows(this.props.todos) }
                    renderRow={ this.todoItem }
                >
                </ListView>

            )
        }else{
            return <View><Text>还没有任务</Text></View>
        }
    }
    todoItem=(todo,sectionID,rowID) =>{
        rowID = Number(rowID)
        return(
            <TodoItem {...todo}
                key={todo.id}
                index={rowID}
                switchBtn={(index,text)=>this.props.switchBtn(index,text)}
                onClickCheckbox={(index)=> this.props.onClickCheckbox(index)}
                onClick={(index) => this.props.onTodoClick(index)}
                onLongClick={(index)=> this.props.onTodoLongClick(index)}
            />)
    }



}