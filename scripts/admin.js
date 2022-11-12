let form =document.getElementById('mobile_form')
let mobile_data=JSON.parse(localStorage.getItem('mobile_data'))||[]

       
form.addEventListener('submit',function(event){
    event.preventDefault()
    let obj={
        name:form.mobile_name.value,
        brand:form.mobile_brand.value,
        price:Number(form.mobile_price.value),
        image:form.mobile_image.value,
       }
       
        mobile_data.push(obj)
        localStorage.setItem('mobile_data',JSON.stringify(mobile_data))
        location.reload()
       console.log(obj)
})