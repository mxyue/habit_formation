export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const MARK_TODO = 'MARK_TODO';
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const GET_INPUT_VALUE = 'GET_INPUT_VALUE';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const SWITCH_BTN = 'SWITCH_BTN';
export const TIME_GO = 'TIME_GO';
export const SWITCH_MODE = 'SWITCH_MODE';
export const MARK_SWITCH = 'MARK_SWITCH';
export const RESET_MARKS = 'RESET_MARKS';
export const THE_DATE_TODOS = 'THE_DATE_TODOS';
export const SET_TODO_CONTENT = 'SET_TODO_CONTENT';
export const SWITCH_CONTENT_VIEW = 'SWITCH_CONTENT_VIEW';
export const EDIT_INPUT_VALUE = 'EDIT_INPUT_VALUE';
export const SET_INTERVAL_DAY = 'SET_INTERVAL_DAY';
export const SET_INITIAL_DATE = 'SET_INITIAL_DATE';
export const CLEAR_TODOS = 'CLEAR_TODOS';
/*
 * 其它的常量
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    TODAY_TODOS: 'TODAY_TODOS'
};


export function addTodo(content) {
    return { type: ADD_TODO, content};
}
export function setTodoContent(id,content){
    return { type: SET_TODO_CONTENT, id, content};
}
export function removeTodo() {
    return { type: REMOVE_TODO};
}
export function markTodo(id) {
    return { type: MARK_TODO, id};
}
export function newInputValue(content) {
    return { type: SET_INPUT_VALUE, content };
}
export function switchBtn(id,boo){
    return { type: SWITCH_BTN,id , boo}
}
export function switchMode(boo){
    return { type: SWITCH_MODE,boo}
}
export function switchContentView(boo){
    return { type: SWITCH_CONTENT_VIEW,boo}
}
export function resetMarks(){
    return { type: RESET_MARKS}
}
export function timeGo(id,num){
    return { type: TIME_GO, id,num}
}
export function completeTodo(id) {
    console.log(`action complate todo id: ${id}`)
    return { type: COMPLETE_TODO, id };
}
export function markSwitch(id){
    return { type: MARK_SWITCH, id };
}
export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter };
}
export function setIntervalDay(id,day){
    return { type: SET_INTERVAL_DAY,id, day}
}
export function setEditInputValue(id, content){
    return { type: EDIT_INPUT_VALUE, id, content}
}
export function setInitialDate(id, timestamps){
    return { type: SET_INITIAL_DATE, id, timestamps}
}

export function clearTodos(){
    return {type: CLEAR_TODOS}
}