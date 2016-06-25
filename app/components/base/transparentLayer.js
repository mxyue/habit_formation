/**
 * Created by mxyue on 16/6/25.
 */

import React,{Component} from 'react'
import { View,
    StyleSheet,
    Dimensions
} from 'react-native'

export default class TransparentLayer extends Component{
    render(){
        var {height, width} = Dimensions.get('window');
        return(
            <View style={[styles.layer,{height: height, width: width }]}></View>
        )
    }
}

const styles = StyleSheet.create({
    layer: {
        flex:1,
        backgroundColor: '#333',
        position: 'absolute',
        opacity: 0.4,
        right: 0,
        top: 0,
    }
})