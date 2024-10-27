import express from "express"

const app = express();


app.get('/api/products',(req,res)=>{
    const products=[
        {
            id:1,
            name:'wooden',
            price:200,
            image:'https://pixabay.com/photos/folkstone-harbor-port-england-8978132/'
        },
        {
            id:1,
            name:'table wooden',
            price:200,
            image:'https://pixabay.com/photos/folkstone-harbor-port-england-8978132/'
        },
        {
            id:1,
            name:'table wooden',
            price:200,
            image:'https://pixabay.com/photos/folkstone-harbor-port-england-8978132/'
        },
        {
            id:1,
            name:'table wooden',
            price:200,
            image:'https://pixabay.com/photos/folkstone-harbor-port-england-8978132/'
        },
        {
            id:1,
            name:'table wooden',
            price:200,
            image:'https://pixabay.com/photos/folkstone-harbor-port-england-8978132/'
        },
    ]


    //http://localhost:3000/api/products?search=metal // '?' -query parameter

    // how to handle this request of search 
    if(req.query.search){
       const filterProducts =  products.filter(product =>
            product.name.includes(req.query.search))
            res.send(filterProducts);
            return;
    }

    // i want that it takes some delay
    setTimeout(()=>{
        res.send(products);
    },3000)
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});