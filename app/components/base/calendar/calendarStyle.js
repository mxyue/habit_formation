/**
 * Created by mxyue on 16/7/12.
 */
import { Dimensions, StyleSheet } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    dayBorder: {
        width: (DEVICE_WIDTH-21) / 7,
        height: 30,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    weekBorder: {
        width: (DEVICE_WIDTH-21) / 7,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    weekBorderBox:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        backgroundColor: '#bff0ef',
        height: 30,
    },
    calendarBox: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        height: 180,
    },
    calendarHeader:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        height: 30,
    }
})
export default styles;