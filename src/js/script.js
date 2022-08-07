var target = ''; // targeted element to move
var state = false; // true: selected, false: unselected

window.addEventListener('mousedown', function (e) {
    if ( state ) { // element has been selected already
        if ( e.target.id == target.id ) { // check if we click on element itself
            target = '';
            state = false;
        }
    } else {
        target = document.getElementById(e.target.id);
        state = true;
    }
})

window.addEventListener('mousemove', function (e) {
    // get mouse position in it's container (window)
    var x = e.clientX;
    var y = e.clientY;

    // if element isn't empty, then it's selected and must move
    if ( target != '' ) {
        target.style.top = y + 'px';
        target.style.left = x + 'px';
        // change element's position so mouse is centerized
        target.style.transform = 'translate(-50%, -50%)';
    }
})