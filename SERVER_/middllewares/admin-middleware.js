const adminMiddleware = async (req,res,next) =>{
    try {
        console.log(req.user);
        const adminRole = req.user.isAdmin;
        if(!adminRole){
            return res.status(403).json({message:"Access denied. User is not ans admin."});
        }
        // res.status(200).json({msg:req.user.isAdmin});

        //if admin then next
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = adminMiddleware;