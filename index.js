import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from './src/routes/crmRoutes'

const app = express();
const PORT = 3000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/CRMdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true // Add this line for the latest versions of MongoDB
}).then(() => {
  console.log("Connection successfully established with MongoDB");
}).catch(err => {
  console.error("Error connecting to MongoDB: ", err);
});


//bodyparser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//serving static files
//on browser enter http://localhost:3000/cat.png then it shows that image
app.use(express.static('public'))


routes(app);

app.get("/", (req, res) =>
  res.send(`node and express server running on port ${PORT}`)
);

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));




