const express = require('express');
const cors = require('cors');
const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
  };
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require('../app/models');

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(()=>{
      console.log('You are connected to database')
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


app.get("/", (req, res)=>{
    res.json({message: "This is an online server"})
})




const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`Server is running on  http://localhost:${PORT}`)
})

