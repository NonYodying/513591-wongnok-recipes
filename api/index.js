import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'
import postRoute from './routes/post.route.js'
import commentRoutes from './routes/comment.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';


dotenv.config()

mongoose
.connect(process.env.MONGO)
.then(() => { 
    console.log('Mongodb is connected')
})
.catch((err) => {
    console.log(err)
})

const __dirname = path.resolve();



const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});


app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoute);
app.use('/api/comment', commentRoutes);


app.use(express.static(path.join(__dirname, '/wongnok/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'wongnok', 'dist', 'index.html'));
});

app.use((err, rq, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});