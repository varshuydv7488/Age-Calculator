function calculateAge(){
    let date=document.getElementById('date').value
    let result=document.getElementById('dob')
    let today=new Date()
    let birthDate=new Date(date)
    let age=today.getFullYear()-birthDate.getFullYear()
    let month=today.getMonth()-birthDate.getMonth()
    let day=today.getDay()-birthDate.getDay()
    

        if(date==""){
        alert("Please fill the Date")
        return false

    }
    if(today < birthDate){
        alert("Future Date can't be Predict")
        return false
    }

    if(day<0){
        day=day+30
        month--
    }

     if(month<0){
        month=month+12
        age--
    }

    result.innerHTML=`You are ${age}years ${month}months ${day}days`


}



