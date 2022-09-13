const mongoose = require('mongoose');

const getConnection = async () => {
   
    try {
        const url = 'mongodb://liceth10:IUD1001747607@cluster0-shard-00-00.hhhyw.mongodb.net:27017,cluster0-shard-00-01.hhhyw.mongodb.net:27017,cluster0-shard-00-02.hhhyw.mongodb.net:27017/inventarios?ssl=true&replicaSet=atlas-5o42sm-shard-0&authSource=admin&retryWrites=true&w=majority';

        await mongoose.connect(url);

        console.log('conexión exitosa');
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    getConnection
}