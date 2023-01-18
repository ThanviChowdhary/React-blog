

const router = require("express").Router();

const User = require("../models/User");
//var CryptoJS = require("crypto-js");


//REGISTER
app.use(express.urlencoded({ extended: true }))
router.post("/register", async (req, res) => {
    //console.log(req.body)
    res.send("POST/regster response")
    try {
        const newUser = new User({

            username: req.body.username,
            /*password: CryptoJS.AES.encrypt(
                req.body.password,
                process.env.VUONG_SEC_PASS
            ).toString(),*/
            email: req.body.email,
            password: req.body.password,

        });
        // import * as CryptoJS from 'crypto-js';
        //try {
        const user = await newUser.save();
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json(err);
    }
    //}
});

//LOGIN
/*router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json("Sai thông tin đăng nhập");

        const decryptPass = CryptoJS.AES.decrypt(
            user.password,
            process.env.VUONG_SEC_PASS
        ).toString(CryptoJS.enc.Utf8);
        decryptPass !== req.body.password && res.status(401).json("Sai thông tin đăng nhập");

        try {
            const { password, ...others } = user._doc;
            res.status(200).json(others);
        } catch (error) {
            res.status(500).json(error);
        }
    } catch (error) { }
});
*/

module.exports = router
//module.exports = mongoose.model("user", UserSchema)
