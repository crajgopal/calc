function insert(num)
{    console.log(num)

    document.form1.txt.value=document.form1.txt.value+num;
}
function equal(){

    let num1 =document.form1.txt.value;
    if(num1){
     document.form1.txt.value =eval(num1);
    }
}

function backspace(){

    let num = document.form1.txt.value;
        // substring() extracts extracts characters, between two indices (positions), from a string, and returns the substring
    document.form1.txt.value=num.substring(0,num.length-1)

}