import inquirer from "inquirer"

//Initialize user balance and pin coad
let myBalance = 5000;
let myPin = 3456;

// Print Wellcome Message
console.log("Wellcome to coad with Ambreen ATM Machine");

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your Pin coad:",
    }
])
if (pinAnswer.pin ===myPin){
    console.log("Pin is Correct,login Successfully!");
   // console.log(`Current Amount Blance is ${ myBalance}`)

    let operationAns = await inquirer.prompt([
        {
            name : "operation",
            type : "list",
            message : "select an opreation",
            choices :["withdraw Amount", "Check Balance"]
        }
    ])

if(operationAns.operation ==="withdraw Amount"){
    let amountAns = await inquirer.prompt([
  {
    name : "amount",
    type : "number",
    message : "Enter the amount to withdraw:"
  }    
    ])

   
    if (amountAns.amount >  myBalance){
        console.log("insufficunt Balance");

    }
else{
    myBalance -= amountAns.amount;
    console.log(`${amountAns.amount} withdraw successfully`);
    console.log(`Your Remaining is: ${myBalance}`)
    }

}
else if ( operationAns.operation === "Check Balance"){
    console.log(`Your Amount Balance is: ${myBalance}`);
}
}
else{
    console.log("Pin is incorrect, Try Again!");
}

