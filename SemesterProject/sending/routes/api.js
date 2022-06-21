const express = require("express");

const router = express.Router();

const BlogPost = require("../models/model");
const Credit=require("../models/creditmodel")
router.get("/", async (req, res) => {
  BlogPost.find({})
    .then((data) => {
      //binding obj
      console.log("data:", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
  // res.json(data);
});
router.get("/", async (req, res) => {
  Credit.find({})
    .then((data) => {
      //binding obj
      console.log("data:", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
  // res.json(data);
});

router.post("/save", (req, res) => {
  BlogPost.create(req.body);
  res.json({
    msg: "We recieved Your data!!",
  });
});

router.post("/Credit",(req,res)=>{
  Credit.create(req.body);
  res.json({
    msg:"Subscription Successful",
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  BlogPost.findOne({ email }, (err, user) => {
    if (err) console.log("Error Found");
    if (user) {
      if (user.password == password) {
        res.json({
          message: "Login Successful",
        });
      } else {
        res.json({
          message: "Invalid Credentials",
        });
      }
    }
  });
});

module.exports = router;