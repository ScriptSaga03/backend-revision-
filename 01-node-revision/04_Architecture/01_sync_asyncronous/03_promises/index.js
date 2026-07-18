



const checkUserInDB = (userID) =>{
    return new Promise((resolve, reject)=>{
        console.log("User is being search in DB, please wait...");

        setTimeout(()=>{
            const userFound = true;
            if(userFound){
                resolve({id:101, name:"Mehtab", isActive: true
                })
            }else{
                reject("Error: User not found in DB!")
            }
        },3000)
    })
};

checkUserInDB(101)
.then(userData =>{
    console.log('user data: '.userData)
})
.catch(err =>{
    console.log('Promise broken : ', err)
})
