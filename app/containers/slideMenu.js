import React,{
    Component
} from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

export default class SlideMenu extends Component{
    render(){
        return(<View style={styles.containerBox} >
            <Text>导航dfsdf</Text>
            <Text>导航dfsdf</Text>
            <Text>导航dfsdf</Text>
        </View>)
    }
}

const styles = StyleSheet.create({
    containerBox: {
        marginTop: 20,
        backgroundColor: 'white',
        flex: 1,
        borderWidth: 1,
        borderColor: 'green'
    }
})