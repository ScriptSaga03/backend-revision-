


import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();



// file directory 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



app.get('/',(req,res) =>{
    const filePath = path.join(__dirname, 'invoice.txt');
    res.download(filePath, 'invoice.txt',(err)=>{
        if(err){
            res.status(500).send('file download failed')
        }
    })
})



// permanentaly redirect
app.get('/old-invoice-path', (req, res) => {
    res.redirect(301,'/download-invoice');
});



// server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})

