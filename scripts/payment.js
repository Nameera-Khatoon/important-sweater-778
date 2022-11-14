function getOTP(){
    alert("OTP sent on your Email")
}
document.querySelector("#pay").addEventListener("click",function(){
    let otp=document.querySelector("#otp1").value;
    console.log(otp)
    if(otp=="2525"){
window.location.href="paid.html"
    }else{
        alert("Fill correct OTP!")
    }
})