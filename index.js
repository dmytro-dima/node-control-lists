const express = require("express");
const app = express();
const PORT = 3300;

app.use("/", require("./routes/index"));
app.use("/", require("./routes/times"));
app.use("/", require("./routes/users"));

app.listen(PORT, () => console.log(`server work on porn №${PORT}`));
