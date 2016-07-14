/**
 * Created by mxyue on 16/7/12.
 */
import { Dimensions, StyleSheet } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    dayBorder: {
        width: (DEVICE_WIDTH-20) / 7.2,
        height: 30,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    weekBorder: {
        width: (DEVICE_WIDTH-20) / 7.2,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#bff0ef',
    },
    calendarBox: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        height: 210,
        borderWidth: 1,
        borderColor: '#fff'
    }
})
export default styles;