module.exports = {
    filterMarkTodos: function (state) {
        return(
            state.map(function(ele){
                if (ele.beMark === true){
                    ele.beDeleted = true
                }
                return ele
            })
        )
    },

    resetMarks: function(state){
        return (
            state.map(function(ele){
                ele.beMark = false
                return ele
            })
        )
    },
    todoIndexById: function(todos, id){
        console.log(`helper: first Id>${id}`)
        if (todos.length == 0) return -1;
        var idIndex = -1;
        todos.forEach(function(ele,index){
            if(ele.id == id ){
                idIndex = index
            }
        });
        if(idIndex==-1) throw `未查找到对应id:${id}`;
        console.log(`helper: indexId>${idIndex}`);
        return idIndex
    },
    updateTodo: function(todos, id,column,value){
        console.log(`update id: ${id}`)
        if(typeof id === 'undefined') throw 'id 不正确'
        var newTodos = todos.map(function(ele){
            if(ele.id == id){
                if(column=='beMark'){
                    console.log('beMark case');
                    ele[column] = !ele[column]
                }else if(column === 'completed'){
                    ele['timeSwitch'] = false;
                    ele[column] = !ele[column]
                }else
                    ele[column] = value
            }
            return ele
        })
        return newTodos
    }
};
