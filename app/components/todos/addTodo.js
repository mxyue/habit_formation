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
        this.state={
            inputFocus: false
        }
    }
    render(){
        return(
            <View style={[styles.input_box,{ backgroundColor: ( this.state.inputFocus ? '#fff' : '#efefef') }]}>
                <TextInput onChangeText={text=>this.setValue(text)}
                           ref={(ref)=>this._textInput=ref}
                           value={this.props.inputValue}
                           onSubmitEditing = {()=>{
                                if(this.props.inputValue > 0){
                                    this.handleClick();
                                    this._textInput.blur()
                                }
                           }}
                           blurOnSubmit = {true}
                           underlineColorAndroid='transparent'
                           style={{flex: 4, height: 45}}
                           maxLength={70}
                           onFocus={()=>this.setState({inputFocus: true})}
                           onBlur={()=>this.setState({inputFocus: false})}
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
        borderColor: '#9f9f9f',
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