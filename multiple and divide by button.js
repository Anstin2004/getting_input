function multiply(){

            let mul1 = document.getElementById("first_number").value;
            let mul2 = document.getElementById("second_number").value;
            let result = mul1 * mul2;
            document.getElementById("output").innerHTML="The result is : "+result

}

function divide(){
    
    let div1 = document.getElementById("first_number").value;
    let div2 = document.getElementById("second_number").value;
    
    if(div2==0){
    document.getElementById("output").innerHTML="The result is undefind "}
    else{
    document.getElementById("output").innerHTML="The result is : "+div1/div2
    }
    

}