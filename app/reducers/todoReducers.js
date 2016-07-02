
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
    SET_INITIAL_DATE,
    CLEAR_TODOS,
    VisibilityFilters } from '../actions/todoActions';
const { TODAY_TODOS } = VisibilityFilters;
import {filterMarkTodos,resetMarks,todoIndexById, updateTodo} from './handles/todoHandle'

function visibilityFilter(state = TODAY_TODOS, action) {
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
            return [{
                id: Date.now(),
                content: action.content,
                completed: false,
                beMark: false,
                timeSwitch: false,
                time: 0,
                dateMode: 'day',
                intervalDay: 0,
                createdAt: Date.now(),
                initialDate: (new Date()).setHours(0,0,0,0),
                remindTime: [0,0],
                beDeleted: false
            },...state];
        case MARK_TODO:
            return updateTodo(state,action.id,'beMark',true);

        case COMPLETE_TODO:
            return updateTodo(state,action.id,'completed',true);

        case MARK_SWITCH:
            return updateTodo(state,action.id,'beMark');

        case RESET_MARKS:
            return resetMarks(state)
        case SWITCH_BTN:
            return updateTodo(state,action.id,'timeSwitch',action.boo);

        case REMOVE_TODO:
            return filterMarkTodos(state);

        case TIME_GO:
            return updateTodo(state,action.id,'time',action.num);

        case SET_TODO_CONTENT:
            return updateTodo(state,action.id,'content',action.content);

        case SET_INTERVAL_DAY:
            return updateTodo(state,action.id,'intervalDay',action.day);

        case SET_INITIAL_DATE:
            return updateTodo(state,action.id,'initialDate',action.timestamps);

        case CLEAR_TODOS:
            return []
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