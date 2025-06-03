const express = require('express'); // ya express module ko import kar raha hai
const constdb = require('./config/db'); // ya db.js file ko import kar raha hai jo mongodb ko connect karega
const studentRoutes = require('./routes/studentRoutes'); // ya studentRoutes ko import kar raha hai jo student related routes handle karega
const resultRoutes = require('./routes/resultRoutes');  // ya resultRoutes ko import kar raha hai jo student related routes handle karega
const errorHandler = require('./middlewares/errorHandler'); // y
const app = express();
const cors = require('cors');



const port = process.env.PORT || 5000;  // ya port number set kar raha hai jo environment variable se liya jayega ya 5000 default hoga



constdb();  // ya function ko call kar raha hai taaki mongodb connect ho sake

app.use(cors());

// ya middleware use kar raha hai jo studentRoutes ko handle karega
app.use(express.json()); // ya middleware use kar raha hai jo incoming request body ko JSON format mein parse karega

app.use('/students', studentRoutes); // ya middleware use kar raha hai jo '/students' path par aane wale requests ko studentRoutes se handle karega


app.use('/results', resultRoutes); // ya middleware use kar raha hai jo '/reuults' path par aane wale requests ko resultRoutes se handle karega

app.use(errorHandler);

app.get('/', (req, res) => {  // ya root route define kar raha hai jo '/' path par request aane par response dega
    res.send('backend Server running may hai or MongoDB bhi connected hai '); // ya response send kar raha hai
});

app.listen(port, () => {  // ya server ko listen kar raha hai specified port par
    console.log(`Server is running on port ${port}`); // ya message tab aayega jab server successfully start ho jayega
});

