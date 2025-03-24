let str = "akHhIlL"; 
let obj = {};
let a ="";
for(let i =0; i<str.length; i++){
  if(str[i].charCodeAt(0) > 64 && str[i].charCodeAt(0) < 91){
    a = String.fromCharCode(str[i].charCodeAt(0) + 32);
    if(obj[a]){
      obj[a].push(str[i]);
    }
    else{
     obj[a] = [str[i]];
    }
  }
  else{
    if(obj[str[i]]){
        obj[str[i]].push(str[i])
    }
    else{
        obj[str[i]] = [str[i]]
    };
  }
}
//console.log(obj);
let sortedObj = Object.keys(obj)
.sort()
.reduce((acc, key) => {
  acc[key] = obj[key];
  return acc;
}, {});
//console.log(sortedObj);
console.log(Object.values(sortedObj).flat().join(""));