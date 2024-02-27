function validate(){
    var a=document.getElementById("name").value;
    var b=document.getElementById("phone").value;
    var c=document.getElementById("pass").value;
    var d=document.getElementById("cpass").value;
     
    if(a==""||b==""||c==""||d=="")
    {
      alert("All fields must be filled ");
      return false;
    }
    else if (b.length<10||b.length>10)
    {
      alert("PHONE NO. MUST 10 DIGIT");
      return false;
    }
    else if(isNaN(b))
    {
      alert("enter valid phone no.");
      return false;
    }
    else if (c!=d)
    {
       alert("enter matching password");
      return false;
      
    }
    else
    {
       true;
    }
   }