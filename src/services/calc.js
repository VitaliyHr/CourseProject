

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
  let m = A.length;
  let C = [];
  for (let i = 0; i < m; i++) {
    C[i] = [];
    C[i] = A[i] - B[i];
  }
  return C;
};


export function DoSecondArray(obj = {}) {
  let finst = [];
  let prefirst = {};
  let presecond = {};
  let second = [];
  for (let key in obj) {
    if (key[0] == 'a') {
      prefirst[key] = obj[key];
    }
    else if (key[0] == 'b') {
      presecond[key] = obj[key];
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
    if (key[1] == '0') {
      finst[0][k] = prefirst[key];
      ++k;
    }
    else if (key[1] == '1') {
      finst[1][m] = prefirst[key];
      ++m;
    }
    else if (key[1] == '2') {
      finst[2][n] = prefirst[key];
      ++n;
    }
    else if (key[1] == '3') {
      finst[3][d] = prefirst[key];
      ++d;
    }
  }
  for (let key in presecond) {
    second[key[1]] = new Array();
  }
  let b = 0;
  let f = 0;
  let r = 0;
  let l = 0;
  for (let key in presecond) {
    if (key[1] == '0') {
      second[0][b] = presecond[key];
      ++b;
    }
    else if (key[1] == '1') {
      second[1][f] = presecond[key];
      ++f;
    }
    else if (key[1] == '2') {
      second[2][r] = presecond[key];
      ++r;
    }
    else if (key[1] == '3') {
      second[3][l] = presecond[key];
      ++l;
    }
  }
  return {
    finst, second,
  };
}



export function DoOneArray(obj = {}) {
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
    if (key[1] == '0') {
      finst[0][k] = prefirst[key];
      ++k;
    }
    else if (key[1] == '1') {
      finst[1][m] = prefirst[key];
      ++m;
    }
    else if (key[1] == '2') {
      finst[2][n] = prefirst[key];
      ++n;
    }
    else if (key[1] == '3') {
      finst[3][d] = prefirst[key];
      ++d;
    }
  }
  return finst;
}


export function multMatrixNumber(a,A)  // a - число, A - матрица (двумерный массив)
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