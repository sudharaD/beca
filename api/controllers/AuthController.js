const { User } = require("../models/UserModel");
const UserRole = require('../enums/UserRole');

exports.registerUser = async (req, res) => {
    const user = new User(req.body);

    await user.save((err, doc) => {
        if (user.role == UserRole.SERVICE_AGENT) {
            return res.status(403).json({
                success: false,
                message: "No authorization to access this route!"
            });
        }
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

exports.loginUser = (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) {
            return res.status(404).json({ 
                success: false, 
                message: "User email not found!" 
            });
        } else {
            user.comparePassword(req.body.password, (err, isMatch) => {
                //isMatch is eaither true or false
                if (!isMatch) {
                    return res.status(400).json({ 
                        success: false, 
                        message: "Wrong Password!" });
                } else {
                    user.generateToken((err, token) => {
                        if (err) {
                            return res.status(400).send({ 
                                'success': false, 
                                message: err });
                        } else {
                            res.status(200).json({
                                success: true,
                                message: "Successfully Logged In!",
                                data: {
                                    "token": token
                                }
                            });
                        }
                    });
                }
            });
        }
    });
};
exports.logOutUser = async ( req, res ) => {
        req.token=null;
        res.status(200).json({
            success: true,
            message: " Super Admin Successfully Logged Out!",
            data: {
                "token": req.token
            }
        });
}

exports.getUserDetails= (req, res) => {
    res.json({status: true, message: "User Received!", data: req.user});
};
// const { User } = require("../models/UserModel");

// exports.registerUser = async (req, res) => {
//     const user = new User(req.body);

//     user.save((err, doc) => {
//         if (err) {
//             return res.status(422).json({
//                 success: false,
//                 message: "Registration failed, Check the validation errors!",
//                 data: err
//             });
//         } else {
//             return res.status(200).json({
//                 success: true,
//                 message: "Successfully Signed Up!"
//             });
//         }
//     });
// };

// exports.loginUser = (req, res) => {
//     User.findOne({ email: req.body.email }, (err, user) => {
//         if (!user) {
//             return res.status(404).json({ 
//                 success: false, 
//                 message: "User email not found!" 
//             });

//             // tempory part start
//         }

//         user.comparePassword(req.body.password, (err, isMatch) => {
                    
//             if (!isMatch) {
//                 return res.status(400).json({ 
//                     success: false, 
//                     message: "Password is incorrect!" 
//                 });
//             }
//             user.generateToken((err, token) => {
//                 if (err) {
//                     return res.status(400).json({ 
//                         success: false,
//                         message: "Unable to generate key!",
//                         data: err
//                      });
//                 }

//                 return res.status(200).json({ 
//                     success: true, 
//                     message: "Successfully Logged In!",
//                     data: {
//                         "token":token
//                     }
//                 });
//             });
//         });
        // tempory part end

        // } else {
        //     user.comparePassword(req.body.password, (err, isMatch) => {
        //         //isMatch is eaither true or false
        //         if (!isMatch) {
        //             return res.status(400).json({ 
        //                 success: false, 
        //                 message: "Password is incorrect!" 
        //             });
        //         } else {
        //             user.generateToken((err, token) => {
        //                 if (err) {
        //                     return res.status(400).send({ 'success': false, message: err });
        //                 } else {
        //                     res.status(200).json({
        //                         success: true,
        //                         message: "Successfully Logged In!",
        //                         data: {
        //                             "token": token
        //                         }
        //                     });
        //                 }
        //             });
        //         }
        //     });
        // }
//     });
// };

// temporary start
// exports.getUserDetails= (req, res) => {
//     return res.status(200).json({
//         status: true, 
//         message: "User Received!", 
//         data: req.user
//     });
// };
// temporary close

// exports.getUserDetails= (req, res) => {
//     res.json({status: true, message: "User Received!", data: req.user});
// };