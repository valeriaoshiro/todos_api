var express = require('express'),
    app = express();

var todoRoutes = require('./routes/todos');
    
app.get('/', function(req, res){
    res.send('Hi from root route');
});

app.use('/api/todos', todoRoutes);

app.listen(process.env.PORT, function(){
    console.log('App is running');
});