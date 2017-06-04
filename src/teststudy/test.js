var function_1=function(callback){
  var num = 0;
  console.log(num++);
  (callback && typeof(callback) === "function") && callback(num);
}
function_1(function(num){console.log(num)});
