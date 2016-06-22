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
            <View style={{flexDirection: 'row' }}>
                <View style={styles.backGround} >
                    {this.cancelBtn(editMode,onClickCancel)}
                    {this.rightBtn(editMode,onClickRemove,inputValue)}
                </View>
            </View>
        )
    }
    cancelBtn=(editMode,onClickCancel)=>{
        if(editMode){
            return(
                <TouchableOpacity style={styles.cancelBtn} onPress={()=> onClickCancel()} >
                    <Text style={{marginRight: 5}} >{editMode ? '取消' : ''}</Text>
                </TouchableOpacity>
            )
        }else{
            return null
        }
    }
    rightBtn=(editMode,onClickRemove,inputValue ='')=>{
        if(editMode){
            return(
                <TouchableOpacity style={styles.deleteBtn}
                    onPress={()=>onClickRemove()}
                >
                    <Text style={{marginRight: 5}} >{editMode ? '删除' : ''}</Text>
                </TouchableOpacity>
            )
        }else if( inputValue.length > 0){
            return(
                <TouchableOpacity onPress={this.props.onAddClick } style={styles.addBtn} >
                    <View ><Text style={{color: '#fff',marginRight: 5}}>添加</Text></View>
                </TouchableOpacity>
            )
        }else{
            return null
        }
    }
}

const styles = StyleSheet.create({

    backGround: {
        flex: 1,
        alignItems: 'flex-end',
        paddingTop: (Platform.OS === 'ios') ? 10 : 0,
        height: 40,
        backgroundColor: '#00bcd4',
        justifyContent: 'center',

    },
    cancelBtn:{
        flex: 1,
        alignSelf: 'flex-start'
    },
    deleteBtn:{
        flex: 1,
        alignSelf: 'flex-end'
    }
});