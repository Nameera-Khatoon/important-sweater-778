

let div = document.getElementById('r_checkbox')
let count = 0; 

let data = []
div.onclick = function(){
    count++;
    let btn=document.getElementById('sgfr_btn')
    if(count%2==0){
        div.style.backgroundColor = "white"
    }else{
        div.style.backgroundColor = "green"
    }
      
    btn.addEventListener('click',function(){
        let firstname = document.getElementById('firstname')
        let lastname = document.getElementById('lastname')
        let email = document.getElementById('email')
        let password = document.getElementById('password')
        let country = document.getElementById('country')
        let obj = {
            Firstname:firstname.value,
            Lastname:lastname.value,
            Email:email.value,
            Password:password.value,
            Country:country.value,
        }   

        data.push(obj)
        localStorage.setItem("signup_data_consumer" , JSON.stringify(data))

        window.location.href = "index.html"
    })

// let pass = document.querySelector("#password").value


// for(let i=0;i<pass.length;i++){
//     if(pass[i] == '@'|| pass[i] == '!' || pass[i] == '#'|| pass[i] == '$' || pass[i] == '%'|| pass[i] == '*' || pass[i] == '&' && pass[i] == 0 || pass[i] == 1 ||pass[i] == 2 ||pass[i] == 3 ||pass[i] == 4 ||pass[i] == 5 ||pass[i] == 6 ||pass[i] == 7 ||pass[i] == 8 ||pass[i] == 9){
//             alert("horray!!!")

//     }else{
//         alert ("lol")
//     }
// }  



// var numbers = /[0-9]/g;
// if(pass.value.match(numbers)) {
//   number.classList.remove("invalid");
//   number.classList.add("valid");
// } else {
//   number.classList.remove("valid");
//   number.classList.add("invalid");
// }
// if(pass.value.length >= 8) {
//   length.classList.remove("invalid");
//   length.classList.add("valid");
// } else {
//   length.classList.remove("valid");
//   length.classList.add("invalid");
// }

}

