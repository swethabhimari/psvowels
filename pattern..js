//1.
function printPattern() {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let index = 0;
    let row = 1;
    
    while (index < alphabet.length) {
        let line = "";
        let count = 0;
        
        while (count < row && index < alphabet.length) {
            line += alphabet[index];
            index++;
            count++;
        }
        
        console.log(line);
        row++;
    }
}


printPattern();

//2
function printAlphabetPyramid(rows) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let index = 0;
    
    for (let i = 1; i <= rows; i++) {
        let line = " ";
        
     
        for (let j = 0; j < rows - i; j++) {
            line += " ";
        }
        
        
        for (let j = 0; j < i; j++) {
            if (index < alphabet.length) {
                line += alphabet[index] + " ";
                index++;
            }
        }
        
        console.log(line);
    }
}


printAlphabetPyramid(3);

