
require('./bootstrap');

import Echo from "laravel-echo"
 
window.io = require('socket.io-client');
 
window.Echo = new Echo({
    broadcaster: 'socket.io',
    host: window.location.hostname + ':6001'
});

// console.log(window.location.hostname)

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
