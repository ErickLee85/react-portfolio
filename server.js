const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

//server used to send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_USER);

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "ErickCrowne85@gmail.com",
        pass:""
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to send")
    }
});

router.post("/contact", (req, res) => {
    
})