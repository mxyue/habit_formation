/**
 * Created by mxyue on 16/6/18.
 */
import React, { Component } from 'react';
import  {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'
import Drawer from 'react-native-drawer'
import SlideMenu from './slideMenu'
import ScrollTabPage from './scrollTabPage'
import TransparentLayer from '../components/base/transparentLayer'
var dispatch;
import {
    setVisibilityFilter
} from '../actions/todoActions'

export default class DefaultPage extends Component {
    constructor(props){
        super(props)
        this.state={
            drawerOpen: false
        }
        dispatch = this.props.dispatch
    }
    openDrawer = ()=>{
        this._drawer.open();
        this.setState({drawerOpen: true })
    }
    onDrawerClose = ()=>{
        this.setState({drawerOpen: false })
    }


    render() {
        var tLayer = this.state.drawerOpen ? <TransparentLayer/> : null

        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                open={this.state.drawerOpen}
                type="overlay"
                content={<SlideMenu
                    setVisibilityFilter = {(filter)=> {
                        this.props.dispatch(setVisibilityFilter(filter));
                        this.onDrawerClose()
                    }}
                />}
                tapToClose={true}
                openDrawerOffset={200}
                onClose={this.onDrawerClose}
            >
                <ScrollTabPage
                    navigator={this.props.navigator}
                    openDrawer = {this.openDrawer}
                />
                {tLayer}
            </Drawer>
        )
    }
}



const styles = StyleSheet.create({
    drawerOpen:{
        backgroundColor: 'black',
        opacity: 0.7,
    },
    drawerClose: {

    }
});

export default connect()(DefaultPage);