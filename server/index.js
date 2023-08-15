const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/dev')
const FakeDb = require('./fake-db')
const productRoutes = require('./routes/product')

mongoose.connect(config.DB_URI).then(
    () => {
        const fakeDb = new FakeDb();
        // fakeDb.seeDb()
        fakeDb.initDb()
    }
)
// mongoose.connect(config.DB_URI).then(() => console.log('Connected!'));
// mongoose.connect('mongodb+srv://mhigashiura:yBpb2rRTRfcVhPds@cluster0.llo1mnz.mongodb.net/?retryWrites=true&w=majority', {
//     userNewUrlParser: true,
//     useUnifiedTopology: true
// });

const app = express()

app.use('/api/v1/products', productRoutes)

// app.get('/products', function(req, res) {
//     res.json({'sucsess': true})
// })

const PORT = process.env.port || '3001'

app.listen(PORT, function() {
    console.log("I am runnning.")
})