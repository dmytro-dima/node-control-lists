const { operations } = require("../data");

const accessTimesControl = (req, res, next) => {
  const params = req.params.controlId.toUpperCase().split("");

  if (params.length >= 2) return res.json({ message: "select one methode" });

  const validOperations = operations
    .filter((operation) => params.includes(operation.operation))
    .map((o) => o.method);

  req.timesMethode = validOperations;

  next();
};

const accessUserControl = (req, res, next) => {
  const params = req.params.umId.toUpperCase().split("");

  const validOperations = operations
    .filter((operation) => params.includes(operation.operation))
    .map((o) => o.method);

  req.usersMethode = validOperations;

  next();
};

module.exports = { accessTimesControl, accessUserControl };
