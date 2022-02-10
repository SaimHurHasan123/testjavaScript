function check(){
    var name=document.getElementById("name").value;
    var num =document.getElementById("num").value;
    var pop="<p style=color:red;>This field is required</p>";

    if(name==""||num==""){
        document.getElementById("name").style.border="1px solid red";
        document.getElementById("res1").innerHTML=pop;
        document.getElementById("num").style.border="1px solid red";
        document.getElementById("res2").innerHTML=pop;
    }   
    else if(name=""||isNaN(name)){
        document.getElementById("name").style.border="1px solid red";
        document.getElementById("res1").innerHTML=pop;
    }else if(num=""||!isNaN(num)){
        document.getElementById("num").style.border="1px solid red";
        document.getElementById("res2").innerHTML=pop;
    }
}
