const isEqual = (obj1, obj2) => {
    var prop1 = Object.keys(obj1);
    var prop2 = Object.keys(obj2);
  
    if(!prop1.every(prop => prop2.includes(prop))){
       return false;
     }
    
    for(var i = 0; i < prop1.length; i++){
        var propName = prop1[i]
        console.log(i)
        if(typeof obj1[propName] === "object"){
            isEqual(obj1[propName], obj2[propName])
        }
        else if(obj1[propName] !== obj2[propName]){
            return false;
        }
    }
  
    return true;  
};

const uniqueArray = (array) => {
    var cachedArray = []
    for(i = 0; i < array.length; i++){
        if(cachedArray.length === 0){
            cachedArray.push(array[0])
        }else{
            if(!cachedArray.some(item => isEqual(item, x[i]))){
                cachedArray.push(array[0])
            }
        }
    }
    return cachedArray;
}

module.exports = uniqueArray

