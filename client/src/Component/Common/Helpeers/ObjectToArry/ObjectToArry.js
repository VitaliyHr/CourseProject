export const FromObjectToArrays=(obj = {})=>{
    let first = [];
    let second = [];
    for(let key in obj){
      if(key[0] === 'a'){
        let res = parseInt(obj[key]);
        first.push(res);
      }
      else if(key[0] === 'b'){
        let res = parseInt(obj[key]);
        second.push(res);
      }
    }
    return {
      first, second
    };
  };