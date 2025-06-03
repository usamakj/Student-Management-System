const mongoose = require('mongoose');
require('dotenv').config(); /// ya env sa enveriment variables ko access karne ke liye

const constdb = async () => { // ya function mongodb ko connect karne ke liye hai

    try { //
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true, // ya option mongoose ko new url parser use karne ke liye bolega
            useUnifiedTopology: true, // ya option mongoose ko unified topology use karne ke liye bolega
        });

        console.log('MongoDB connected successfully'); // ya message tab aayega jab mongodb successfully connect ho jayega

    } catch (error) {
        console.error('MongoDB connection failed:', error.message); // ya message tab aayega jab mongodb connect nahi ho payega
        process.exit(1); // ya error aane par process ko band kar dega

    }
};

module.exports = constdb;  // ya function ko export kar raha hai taaki isse dusre files me use kiya ja sake
