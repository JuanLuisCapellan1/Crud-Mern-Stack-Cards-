const express = require('express');
const morgan = require('morgan');
const app = express();
const route = require('./routes/task.routes');
const path = require('path');

const {mongoose} = require('./database')

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes 
app.use('/api/tasks', route);

//Static Files
app.use(express.static(path.join(__dirname, 'public')));


app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`);  
});