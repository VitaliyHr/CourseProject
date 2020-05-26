

export function SumMatrix(A,B)      
{   
    let m = A.length, n = A[0].length, C = [];
    for (let i = 0; i < m; i++)
     { C[ i ] = [];
       for (let j = 0; j < n; j++) C[ i ][j] = A[ i ][j]+B[ i ][j];
     }
    return C;
}

export const RezMatrix = (A, B) => {   
  let m = A.length, n = A[0].length, C = [];
    for (let i = 0; i < m; i++)
     { C[ i ] = [];
       for (let j = 0; j < n; j++) C[ i ][j] = A[ i ][j]-B[ i ][j];
     }
    return C;
};


export function DoSecondArray(obj = {}) {
  for(let el in obj) {
    obj[el] = parseInt(obj[el]);
  }
  let finst = [];
  let prefirst = {};
  let presecond = {};
  let second = [];
  for(let key in obj) {
    if (key[0]== 'a') {
      prefirst[key] = obj[key];
    }
    else if (key[0]== 'b') {
      presecond[key] = obj[key];
    }
  }
  for (let key in prefirst) {
    finst[key[1]] = new Array(); 
  }


  for (let key in prefirst) {
    finst[key[1]][key[2]] = prefirst[key];
  }

  for (let key in presecond) {
    second[key[1]] = new Array(); 
  }

  for (let key in presecond) {
    second[key[1]][key[2]] = presecond[key];
  }

  return {
    finst, second,
  }
}



export function DoOneArray(obj = {}) {
  for(let el in obj) {
    obj[el] = parseInt(obj[el]);
  }
  let finst = [];
  let prefirst = {};
  for (let key in obj) {
    if (key[0] == 'a') {
      prefirst[key] = obj[key];
    }
  }

  for (let key in prefirst) {
    finst[key[1]] = new Array();
  }
  let k = 0;
  let m = 0;
  let n = 0;
  let d = 0;
  for (let key in prefirst) {
    finst[key[1]][key[2]] = prefirst[key];
  }
  return finst;
}


export function multMatrixNumber(a,A)
{   
    let m = A.length, n = A[0].length, B = [];
    for (let i = 0; i < m; i++)
     { B[ i ] = [];
       for (let j = 0; j < n; j++) B[ i ][j] = a*A[ i ][j];
     }
    return B;
}


export function MultiplyMatrix(A, B)
{
    let rowsA = A.length, colsA = A[0].length,
        rowsB = B.length, colsB = B[0].length,
        C = [];
    if (colsA != rowsB) return false;
    for (let i = 0; i < rowsA; i++) C[ i ] = [];
    for (let k = 0; k < colsB; k++)
     { for (let i = 0; i < rowsA; i++)
        { let t = 0;
          for (let j = 0; j < rowsB; j++) t += A[ i ][j]*B[j][k];
          C[ i ][k] = t;
        }
     }
    return C;
}

export function MatrixPow(n,A)
{ 
    if (n == 1) return A;
    else return MultiplyMatrix( A, MatrixPow(n-1,A) );
}