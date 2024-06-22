import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
            unique: true,
        },
        image: {
            type: String,
            default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyIL56yt86gTu_z6CTzCAhX3qxJ8d4dkTsHQ&s',
        },
        time: {
            type: String,
            required: false,
        },
        difficulty: {
            type: String,
            required: false,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
    }, { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

export default Post;
