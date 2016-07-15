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
        var dateStyle = this.props.didDate ? {borderColor: 'green'} : {borderColor: '#efefef'};
        return(
            <View style={ [styles.dayBorder, dateStyle ]  }>
                <Text  >{this.props.dayText}</Text>
            </View>
        )
    }
}

