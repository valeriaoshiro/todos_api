/* global $*/
$(document).ready(function(){
    $.getJSON('/api/todos')
    .then(addTodos);
    
    $('#todoInput').keypress(function(event){
        if(event.which == 13){
            createTodo();
        }
    });
    
    $('.list').on('click', 'span', function(){
        removeTodo($(this).parent()); //'this' is the span
    });
});

function addTodos(todos){
    todos.forEach(function(todo){
        addTodo(todo);
    });
}

function addTodo(todo){
    var newTodo = $('<li class="task">'+todo.name + '<span>X</span></li>');
    newTodo.data('id', todo._id);
    if(todo.completed){
        newTodo.addClass('done');
    }
    $('.list').append(newTodo);
}

function createTodo(){
    var usrInput = $('#todoInput').val();
    $.post('/api/todos', {name: usrInput})
    .then(function(newTodo){
        usrInput = $('#todoInput').val('');
        addTodo(newTodo);
    })
    .catch(function(err){
        console.log(err);
    })
    
}

function removeTodo(todo){
    var clickedId = todo.data('id');
    $.ajax({
        method: 'DELETE',
        url: '/api/todos/'+ clickedId
    })
    .then(function(data){
        todo.remove();
    })
    .catch(function(err){
        console.log(err);
    })
}