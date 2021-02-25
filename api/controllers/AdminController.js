const { User } = require("../models/UserModel");



// exports.logOutSuperAdmin = async ( req, res ) => {

//         req.token=null;
//         res.status(200).json({
//             success: true,
//             message: " Super Admin Successfully Logged Out!",
//             data: {
//                 "token": req.token
//             }
//         });
// }


//Manage service agents 
exports.createrAgent = async ( req,res ) => {

    const user = new User(req.body);

    user.save((err, doc) => {
              if (err) {
            return res.status(422).json({
                success: false,
                message: "Please enter unique email & username!",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "Successfully Signed Up!"
            });
        }
    });
        
};