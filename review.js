//1
function decodeString(s) {
    let stack = [];
    let currentNum = 0;
    let currentStr = "";
    
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            currentNum = currentNum * 10 + Number(s[i]);
        } else if (s[i] === '[') {
            stack.push(currentStr);
            stack.push(currentNum);
            currentStr = "";
            currentNum = 0;
        } else if (s[i] === ']') {
            let num = stack.pop();
            let prevStr = stack.pop();
            currentStr = prevStr + currentStr.repeat(num);
        } else {
            currentStr += s[i];
        }
    }
    
    return currentStr;
}

console.log(decodeString("3[a2[c]]")); 
//2
function longestSubstringCount(s, target) {
    let maxCount = 0;
    let currentCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === target) {
            currentCount++;
            
    }
}
    return currentCount;
}

console.log(longestSubstringCount("accaccacc", 'a')); 