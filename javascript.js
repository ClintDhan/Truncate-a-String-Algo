
const truncateString = (str , number) => {

    if(!Number(number)) {
        return "Please input a valid number";
    }

    if(str.length > number) {
        return str.slice(0, number) + "...";
    }
    else {
        return str;
    }
}

console.log(truncateString("lesgow my precious baby", 10));