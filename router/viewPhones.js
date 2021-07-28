const express = require("express");
const router = express.Router();
require("../db/conn");
const Phone = require("../model/PhoneSchema");


router.get("/viewPhones", async (req, res) => {
    const Phonedata = await Phone.find();
  console.log(Phonedata)
  if (!Phonedata) {
    return res.json({ status: "Try Again", error: "Bhaiya Nahi Milega" });
  }
  else res.json({ data:Phonedata})

}
)

module.exports = router;
