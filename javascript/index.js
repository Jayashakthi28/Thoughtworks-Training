Array.prototype.customMap = function (callbackFn) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callbackFn(this[i]));
  }
  return newArray;
};

Array.prototype.customFilter = function (callbackFn) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i])) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

Array.prototype.customReduce = function(callbackFn,initialValue=0){
    let reducedValue=initialValue;
    for(let i=0;i<this.length;i++){
        reducedValue=callbackFn(reducedValue,this[i]);
    }
    return reducedValue;
}

Array.prototype.customForEach=function(callbackFn){
    for(let i=0;i<this.length;i++){
        callbackFn(this[i],i);
    }
}
