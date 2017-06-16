let container = document.querySelector('.state-container');
container.addEventListener('click',function init() {
    container.removeEventListener('click',init,false);
    container.className = container.className + 'resizable';
    let resizer = document.createElement('div');
    resizer.className = 'resizer';
    container.appendChild(resizer);
    resizer.addEventListener('mousedown', initDrag, false);   
});

var startX, startY, startWidth, startHeight;

function initDrag(e) {
   startX = e.clientX;
   startY = e.clientY;
   startWidth = parseInt(document.defaultView.getComputedStyle(container).width, 10);
   startHeight = parseInt(document.defaultView.getComputedStyle(container).height, 10);
   document.documentElement.addEventListener('mousemove', doDrag, false);
   document.documentElement.addEventListener('mouseup', stopDrag, false);
}

function doDrag(e) {
   container.style.width = (startWidth + e.clientX - startX) + 'px';
   container.style.height = (startHeight + e.clientY - startY) + 'px';
}

function stopDrag(e) {
    document.documentElement.removeEventListener('mousemove', doDrag, false);    document.documentElement.removeEventListener('mouseup', stopDrag, false);
}