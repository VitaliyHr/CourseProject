export const SumMatrix=(A,B)=>
{   
    var m = A.length, C = [];
    for (var i = 0; i < m; i++)
     {C[ i ] = [];
        C[ i ] = A[ i ]+B[ i ];
     }
    return C;
}
export const RezMatrix=(A,B)=>
{   
    var m = A.length, C = [];
    for (var i = 0; i < m; i++)
     { C[ i ] = [];
        C[ i ] = A[ i ]-B[ i ];
     }
    return C;
}