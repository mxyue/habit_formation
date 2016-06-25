import React, { Component } from 'react';
import  {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Platform
} from 'react-native'


export default class EditBar extends Component{
    constructor(prop){
        super(prop)
    }
    render(){
        const {editMode,onClickRemove,onClickCancel,inputValue,onAddClick} = this.props
        return(
            <View >
                <View style={styles.backGround} >
                    <View>{this.leftBtn(editMode,onClickCancel)}</View>
                    <View>{this.rightBtn(editMode,onClickRemove,inputValue)}</View>
                </View>
            </View>
        )
    }
    leftBtn=(editMode,onClickCancel)=>{
        if(editMode){
            return(
                <TouchableOpacity onPress={()=> onClickCancel()} >
                    <Text style={{color: '#fff'}} >{'取消'}</Text>
                </TouchableOpacity>
            )
        }else{
            return (
                <TouchableOpacity onPress={()=> this.props.openDrawer()} >
                    <Text style={{color: '#fff'}} >{ '三'}</Text>
                </TouchableOpacity>
            )
        }
    }
    rightBtn=(editMode,onClickRemove,inputValue ='')=>{
        if(editMode){
            return(
                <TouchableOpacity
                    onPress={()=>onClickRemove()}
                >
                    <Text style={{color: '#fff'}} >{editMode ? '删除' : ''}</Text>
                </TouchableOpacity>
            )
        }else if( inputValue.length > 0){
            return(
                <TouchableOpacity onPress={this.props.onAddClick } style={styles.addBtn} >
                    <View ><Text style={{color: '#fff'}}>添加</Text></View>
                </TouchableOpacity>
            )
        }else{
            return null
        }
    }
}

const styles = StyleSheet.create({

    backGround: {
        paddingTop: (Platform.OS === 'ios') ? 10 : 0,
        height: 40,
        backgroundColor: '#00bcd4',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },


});