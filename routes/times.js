const { Router } = require("express");
const router = Router();
const { accessTimesControl } = require("../permissions");

router.get("/:controlId/Times", accessTimesControl, (req, res) => {
  const methods = req.timesMethode;
  if (!methods.includes("get"))
    return res.json({ message: "this method is not available" });

  res.json({
    message: "users and time data ",
  });
});

router.post("/:controlId/Times", accessTimesControl, (req, res) => {
  const methods = req.timesMethode;
  if (!methods.includes("post"))
    return res.json({ message: "this method is not available" });

  res.json({ message: `this method ${methods.join("")} for time` });
});

router.put("/:controlId/Times", accessTimesControl, (req, res) => {
  const methods = req.timesMethode;
  if (!methods.includes("put"))
    return res.json({ message: "this method is not available" });

  res.json({ message: `this method ${methods.join("")} for time` });
});

module.exports = router;
