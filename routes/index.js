const { Router } = require("express");
const router = Router();
const { accessUserControl, accessTimesControl } = require("../permissions");

router.get(
  "/:controlId/Times:umId/Users",
  accessUserControl,
  accessTimesControl,
  (req, res) => {
    const usersMethode = req.usersMethode;
    const timesMethode = req.timesMethode;

    if (!usersMethode.includes("get") || !timesMethode.includes("get"))
      return res.json({ message: "this method is not available" });

    res.json({ message: "users and time data" });
  }
);

router.post(
  "/:controlId/Times:umId/Users",
  accessUserControl,
  accessTimesControl,
  (req, res) => {
    const usersMethode = req.usersMethode;
    const timesMethode = req.timesMethode;

    if (!timesMethode.includes("post"))
      return res.json({ message: "you cannot change the time" });
    else if (!usersMethode.includes("post"))
      return res.json({ message: "you cannot change the user" });
    else if (!usersMethode.includes("post") || !timesMethode.includes("post"))
      return res.json({ message: "this method is not available" });

    res.json({ message: "you can change the time and user" });
  }
);

module.exports = router;
