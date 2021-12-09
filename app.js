const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");

const app = express();

app.engine("hbs", engine());
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

const errorController = require("./controllers/ErrorController")

const adminRoute = require("./routes/admin");
const electorRoute = require("./routes/elector");

app.use("/admin", adminRoute);
app.use(electorRoute);

app.use("/", errorController.GetNotFound);


app.listen(5051);