function Greatest_of_three_number(){

    let num1=document.getElementById("first_number").value;
    let num2=document.getElementById("second_number").value;
    let num3=document.getElementById("third_number").value;

    if(num1>num2 && num1>num3){
        document.getElementById("output").innerHTML="The First number is greater"+num1
    }
    else if (num2>num1 && num2>num3){

        document.getElementById("output").innerHTML="The Second number is greater"+num2
    }
    else{
        
        document.getElementById("output").innerHTML="The Third number is greater"+num3
    }
}
