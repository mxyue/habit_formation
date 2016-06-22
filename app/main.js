import React, { Component } from 'react';
import  {
    AppRegistry,
    Navigator,
    AsyncStorage
} from 'react-native';

import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import todoReducers from './reducers/todoReducers'
import DefaultPage from './containers/defaultPage'

//let store = createStore(todoReducers)
//persist
import {persistStore, autoRehydrate} from 'redux-persist'

const store = compose(autoRehydrate())(createStore)(todoReducers)

persistStore(store, {storage: AsyncStorage}, () => {
    console.log('restored')
});


var defaultName;
var defaultComponent;

export default class Main extends Component {
    constructor(props){
        super(props);
        defaultName = 'DefaultPage';
        defaultComponent = DefaultPage;
    }
    render() {
        return (
            <Provider store={store}>
                <Navigator
                    initialRoute={{ name: defaultName, component: defaultComponent }}
                    configureScene={(route) => {
                                            return Navigator.SceneConfigs.HorizontalSwipeJump;
                                      }}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return (
                            <Component {...route.params} {...route.passProps}
                                navigator={navigator}
                            />
                        )
                    }}
                />
            </Provider>
        );
    }
}

