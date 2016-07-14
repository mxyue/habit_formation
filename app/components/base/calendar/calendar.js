/**
 * Created by mxyue on 16/7/11.
 */

import React, {Component} from 'react'
import {View,Text} from 'react-native'
import Day from './day'
import styles from './calendarStyle'
export default class Calendar extends Component {
    constructor(props){
        super(props)
    }
    //monthStartWeek=(year,month)=>{
    //    return new Date(year,month-1,1).getDay()
    //};
    //monthEndDay = (year,month)=>{
    //    return new Date(year,month,0).getDate()
    //};
    render(){
        return(
            <View style={styles.calendarBox}>
                {this.weekDates()}
                {this.dateDays(2016,7,this.props.calendars)}
            </View>
        )
    }
    weekDates = ()=>{
        var weekNames = ['周日','周一','周二','周三','周四','周五','周六']
        var weeks = weekNames.map(function(e){
            return(
                <View key={e} style={ [styles.weekBorder]  }>
                    <Text>{e}</Text>
                </View>
            )
        })
        return weeks
    }

    dateDays =(year,month, todoDays)=>{
        var monthEndDay = new Date(year,month,0).getDate();
        var monthStartWeek = new Date(year,month-1,1).getDay();
        var calendar = [];
        for(var i = 0; i< monthStartWeek; i++){
            calendar.push(<View key={`blank_${i}`} style={ [styles.dayBorder, { borderColor: '#efefef'}] }/>)
        }

        for(var i = 1; i <= monthEndDay; i++  ){
            let theDate = new Date(year,month-1, i).setHours(0,0,0)
            let didDate = todoDays.filter(function(ele){
               return ele.date =  theDate
            });
            calendar.push(
                <Day
                    key={`date_${i}`}
                    dayText = {i}
                    didDate = {didDate.length > 0}
                />
            )
        }
        return calendar
    }
}

