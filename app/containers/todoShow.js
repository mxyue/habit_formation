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
    componentDidUpdate(){
        this.props.setTodoContent(this.state.inputValue)
    }

    navBack=()=>{
        this.props.navigator.pop()
    };


    changeInputText=(text)=>{
        this.setState({inputValue: text})
    }

    render(){
        const {todo,inputValue } = this.state;

        return  (
            <View style={{backgroundColor: '#fafafa',flex: 1, }}>
                <View style={styles.header} >
                    <TouchableOpacity style={styles.backBtn}
                                      onPress={this.navBack}
                    >
                        <Text style={{marginLeft: 5}} >返回</Text>
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
                            style={{flex: 4, height: 35,marginTop: 5 }}
                        />

                    </View>
                    <View style={{flex: 1, flexDirection: 'row',height: 30}} >
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
        paddingLeft: 5,
        paddingRight: 5
    },
    backBtn:{
        flex: 1,
        paddingTop: 7,
        alignSelf: 'flex-start'
    },

});