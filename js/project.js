// When the document is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the current hash from the URL
    var currentHash = window.location.hash;

    // Define the specific containers by their IDs
    var container1 = document.getElementById('container1');
    var container2 = document.getElementById('container2');
    var container3 = document.getElementById('container3');
    var container4 = document.getElementById('container4');
    var container5 = document.getElementById('container5');
    var container6 = document.getElementById('container6');
    var container7 = document.getElementById('container7');
    var container8 = document.getElementById('container8');
    var container9 = document.getElementById('container9');
    var container10 = document.getElementById('container10');
    var container11 = document.getElementById('container11');
    var container12 = document.getElementById('container12');
    var container13 = document.getElementById('container13');

    // Create an array of these containers
    var containers = [container1, container2, container3, container4, container5, container6, container7, container8, container9, container10, container11, container12, container13];

    // Check if there is a hash in the URL
    if (currentHash) {
        // Loop through each container
        containers.forEach(function(container) {
            // If the container's ID matches the current hash, show it
            if ('#' + container.id === currentHash) {
                container.style.display = 'block';
            } else {
                // Otherwise, hide the container
                container.style.display = 'none';
            }
        });
    } else {
        // If there's no hash, show all containers
        containers.forEach(function(container) {
            container.style.display = 'block';
        });
    }
});
