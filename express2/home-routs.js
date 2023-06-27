import express from 'express'

const router= express.Router();

router.route('/')
    .get((req, res)=> {
        res.send("Home - Get")
    })
    .post((req, res)=> {
        res.send("Home - Post")
    })

export default router