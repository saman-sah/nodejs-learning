console.clear();

import express from 'express'

import homeRouter from './home-routs.js'
import userRouter from './user-routs.js'
import adminRouter from './admin-routs.js'

const app= express();

app.use('/', homeRouter);
app.use('/user', userRouter);
app.use('/admin', adminRouter);

app.listen(3000)