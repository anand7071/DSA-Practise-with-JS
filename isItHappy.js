// brute force 

function printLogestIncSubArr(n)
{
    n=n.toString().split("")
    
  
    while(true){
        //console.log(n.join(""))
     if(n.length===1){
        if(parseInt(n.join(""))===1)
            return true
        else
            return false
      }
      
     else{
          let sum = 0
          for(i=0;i<n.length;i++){
              sum=sum +parseInt(n[i])*parseInt(n[i]);
          }
          
          n=sum.toString().split("")
          //console.log(n)
      }
    }
  
}

function runProgram(inp){
  var input = inp.split("\n");
  var test = input[0];
   var line = 1;
  
  for(var i = 0; i < test; i++){
    n =  +input[line];
    line++
    
    printLogestIncSubArr(n)
    
  }
  
}
if (process.env.USERNAME === "Dell") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }


