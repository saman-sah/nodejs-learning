import express from 'express'

const router= express.Router();

router.route('/')
    .get((req, res)=> {
        res.send("Admin - Get")
    })
    .post((req, res)=> {
        res.send("Admin - Post")
    })

router.route('/route1')
    .get((req, res)=> {
        res.send("Admin/Route1 - Get")
    })
    .post((req, res)=> {
        res.send("Admin/Route1 - Post")
    })

export default router