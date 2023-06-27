import express from 'express'

const router= express.Router();

router.route('/')
    .get((req, res)=> {
        res.send("User - Get")
    })
    .post((req, res)=> {
        res.send("User - Post")
    })

router.route('/route1')
    .get((req, res)=> {
        res.send("User/Route1 - Get")
    })
    .post((req, res)=> {
        res.send("User/Route1 - Post")
    })

export default router