
//import { combineReducers } from 'redux';
import {
    ADD_TODO,
    COMPLETE_TODO,
    SET_VISIBILITY_FILTER,
    GET_INPUT_VALUE,
    SET_INPUT_VALUE,
    SWITCH_BTN,
    TIME_GO,
    REMOVE_TODO,
    MARK_TODO,
    SWITCH_MODE,
    MARK_SWITCH,
    RESET_MARKS,
    THE_DATE_TODOS,
    SET_TODO_CONTENT,
    SWITCH_CONTENT_VIEW,
    EDIT_INPUT_VALUE,
    SET_INTERVAL_DAY,
    VisibilityFilters } from '../actions/todoActions';
const { SHOW_ALL } = VisibilityFilters;
import {filterMarkTodos,resetMarks,theDayTodos} from './handles/todoHandle'

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [ {
                content: action.content,
                completed: false,
                beMark: false,
                switchValue: false,
                time: 0,
                dateMode: 'day',
                intervalDay: 0,
                createdAt: Date.now()
            },...state];
        case MARK_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    beMark: true
                }),
                ...state.slice(action.index + 1)
            ];
        case COMPLETE_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: true
                }),
                ...state.slice(action.index + 1)
            ];
        case MARK_SWITCH:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    beMark: !state[action.index].beMark
                }),
                ...state.slice(action.index + 1)
            ];
        case RESET_MARKS:
            return resetMarks(state)
        case SWITCH_BTN:
            return [
                ...state.slice(0,action.index),
                Object.assign({}, state[action.index],{
                    switchValue: action.boo
                }),
                ...state.slice(action.index+1)
            ];
        case REMOVE_TODO:
            return filterMarkTodos(state);

        case TIME_GO:
            return [
                ...state.slice(0,action.index),
                Object.assign({}, state[action.index],{
                    time: action.num
                }),
                ...state.slice(action.index+1)
            ];
        case THE_DATE_TODOS:
            return theDayTodos(state,action.date);
        case SET_TODO_CONTENT:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    content: action.content
                }),
                ...state.slice(action.index + 1)
            ];
        case SET_INTERVAL_DAY:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    intervalDay: action.day
                }),
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
}
function inputValue(state='', action){
    switch (action.type){
        case SET_INPUT_VALUE:
            return action.content;
        default:
            return state
    }
}
function editMode(state=false,action){
    switch (action.type){
        case SWITCH_MODE:
            return action.boo;
        default:
            return state
    }
}
function contentViewMode(state=true,action){
    switch(action.type){
        case SWITCH_CONTENT_VIEW:
            return action.boo;
        default:
            return state
    }
}

function todoApp(state = {}, action) {
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action),
        inputValue: inputValue(state.inputValue, action),
        editMode: editMode(state.editMode, action),
        contentViewMode: contentViewMode(state.contentViewMode, action),
    };
}


export default todoApp;