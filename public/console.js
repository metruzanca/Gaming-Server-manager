const toggle = document.getElementById('toggle-server');
const status = document.getElementById('status');
toggle.addEventListener('click',()=>{
    if (toggle.textContent == "Start Server") {
        // Start server
        toggle.textContent = 'Shutdown Server'
        //TODO update Status with events emited when child has started etc
        status.textContent = 'Online';
        status.style.color = 'lime';
    } else{ 
        if (confirm('Are you sure you want to stop the server?')) {
            // Stop server
            toggle.textContent = 'Start Server'
            status.textContent = 'Offline';
            status.style.color = 'red';
        } else{
            // Abort
        }
    }
})