const express = require('express');
const { getConnection } = require('./db/db-conection-mongo');

getConnection();

const app = express();
const port = 3000;

app.use(express.json());

app.use ('/inventario', require('./router/inventario'));
app.use('/usuario', require('./router/usuario'));
app.use('/estado-equipo', require('./router/estadoEquipo'));
app.use('/marca', require('./router/marca'));
app.use('/tipo-equipo', require('./router/tipoEquipo'));


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});