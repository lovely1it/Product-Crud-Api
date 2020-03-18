const mongoose = require('mongoose');
const app = require('./app');

//MONGODB CONNECTION TO NODEJS APP
mongoose.connect('mongodb://localhost:27017/product-db', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() =>  console.log('DB connected successfully!'));

const port = 3000;
app.listen(port, ()=>{
    console.log( `App is listening at port ${port}..... `);
})