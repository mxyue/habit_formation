import React, { Component } from 'react';
import  {
    View,
    Text,
    TouchableOpacity,
    Switch,
    StyleSheet,
    Image,
    TouchableHighlight,
} from 'react-native'


export default class TodoItem extends Component{
    constructor(prop){
        super(prop)
    }

    render(){
        const {switchBtn, timeSwitch,onClickCheckbox,onClick,onLongClick,id,content, calendars, completed, beMark} = this.props
        checkboxInside = ''
        if(completed) {
            checkboxInside = <View style={styles.cbEnabled} ></View>
        }else{
            checkboxInside = <View style={styles.cbDisabled} ></View>
        }
        var lastCalendar = calendars[calendars.length-1]
        var counter = (typeof lastCalendar == 'undefined') ? 0 : lastCalendar['counter']
        var lastTimeCounter = (typeof lastCalendar == 'undefined') ? 0 : lastCalendar['timeCounter'][lastCalendar['timeCounter'].length-1]
        return(
            <View style={beMark ? [styles.todo_box,styles.markTodo] : styles.todo_box }>
                <View style={styles.left_box}>

                    <TouchableHighlight style={styles.checkbox}
                        underlayColor="#efefef" onPress={()=>onClickCheckbox() }
                    >
                        {checkboxInside}
                    </TouchableHighlight>
                    <TouchableOpacity style={styles.textContent}
                            onLongPress={()=>onLongClick()}
                            onPress={()=>onClick()}
                    >
                       <View>
                           <Text>{content}</Text>
                       </View>
                    </TouchableOpacity>

                </View>
                <View style={styles.switch_box}>
                    <View style={styles.timeBox} ><Text style={styles.time} >{counter}/{lastTimeCounter}s </Text></View>

                    <Switch
                        onValueChange={boo=>switchBtn(boo)}
                        value={timeSwitch}
                    />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    todo_box:{
        marginLeft: 4,
        marginRight: 4,
        marginBottom: 1,
        flex: 1,
        flexDirection: 'row',
        borderWidth: 2,
        borderBottomWidth: 2,
        borderColor: '#efefef',
        backgroundColor: '#fff',
        borderRadius: 4,
        padding: 5
    },
    markTodo: {
        borderColor: '#d0f2fc',
        backgroundColor: '#e0f2fc',
    },
    checkbox: {
        borderRadius: 5,
    }
    ,
    cbDisabled: {
        borderWidth: 1,
        borderColor: '#2b2b2b',
        borderRadius: 3,
        width: 20,
        height: 20,
    },
    cbEnabled:{
        borderWidth: 1,
        borderColor: '#00bcd4',
        backgroundColor: '#3cf5ea',
        borderRadius: 3,
        width: 20,
        height: 20,
    },

    left_box:{
        flex: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textContent: {
        flex: 1,
        height: 40,
        justifyContent: 'center',
        paddingLeft: 5,
    },
    switch_box:{
        flex: 1,
    },
    timeBox:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: 3,
        justifyContent: 'center'

    },
    time:{
        color: 'blue'
    }
});