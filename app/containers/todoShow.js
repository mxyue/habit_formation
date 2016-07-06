/**
 * Created by mxyue on 16/6/18.
 */
import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    Platform,
    View,
    TouchableOpacity,
    TextInput,
    Slider,
    ScrollView
} from 'react-native'
import {fTimestamp,fTimestampToDate,fTimestampToDateLin} from '../components/helpers/timeFormat'
import DatePicker from 'react-native-datepicker';

export default class TodoShow extends  Component{
    constructor(props){
        super(props);
        this.state = {
            todo: this.props.todo,
            inputValue: this.props.todo.content,
            sliderValue: this.props.todo.intervalDay,
            date: fTimestampToDateLin(this.props.todo.initialDate)
        }
    }
    componentDidUpdate(){
        this.props.setTodoContent(this.state.inputValue)
    }

    navBack=()=>{
        this.props.navigator.pop()
    };

    changeInputText=(text)=>{
        this.setState({inputValue: text})
    };

    setInitialDate=(date)=>{
        var timestamp = new Date(date.replace(/-/g,   "/")).getTime();
        this.props.setInitialDate(timestamp);
        this.setState({date: date});
    };
    todoTimes = (calendars)=>{

        return calendars.map(function(cal, index){
            var totalTime = 0;
            cal['timeCounter'].forEach(function(ele){
                totalTime += ele
            });

            return(
                <View key={index}><Text>日期:{new Date(cal['date']).toLocaleDateString()} 次数:{cal['counter']} 总共时间: {totalTime}s</Text></View>
            )
        })
    }

    render(){
        const {todo,inputValue } = this.state;
        console.log(todo)

        return  (
            <View style={{backgroundColor: '#fafafa',flex: 1, }}>
                <View style={styles.header} >
                    <TouchableOpacity style={styles.backBtn}
                                      onPress={this.navBack}
                    >
                        <Text style={{marginLeft: 10}} >返回</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.container}>
                    <View style={{borderWidth: 1, borderRadius: 3, borderColor: '#efefef', margin: 4}} >
                        <TextInput
                            onChangeText={(content)=> {
                                this.changeInputText(content);
                                this.props.setTodoContent(content)
                            }}
                            value={ inputValue }
                            style={{flex: 4, height: 45,marginTop: 5 }}
                        />

                    </View>
                    <View style={{flex: 1, flexDirection: 'row',height: 30}} >
                        <Text>创建时间: { fTimestamp(todo.createdAt)}</Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row',height: 30}} >
                        <Text>开始提醒日期: { fTimestampToDate(todo.initialDate)}</Text>
                        <Text>,提醒时间 { todo.remindTime[0]}:{todo.remindTime[1]}</Text>
                    </View>
                    <View>
                        <DatePicker
                            style={{width: 200}}
                            date={this.state.date}
                            mode="date"
                            confirmBtnText="确定"
                            onDateChange={(date) => {this.setInitialDate(date)}}
                        />
                    </View>

                    <View>
                        <Text>
                            原来间隔{todo.intervalDay}天,当前间隔 {this.state.sliderValue}天
                        </Text>
                        <Slider
                            value={todo.intervalDay}
                            step={1}
                            maximumValue={30}
                            onValueChange={(value) => this.setState({sliderValue: value})}
                            onSlidingComplete={(value) => this.props.setIntervalDay(value)}
                        />
                    </View>
                    {this.todoTimes(todo['calendars'])}

                </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({

    header: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        paddingTop: (Platform.OS == 'ios' ) ? 10 : 0,
        height: 40,
        backgroundColor: '#fff',
        justifyContent: 'center',

    },
    container:{
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        paddingRight: 10
    },
    backBtn:{
        flex: 1,
        paddingTop: 7,
        alignSelf: 'flex-start'
    },

});