function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

//We can use module.exports only one time as it overwrite the values
module.exports = {
    add,
    sub,
}

//Second way to export any function
exports.add = (a,b)=>{
    a+b;
}
exports.sub = (a,b)=>{
    a-b;
}


