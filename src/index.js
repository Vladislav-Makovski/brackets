module.exports = function check(str, bracketsConfig) {
  let openingBrackets = [];
  let identicalBrackets = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if(str[i] === bracketsConfig[j][0]){
        if(bracketsConfig[j][0] === bracketsConfig[j][1]){
          if(bracketsConfig.length === 0){
          identicalBrackets.push(str[i]);
          openingBrackets.push(str[i]);
          break;
          }else if(identicalBrackets[identicalBrackets.length-1] === str[i]){
            identicalBrackets.pop();
            openingBrackets.pop();
            break;
          }else {
            identicalBrackets.push(str[i]);
            openingBrackets.push(str[i]);
            break;
          }
        }
        openingBrackets.push(str[i]);
        break;
      }else if(str[i] === bracketsConfig[j][1]){
        if((openingBrackets[openingBrackets.length - 1] === bracketsConfig[j][0])){
        openingBrackets.pop();
        break;
        }else return false;
      }
    }
  } 
  if((openingBrackets.length === 0) && (identicalBrackets.length === 0)){
    return true;
  }
  return false;
}
