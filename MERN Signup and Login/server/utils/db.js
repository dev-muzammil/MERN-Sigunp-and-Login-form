const mongoose = require("mongoose")

const URI = ""
const connectDb = async () => {
    try {
        await mongoose.connect(URI)
        console.log("Connection successful to Database")
    } catch (error) {
        console.log("Connection failed to Database")
    }
}

module.exports = connectDb