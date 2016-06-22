import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Animated,
} from 'react-native';

var  tabs= ['清单','我的'];
export default class BottomTabBar extends Component {

    render() {
        return <View>
            <View style={styles.tabs}>
                {tabs.map((tab, i) => {
                    return <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
                        <Text style={{ color: "white"}} >{tab}</Text>
                    </TouchableOpacity>;
                })}
            </View>
        </View>;
    }
}

const styles = StyleSheet.create({
    tabs: {
        height: 40,
        flexDirection: 'row',
        borderBottomColor: 'rgba(0,0,0,0.05)',
        backgroundColor: '#00bcd4',
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    //tabUnderlineStyle: {
    //    position: 'absolute',
    //    height: 3,
    //    backgroundColor: '#3b5998',
    //    bottom: 0,
    //},
});

