let a;
let b;
const somma= (a,b) => a + b;
const diff=  (a,b) => a - b;
const prod=  (a,b) => a * b;
const div=   (a,b) => a / b;
    

    

function main(a,b,scelta){
    const s = somma(a,b);
    const d = diff(a,b);
    const p = prod(a,b);
    const x = div(a,b);
    console.log("CALCOLATRICE!!!");
    console.log("cosa vuoi fare?");
    console.log("+) addizione");
    console.log("-) sottrazione");
    console.log("*) moltiplicazione");
    console.log("/) divisione");
    console.log("esci");
        switch(scelta) {
            case "+":
                console.log(`${a} ${scelta} ${b} = ${s}`);
                break;
            case "-":
                console.log(`${a} ${scelta} ${b} = ${d}`);
                break;
            case "*":
                console.log(`${a} ${scelta} ${b} = ${p}`);
                break;
            case "/":
                console.log(`${a} ${scelta} ${b} = ${x}`);
                break;
            case "0":
                console.log("uscita in corso...");
                break;
            }  
}

main(20,10,"+")
