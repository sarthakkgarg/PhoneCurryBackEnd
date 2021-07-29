const express = require("express");
const router = express.Router();
const Phone = require("../model/PhoneSchema");
require("../db/conn");
const upload = require("../middleware/upload");

router.post("/savePhoneData",upload.single("file"), async (req, res) => {
  const { 
    Name, 
    Model, 
    Brand, 
    Processor, 
    Price,
    Display,
    ReleaseDate,
    Ram, 
    DisplayRes,
    DisplayType,
    Weight,
    Os,
    InternalMemory,
    ExternalMemory,
    CameraMain,
    CameraSecondary,
    CameraFront,
    CameraVideoRes,
    is5G,
  } = req.body;

  // console.log(req.body)
  const Specification = {
    Ram:Ram,
    DisplayRes:DisplayRes,
    DisplayType:DisplayType,
    Weight:Weight,
    Os:Os,
    InternalMemory:InternalMemory,
    ExternalMemory:ExternalMemory,
    CameraMain:CameraMain,
    CameraSecondary:CameraSecondary,
    CameraFront:CameraFront,
    CameraVideoRes:CameraVideoRes,
    Weight:Weight,
    is5G:is5G,
    Model:Model,
    Display:Display,
  }
  console.log(Specification)

  try {
    const response = await Phone.create({
      Name, Brand, Processor, Specification ,Price ,ReleaseDate,
    });
    console.log('response', response)
  } catch (error) {
    if (error.code === 11000) {
      // duplicate key
      return res.json({ status: "error", error: "Already Exists" });
    }
    throw error;
  }
  res.json({ status: 200 });
});


module.exports = router;
