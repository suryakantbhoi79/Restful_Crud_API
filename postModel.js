const mongoose = require("mongoose");
const schema = mongoose.Schema(
    {
       productId: 'String', 
       productName:'String',
       qtyperUnit: 'String',
       unitPrice: 'String',
       unitStock : 'String',
       discontinued :'Boolean',
       catagoryId :'String',
       catagoryName : 'String'       
    },
)

const Post = mongoose.model("Post",schema);
module.exports = Post;
