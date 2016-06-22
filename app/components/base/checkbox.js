'use strict';

var React = require('react');
var ReactNative = require('react-native');
var PropTypes = React.PropTypes;

var {
    StyleSheet,
    Image,
    Text,
    View,
    TouchableHighlight
    } = ReactNative;

var CheckBox = React.createClass({
    propTypes: {
        checked: PropTypes.bool,
        checkedImage: PropTypes.number,
        uncheckedImage: PropTypes.number,
        onChange: PropTypes.func
    },

    getDefaultProps() {
        return {
            label: 'Label',
            labelBefore: false,
            checked: false,
            checkedImage: require('./img/cb_enabled.png'),
            uncheckedImage: require('./img/cb_disabled.png'),
        }
    },

    onChange() {
        if(this.props.onChange){
            this.props.onChange(!this.props.checked);
        }
    },

    render() {
        var source = this.props.uncheckedImage;

        if(this.props.checked){
            source = this.props.checkedImage;
        }

        var container = (
            <View style={styles.container}>
                <Image
                    style={styles.checkbox}
                    source={source}/>

            </View>
        );

        if (this.props.labelBefore) {
            container = (
                <View style={styles.container}>
                    <Image
                        style={styles.checkbox}
                        source={source}/>
                </View>
            );
        }

        return (
            <TouchableHighlight onPress={this.onChange} underlayColor='white'>
                {container}
            </TouchableHighlight>
        )
    }
});

var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    checkbox: {
        width: 26,
        height: 26
    },
    labelContainer: {
        marginLeft: 10,
        marginRight: 10
    },
    label: {
        fontSize: 15,
        color: 'grey'
    }
});

module.exports = CheckBox;