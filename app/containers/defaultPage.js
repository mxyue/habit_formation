/**
 * Created by mxyue on 16/6/18.
 */
import React, { Component } from 'react';
import  {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import TodoApp from './todoApp';
import EditBar from '../components/todos/editBar'
import BottomTabBar from '../components/base/bottomTabBar'

export default class DefaultPage extends  Component {
    render(){
        return(
            <ScrollableTabView initialPage={0} renderTabBar={() => <BottomTabBar />}
                               tabBarBackgroundColor="#efefef"
                               tabBarPosition='overlayBottom'
            >
                <TodoApp navigator={this.props.navigator} />
                <ScrollView >
                    <EditBar />
                    <View>
                        <TouchableOpacity
                            activeOpacity={0.8}
                        >
                            <View >
                                <Text style={{color: 'white', fontSize: 20,fontWeight: 'bold'}}>退 出</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ScrollableTabView>
        )
    }
}