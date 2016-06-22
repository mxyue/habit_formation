module.exports = {
    filterMarkTodos: function (state) {
        var newArr = state.filter(function (item) {
            console.log(item.text)
            console.log(item.beMark === false);
            return item.beMark === false;
        });
        return newArr
    },

    resetMarks: function(state){
        return (
            state.map(function(ele){
                ele.beMark = false
                return ele
            })
        )
    },
    //theDayTodos: function(state,date){
    //    state.filter(function(ele){
    //        if(ele){
    //
    //        }
    //    })
    //}
};
