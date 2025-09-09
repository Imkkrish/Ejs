const express = require('express');
const morgan = require('morgan');


const app = express();

app.use(morgan('dev'));


app.set('view engine', 'ejs');



app.post("/api/auth/register", (req, res)=>{
  res.send("Register Route")
}
)

app.get("/", (req, res) => {
  res.render("index", { text: "Hello from EJS!" });
});


module.exports = app;