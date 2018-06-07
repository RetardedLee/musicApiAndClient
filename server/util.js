function isEmptyObject( obj ) {
    // 不具有属性或者属性不可枚举
    var name;

    for ( name in obj ) {
        return false;
    }
    return true;
}
module.exports={
    isEmptyObject
}