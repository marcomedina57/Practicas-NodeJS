const mongoose = require('mongoose');


const dbConnection = async() => {


    try {
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false

        });

        console.log('Base de datos online puerto ' + process.env.PORT);
    }
    catch(error){
        console.log(error);
        throw new Error('Sisi error');
    }

}



module.exports = {
    dbConnection
}