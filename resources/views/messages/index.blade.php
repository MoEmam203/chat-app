<script src="https://cdn.socket.io/4.0.1/socket.io.min.js"
    integrity="sha384-LzhRnpGmQP+lOvWruF/lgkcqD+WDVt9fU3H4BWmwP5u5LTmkUGafMcpZKNObVMLU" crossorigin="anonymous">
</script>
<script>
    let socket = io('localhost' + ':6001');
    
    socket.on('test', (data) => {
        console.log(data);
    })
</script>