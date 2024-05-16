function validate()
{
    var v=document.myform.vname.value;
    var rgxv=/^[A-Z a-z]+$/;
    if(v.match(rgxv))
    {
        alert("valid");
        return true;

    }
    else
    {
        alert("invalid");
        return false;
    }

}