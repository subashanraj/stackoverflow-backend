const express = require('express')
const router = express.Router()
const questionRouter = require('./')
// const answerRouter = require('./')
// const commentRouter = require('./')

router.get('/',(req,res)=>{
    res.send("welcome to stk" )
})

router.use('/question',questionRouter);

module.exports=router;