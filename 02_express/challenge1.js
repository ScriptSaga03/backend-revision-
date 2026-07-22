const products = [
  { id: 1, name: "Laptop", category: "electronics" },
  { id: 2, name: "T-Shirt", category: "clothing" },
  { id: 3, name: "Mobile", category: "electronics" }
];




import express from 'express';

const data = [...products]


// create app
const app = express();

// Home 
app.get('/', (req, res) =>{
    res.send(`<h1>Welcome to Product Store🚀</h1>`)
})

// show Products
app.get('/products', (req, res) =>{
   const table = data.map((product) => {
        return `
        <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.category}</td>
        </tr>`;
    });

    res.send(`
        <h1>Product List</h1>
        <table border="1" cellpadding="10" cellspacing="0">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                ${table.join('')}
            </tbody>
        </table>
    `);
}
)



// query 

app.get('/products/search', (req, res) =>{
    const category = req.query.q;
    const filteredProducts =  category ? data.filter(product =>  product.category.toLowerCase() === category.toLowerCase()): [];
    res.send(`
        <h1>Search Results for "${category}"</h1>
        <ul>
            ${filteredProducts.map(product => `<li>${product.name}</li>`).join('')}
        </ul>
    `);
});


app.listen(3000, ()=>{
    console.log(`🚀 server is running on http://localhost:3000`)
})
