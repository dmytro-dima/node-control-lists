const { Router } = require("express");
const router = Router();
const { accessUserControl } = require("../permissions");

router.get("/:umId/Users", accessUserControl, (req, res) => {
  const methods = req.usersMethode;
  if (!methods.includes("get"))
    return res.json({ message: "this method is not available" });

  res.json({
    message: "users data",
  });
});

router.post("/:umId/Users", accessUserControl, (req, res) => {
  const methods = req.usersMethode;
  if (!methods.includes("post"))
    return res.json({ message: "this method is not available" });

  res.json({ message: `this method post for user` });
});

router.put("/:umId/Users", accessUserControl, (req, res) => {
  const methods = req.usersMethode;
  if (!methods.includes("put"))
    return res.json({ message: "this method is not available" });

  res.json({ message: `this method put for user` });
});

router.delete("/:umId/Users", accessUserControl, (req, res) => {
  const methods = req.usersMethode;
  if (!methods.includes("delete"))
    return res.json({ message: "this method is not available" });

  res.json({ message: `this method delete for user` });
});

module.exports = router;
