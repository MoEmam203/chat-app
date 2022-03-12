
require('./bootstrap');

import Echo from "laravel-echo"
 
window.io = require('socket.io-client');
 
window.Echo = new Echo({
    broadcaster: 'socket.io',
    host: '127.0.0.1' + ':6001'
});

console.log(window.location.hostname)

window.Echo.join(`online`)
    .here((users) => {
        console.log(users)
        users.forEach(user => {
            $('#online-users').append(`<li id="user-${user.id}" class="list-group-item">${user.name}</li>`)
        });
    })
    .joining((user) => {
        $('#online-users').append(`<li id="user-${user.id}" class="list-group-item">${user.name}</li>`)
    })
    .leaving((user) => {
        $(`#user-${user.id}`).remove()
    })
    .error((error) => {
        console.error(error);
    });


window.Echo.channel('test')
    .listen('TestEvent',function(e){
        console.log(e);
    })


let socket = io('localhost' + ':6001');

 socket.on('test', (data) => {
                console.log(data);
 })