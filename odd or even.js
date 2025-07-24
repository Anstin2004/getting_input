function OddOrEven(){
    const number=document.getElementById("num").value;
    if(number%2==0){
        document.getElementById("Output").innerHTML="The number "+number+" is even"
    }
    else{
        document.getElementById("Output").innerHTML="The number "+number+" is odd"
    }
}