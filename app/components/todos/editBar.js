import React, { Component } from 'react';
import  {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    StyleSheet,
} from 'react-native'
//var {Platform} = React;


export default class EditBar extends Component{
    constructor(prop){
        super(prop)
    }
    render(){
        const {editMode,onClickRemove,onClickCancel} = this.props
        return(
            <View style={{flexDirection: 'row' }}>
                <View style={styles.backGround} >
                    {this.cancelBtn(editMode,onClickCancel)}
                    {this.deleteBtn(editMode,onClickRemove)}
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
    deleteBtn=(editMode,onClickRemove)=>{
        if(editMode){
            return(
                <TouchableOpacity style={styles.deleteBtn}
                    onPress={()=>onClickRemove()}
                >
                    <Text style={{marginRight: 5}} >{editMode ? '删除' : ''}</Text>
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
        paddingTop: (true ) ? 10 : 0,
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