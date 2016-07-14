/**
 * Created by mxyue on 16/7/11.
 */

import React, {Component} from 'react'

import {
    View,
    StyleSheet,
    Text
} from 'react-native'

import styles from './calendarStyle'

export default class Day extends Component{
    render(){
        return(
            <View style={ [styles.dayBorder, { borderColor: '#efefef'}]  }>
                <Text  >{this.props.dayText}</Text>
            </View>
        )
    }
}

