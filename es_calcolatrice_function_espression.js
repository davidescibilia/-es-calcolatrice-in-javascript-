const somma_ = function(a,b){
    return a + b
}
const diff_ = function(a,b){
    return a - b
}
const prod_ = function(a,b){
    return a * b
}
const div_ = function(a,b){
    return a / b
}

function calc(a,b,op){
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
                console.log(`${a} ${scelta} ${b} = ${somma_(a,b)}`);
                break;
            case "-":
                console.log(`${a} ${scelta} ${b} = ${diff_(a,b)}`);
                break;
            case "*":
                console.log(`${a} ${scelta} ${b} = ${prod_(a,b)}`);
                break;
            case "/":
                console.log(`${a} ${scelta} ${b} = ${div_(a,b)}`);
                break;
            case "0":
                console.log("uscita in corso...");
                break;
            }  
}

main(20,10,"+")