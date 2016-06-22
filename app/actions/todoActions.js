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
/*
 * 其它的常量
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    CURRENT_TODOS: 'CURRENT_TODOS'
};

/*
 * action 创建函数
 */



//todo
export function addTodo(content) {
    return { type: ADD_TODO, content};
}
export function setTodoContent(index,content){
    return { type: SET_TODO_CONTENT, index, content};
}
export function removeTodo() {
    return { type: REMOVE_TODO};
}
export function markTodo(index) {
    return { type: MARK_TODO, index};
}

export function newInputValue(content) {
    return { type: SET_INPUT_VALUE, content };
}
export function switchBtn(index,boo){
    return { type: SWITCH_BTN,index , boo}
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
export function timeGo(index,num){
    return { type: TIME_GO, index,num}
}
export function completeTodo(index) {
    return { type: COMPLETE_TODO, index };
}
export function markSwitch(index){
    return { type: MARK_SWITCH, index };
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter };
}
export function setIntervalDay(index,day){
    return { type: SET_INTERVAL_DAY,index, day}
}
export function setEditInputValue(index, content){
    return { type: EDIT_INPUT_VALUE, index, content}
}