



const welcomeUser= (username,callback) =>{
    console.log(`1: Welcome process start for ${username}`);

    setTimeout(()=>{
            for(let i = 1; i <= 3; i++){
                console.log( `please wait ${i}`)
            }
            callback()
        },3000)
  
};



const loggedStatus = ()=>{
    console.log('2. Status: User successfully logged into system!  ')
}


welcomeUser('Mehtab', loggedStatus)
