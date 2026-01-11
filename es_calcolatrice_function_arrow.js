const somma = (a,b) => {
    return a + b
}
const diff= (a,b) => {
    return a - b
}
const prod = (a,b) => {
    return a * b
}
const div= (a,b) => {
    return a / b
}

const calc_ = (a,b,op) => {
    return op(a,b)
}
function main(a,b,scelta){
    console.log("CALCOLATRICE!!!");
    console.log("cosa vuoi fare?");
    console.log("+) addizione");
    console.log("-) sottrazione");
    console.log("*) moltiplicazione");
    console.log("/) divisione");
    console.log("esci");
        switch(scelta) {
            case "+":
                console.log(`${a} ${scelta} ${b} = ${somma(a,b)}`);
                break;
            case "-":
                console.log(`${a} ${scelta} ${b} = ${diff(a,b)}`);
                break;
            case "*":
                console.log(`${a} ${scelta} ${b} = ${prod(a,b)}`);
                break;
            case "/":
                console.log(`${a} ${scelta} ${b} = ${div(a,b)}`);
                break;
            case "0":
                console.log("uscita in corso...");
                break;
            }  
}

main(20,10,"+")