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
            <View style={styles.input_box}>
                <TextInput onChangeText={text=>this.setValue(text)}
                           value={this.props.inputValue}
                           onSubmitEditing = {this.handleClick }
                           underlineColorAndroid='transparent'
                           style={{flex: 4, height: 35}}
                />
            </View>

        )
    }
    handleClick=()=> {
        this.props.onAddClick();
        this.setValue('')
    };
    setValue=(text)=>{
        this.props.setNewValue(text)
    }
}

const styles = StyleSheet.create({
    input_box: {
        backgroundColor: '#efefef',
        borderWidth: 1,
        borderColor: '#3f3f3f',
        borderRadius: 3,
        margin: 5,
        paddingLeft: 3,
    },
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