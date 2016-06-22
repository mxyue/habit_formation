import React, { Component } from 'react';
import  {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    StyleSheet,
} from 'react-native'

export default class AddTodo extends  Component{
    constructor(prop){
        super(prop)
    }
    render(){
        return(
            <View style={{flexDirection: 'row' }}>
                <TextInput onChangeText={text=>this.setValue(text)}
                           value={this.props.inputValue}
                           style={{flex: 4, height: 35,marginTop: 5}}
                />
                <TouchableOpacity onPress={this.handleClick } style={styles.addBtn} >
                    <View ><Text style={{color: '#fff'}}>添加</Text></View>
                </TouchableOpacity>
            </View>
        )
    }
    handleClick=()=> {
        this.props.onAddClick(this.props.inputValue)
        this.setValue('')
    };
    setValue=(text)=>{
        this.props.setNewValue(text)
    }
}

const styles = StyleSheet.create({

    addBtn: {
        flex: 1,
        alignItems: 'center',
        height: 30,
        marginRight: 4,
        marginTop: 5,
        backgroundColor: '#00bcd4',
        justifyContent: 'center',
        borderRadius: 2,
    }
});