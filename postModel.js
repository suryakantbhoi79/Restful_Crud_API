const mongoose = require("mongoose");
const schema = mongoose.Schema(
    {
       productName:'String',
       productId: 'String',
       productAvailability:'String'
    },
    {timestamps: true}
)

const Post = mongoose.model("Post",schema);
module.exports = Post;