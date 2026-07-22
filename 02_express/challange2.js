import express from 'express';

const users = [
  { id: 1, name: "Mehtab", role: "Backend Dev" },
  { id: 2, name: "Rahul", role: "Frontend Dev" }
];




// create express app 
const app = express();


// PORT 
const PORT = process.env.PORT || 8000;



app.get('/',(req, res) =>{
    res.send(`<h1 style="color:blue">Profile</h1>`)
});




app.get('/users/:id', (req, res)=>{
    const userID = req.params.id;

    const isExist = users.find(u => u.id === +userID);

    if(isExist){
        res.status(200).json({msg: 'user found successfully.',data:isExist})
    } else{
        res.status(400)
        .json({
            msg: 'Error: user not found in list!'
        })
    }
})








// server listen 
app.listen(PORT ,() =>{
    console.log(`🚀 server is running on http://localhost:${PORT}`)
})





