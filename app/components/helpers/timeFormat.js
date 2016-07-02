exports.fTimestamp = function(timestamp){
    var date = new Date(timestamp);
    return `${date.getFullYear()}年 ${date.getMonth()+1}月 ${date.getDate()}日 ${date.getHours()}:${date.getMinutes()} `
}
exports.fTimestampToDate = function(timestamp){
    var date = new Date(timestamp);
    return `${date.getFullYear()}年 ${date.getMonth()+1}月 ${date.getDate()}日 `
}
exports.fTimestampToDateLin = function(timestamp){
    var date = new Date(timestamp);
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
}