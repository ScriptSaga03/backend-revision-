import express from "express"


// create app

const app = express();




// Home Route (GET Request)
app.get('/' , (req, res) =>{
    res.send(`<h1>Welcome to Express.js, Mehtab!🚀</h1>`)
});



// API Route (Get Request for JSON )
app.get('/api/user', (req, res) =>{
    const user = {
        name:"Mehtab",
        role: "Backend-Developer",
        compony :  "Staring"
    }
    res.json(user)
});



// user route with path params (single params)

app.get('/user/:id', (req, res) =>{
    const userID  = req.params.id;
    res.send(`<h2>User ID : ${userID}</h2>`)
})


// user route wiht path params (multiple params);
app.get('/user/:id/:name', (req, res) =>{
    const userID = req.params.id;
    const userName = req.params.name;
    res.send( `user id :$${userID} <br> user name: ${userName}`)
})


// search query params
app.get('/search', (req, res) =>{
    const searchQuery = req.query.q;
    res.send(`<h2>Search Query :${searchQuery}</h2>`);
})



const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`🚀 express server is running on http://localhost:${PORT}`)
})

