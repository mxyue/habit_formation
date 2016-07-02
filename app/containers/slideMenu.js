import React,{
    Component
} from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    AsyncStorage
} from 'react-native'
import {VisibilityFilters} from '../actions/todoActions'

export default class SlideMenu extends Component{
    constructor(props){
        super(props)
    }
    setFilter =(filter)=>{
        this.props.setVisibilityFilter(filter)
    }
    render(){
        return(<View style={styles.containerBox} >
            <View style={styles.trabecula}/>
            <View>
                <TouchableOpacity style={{ height: 40}}
                    onPress={()=>this.setFilter(VisibilityFilters.SHOW_ALL)} >
                    <Text>所有清单</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={{ backgroundColor: '#efefef',height: 40}}
                    onPress={()=>this.setFilter(VisibilityFilters.TODAY_TODOS)} >
                    <Text>今日清单</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={{height: 40}}
                    onPress={()=>this.setFilter(VisibilityFilters.SHOW_ACTIVE)} >
                    <Text>未完成</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={{backgroundColor: '#efefef', height: 40}}
                    onPress={()=>this.setFilter(VisibilityFilters.SHOW_COMPLETED)} >
                    <Text>已完成的</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={{backgroundColor: '#ffe', height: 40}}
                                   onPress={()=> {this.props.clearTodos(); AsyncStorage.clear(alert('清除成功')) }} >
                    <Text>清除所有数据</Text>
                </TouchableOpacity>
            </View>
        </View>)
    }
}

const styles = StyleSheet.create({
    containerBox: {
        backgroundColor: 'white',
        flex: 1,

    },
    trabecula: {
        height: 40,
        backgroundColor: '#00bcd4',
    }
})