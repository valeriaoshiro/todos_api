var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
    
app.get('/', function(req, res){
    res.send('Hi from root route');
});

app.use('/api/todos', todoRoutes);

app.listen(process.env.PORT, function(){
    console.log('App is running');
});