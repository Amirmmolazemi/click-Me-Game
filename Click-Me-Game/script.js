(function () {
    'use strict';
    
    function move () {
        const left = Math.random() * 90;
        const top = Math.random() * 90;
        button.style.left = left + '%';
        button.style.top = top + '%';
    }
    button.addEventListener('mousemove', move);
})();