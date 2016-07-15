/**
 * Created by mxyue on 16/7/11.
 */

import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
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
        var year = this.props.year;
        var month = this.props.month;
        return(
            <View >
                <View style={styles.calendarHeader}>
                    <TouchableOpacity onPress={this.props.prevMonth()}>
                        <Text>上月</Text>
                    </TouchableOpacity>
                    <Text>{year}年{month}月</Text>
                    <TouchableOpacity onPress={this.props.nextMonth()}>
                        <Text>下月</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.weekBorderBox} >
                    {this.weekDates()}
                </View>
                <View style={styles.calendarBox}>
                    {this.dateDays(year,month)}
                </View>
            </View>
        )
    }
    weekDates = ()=>{
        var weekNames = ['周日','周一','周二','周三','周四','周五','周六'];
        var weeks = weekNames.map(function(e){
            return(
                <View key={e} style={ [styles.weekBorder]  }>
                    <Text>{e}</Text>
                </View>
            )
        });
        return weeks
    };

    dateDays =(year,month)=>{
        var monthEndDay = new Date(year,month,0).getDate();
        var monthStartWeek = new Date(year,month-1,1).getDay();
        var calendars = this.props.calendars;
        var calendar = [];
        for(var i = 0; i< monthStartWeek; i++){
            calendar.push(<View key={`blank_${i}`} style={ [styles.dayBorder, { borderColor: '#efefef'}] }/>)
        }

        for(var i = 1; i <= monthEndDay; i++  ){
            let didDates = calendars.filter((ele)=>{
                let todoDay = new Date(ele.date).getDate();
                return todoDay ==  i
            });

            calendar.push(
                <Day
                    key={`date_${i}`}
                    dayText = {i}
                    didDate = {didDates.length > 0}
                />
            )
        }
        return calendar
    }
}

