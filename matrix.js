//1
function isSymmetricMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    
    if (rows !== cols) {
        return false; 
    }
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] !== matrix[j][i]) {
                return false;
            }
        }
    }
    
    return true;
}


let matrix = [
    [1, 2, 3],
    [2, 5, 4],
    [3, 4, 6]
];
console.log(isSymmetricMatrix(matrix)); 
//2
function rotateMatrix(matrix) {
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
    
    return matrix;
}

const inputMatrix = [[1,2,3],[4,5,6],[7,8,9]];
const rotatedMatrix = rotateMatrix(inputMatrix);
console.log(rotatedMatrix);
//3
function multiplyMatrices(matrix1, matrix2) {
    let rowsMatrix1 = matrix1.length;
    let colsMatrix1 = matrix1[0].length;
    let rowsMatrix2 = matrix2.length;
    let colsMatrix2 = matrix2[0].length;
    if (colsMatrix1 !== rowsMatrix2) {
        throw new Error("Matrix multiplication is not possible. Column count of Matrix 1 must equal row count of Matrix 2.");
    }
    let result = new Array(rowsMatrix1);
    for (let i = 0; i < rowsMatrix1; i++) {
        result[i] = new Array(colsMatrix2).fill(0);
    }
    for (let i = 0; i < rowsMatrix1; i++) {
        for (let j = 0; j < colsMatrix2; j++) {
            for (let k = 0; k < colsMatrix1; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    return result;
}

const matrix1 = [[1,4,7],[2,5,8],[3,6,9]];
const matrix2 = [[1,2],[1,2],[1,2]];
const result = multiplyMatrices(matrix1, matrix2);
console.log(result);
