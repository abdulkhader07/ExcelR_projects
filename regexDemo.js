const phoneNumberValidation=()=>
{
    let phoneNo=document.getElementById('phoneNumber').value 
    let noValidation=document.getElementById('phoneNumber')
    let regex=/^[7-9][0-9]{9}$/
    if(regex.test(phoneNo))
    {
        console.log('successfully validation')
        return true 
    }
    else
    {
        noValidation.style.border="red solid 4px"
        return false
    }
}