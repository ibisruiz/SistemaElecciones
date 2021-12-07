const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");

const app = express();

app.engine("hbs", engine());
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

const adminRoute = require("./routes/admin");
const electorRoute = require("./routes/elector");

app.use(adminRoute);
app.use(electorRoute);

app.use((req, res, next) =>{

    res.status(404).render("404",{layout:false, pageTitle: "Not found"});

});


app.listen(5051);