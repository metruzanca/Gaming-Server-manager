colors = {
    Close: "</span>",
    Red: `<span style="color: red">`,
    Green: `<span style="color: green">`,
    Yellow: `<span style="color: yellow">`,
    Blue: `<span style="color: blue">`,
    Magenta: `<span style="color: magenta">`,
    Cyan: `<span style="color: cyan">`
}

function format(string){
    let newString = '';
    const colorSwaps = 2;
    let blockNum = 0;
    for (let i = 0; i < string.length; i++) {
        
        if (blockNum < colorSwaps * 2) {
            if (blockNum == 0 && string[i] == '['){
                newString += string[i] + colors.Magenta;
                blockNum++;
                continue;
            } else if (blockNum == 1 && string[i] == ']'){
                newString += colors.Close + string[i];
                blockNum++;
                continue;
            } else if (blockNum == 2 && string[i] == '['){
                newString += string[i] + colors.Blue;
                blockNum++;
                continue;
            } else if (blockNum == 3 && string[i] == ']'){
                newString += colors.Close + string[i];
                blockNum++;
                continue;
            }
        }
        newString += string[i]
    }
    return newString
}