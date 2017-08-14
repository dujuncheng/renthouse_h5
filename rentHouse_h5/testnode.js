


var tempArr = str.split('\n');
for (i=0;i<tempArr.length;i++){
  var secondstr = tempArr[i].split(',')[1];
  if(secondstr.indexOf('套内')>0){
    var index = secondstr.indexOf('套内');
    secondstr = secondstr.substr(index+2);
    if (secondstr.indexOf(')')>0){
      secondstr = secondstr.substr(0,secondstr.indexOf(')'));
    }
    tempArr[i].split(',')[1] = secondstr;
    console.log(tempArr);
  }
}
