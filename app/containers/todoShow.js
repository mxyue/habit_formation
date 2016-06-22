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
    Slider
} from 'react-native'


export default class TodoShow extends  Component{
    constructor(props){
        super(props);
        this.state = {
            todo: this.props.todo,
            inputValue: this.props.todo.content,
            sliderValue: this.props.todo.intervalDay
        }
    }

    navBack=()=>{
        this.props.navigator.pop()
    };

    onClickSave=()=>{
        this.props.setTodoContent(this.state.inputValue)
    }
    changeInputText=(text)=>{
        this.setState({inputValue: text})
    }

    render(){
        const {todo,inputValue } = this.state;

        return  (
            <View>
                <View style={styles.backGround} >
                    <TouchableOpacity style={styles.backBtn}
                                      onPress={this.navBack}
                    >
                        <Text style={{marginLeft: 5}} >返回</Text>
                    </TouchableOpacity>

                </View>
                <View style={{flexDirection: 'row'}} >
                    <TextInput
                        onChangeText={(content)=> this.changeInputText(content)}
                        value={ inputValue }
                        style={{flex: 4, height: 35,marginTop: 5 }}
                    />
                    <TouchableOpacity
                        onPress={this.onClickSave}
                    ><Text>保存</Text></TouchableOpacity>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}} >
                    <TouchableOpacity
                    ><Text>间隔</Text></TouchableOpacity>
                    <Text>,记次,计时</Text>
                </View>
                <View>
                    <Text >
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

            </View>
        )
    }
}


const styles = StyleSheet.create({

    backGround: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
        paddingTop: (Platform.OS == 'ios' ) ? 10 : 0,
        height: 40,
        backgroundColor: '#fff',
        justifyContent: 'center',

    },
    backBtn:{
        flex: 1,
        alignSelf: 'flex-start'
    },

});