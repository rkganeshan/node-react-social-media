exports.createPostValidator=(req,res,next)=>{
    //title
    req.check('title',"Write a title").notEmpty(),
    req.check('title',"Title must be between 4 to 150 characters").isLength({
        min:4,
        max:150
    })
     //title
     req.check('body',"Write a body").notEmpty(),
     req.check('body',"Body must be between 4 to 2000 characters").isLength({
         min:4,
         max:2000
     })
     //check for errors
     const errors=req.validationErrors()
     if(errors)
     {
         const firstError=errors.map((error)=>error.msg)[0]
         return res.status(400).json({
             error:firstError
         })
     }
     next()
}

exports.userSignupValidator=(req,res,next)=>{
    req.check("name","Name is required").notEmpty()

    req.check("email","Email must be of 3 to 32 characters").notEmpty()
    .matches(/.+\@.+\..+/)
    .withMessage("Email must contain @")
    .isLength({
        min:4,
        max:2000
    })

    req.check("password","Password is required").notEmpty()
    req.check("password")
    .isLength({min:5})
    .withMessage("Password must contain atleast 5 chars")
    .matches(/\d/)
    .withMessage("Password must contain a number")

    //check for errors
    const errors=req.validationErrors()
    if(errors)
    {
        const firstError=errors.map((error)=>error.msg)[0]
        return res.status(400).json({
            error:firstError
        })
    }
    next()

}