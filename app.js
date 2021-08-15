const express = require("express");
const app = express();
const db = require("./connection");
const postModel = require("./postModel");
app.use(express.urlencoded({extended: true}))
app.use(express.json());


//CRUD APPLICATIONS

app.post('/',async(req,res)=>{
    const {productId,productName,qtyperUnit,unitPrice,unitStock,discontinued,catagoryId,catagoryName}=req.body;
    
    try{
        const newPost = await postModel.create({productId,productName,qtyperUnit,unitPrice,unitStock,discontinued,catagoryId,catagoryName});
        res.json(newPost)
    }catch(error){
        res.status(500).send(error)

    }
});

app.get('/',async (req,res)=>{
    try{
        const posts = await postModel.find();
        res.json(posts)
    }catch(error){
        res.status(500).send(error)
    }
});

app.get('/:id',async(req,res)=>{
    const {id} = req.params;
    try{
        const post = await postModel.findById(id);
        res.json(post);
    }catch(error){
        res.status(500).send(error)
    }
});


app.put('/:id', async(req,res)=>{
    const {id} = req.params;
    const {productId,productName,qtyperUnit,unitPrice,unitStock,discontinued,catagoryId,catagoryName} = req.body;
    try {
        const post = await postModel.findByIdAndUpdate(id,{productId,productName,qtyperUnit,unitPrice,unitStock,discontinued,catagoryId,catagoryName});
        res.json(post)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.delete('/:id', async(req,res)=>{
    const {id} = req.params;
    try {
        const post = await postModel.findById(id);
        await post.remove();
        res.json("Deleted Successfully")
    } catch (error) {
        res.status(500).send(error)
    }
})



app.listen(3000,()=>{
    console.log('Server is running at port 3000')
})
