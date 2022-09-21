const DOB = document.querySelector("#dob")
const LUCKNUM = document.querySelector("#lucknum")
const BTN = document.querySelector("#btn")
let msg = document.querySelector("#message")
let sum;
const checkLuck = () => {

    if (LUCKNUM.value ==='' || DOB.value===''){
        msg.innerHTML = "Enter Values"
    }else{
    sum = 0;
    let LuckyNumber = LUCKNUM.value   
    let Datesum = DOB.value.replaceAll("-","")

   
    let Datearray = Datesum.slice()

    

    for(let i=0;i<Datearray.length;i++){
        sum = sum + Number(Datearray[i])
    }

    let result = sum%LuckyNumber

    if (result === 0){
        msg.innerHTML = "Your Birthday is lucky 🤩"
    }else{
        msg.innerHTML = "Your Birthday is not lucky🥶"
    }
    
}
}

BTN.addEventListener("click", () => checkLuck())

