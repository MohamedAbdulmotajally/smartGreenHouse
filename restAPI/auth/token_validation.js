const {verify} = require('jsonwebtoken');

module.exports = {
    checkToken: (req, res, next) => {
        let token = req.get("authorization");
        if(token){
           token = token.slice(7);
           verify(token,"key1234", (err,encoded) =>{
            if(err){
                res.json({
                    success: 0,
                    message: "Invalid token"
                });
            }else{
                next();
            }
           });
        }else{
            res.json({
                success: 0,
                message:"Access denied! unAuthorized user"
            });
        }
    }
};