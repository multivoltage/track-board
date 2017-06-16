let container = document.querySelector('.state-container--list');
//container.addEventListener('click',function init() {
    //container.removeEventListener('click',init,false);
     container.className = container.className + ' resizable';
     let resizer = document.createElement('div');
     resizer.className = 'resizer';
     container.appendChild(resizer);
     resizer.addEventListener('mousedown', initDrag, false);   
//});

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
     document.documentElement.removeEventListener('mousemove', doDrag, false);   
     document.documentElement.removeEventListener('mouseup', stopDrag, false);
}

/** TODO convert to es6 module  */
// const helper = {
//     startX: null, startY: null, startWidth: null, startHeight: null, container: null,

//     initDrag(e) {
//         this.startX = e.clientX;
//         this.startY = e.clientY;
//         this.startWidth = parseInt(document.defaultView.getComputedStyle(this.container).width, 10);
//         this.startHeight = parseInt(document.defaultView.getComputedStyle(this.container).height, 10);
//         document.documentElement.addEventListener('mousemove', this.doDrag, false);
//         document.documentElement.addEventListener('mouseup', this.stopDrag, false);
//     },

//     doDrag(e) {
//         this.container.style.width = (this.startWidth + e.clientX - this.startX) + 'px';
//         this.container.style.height = (this.startHeight + e.clientY - this.startY) + 'px';
//     },

//     stopDrag(e) {
//         document.documentElement.removeEventListener('mousemove', this.doDrag, false);   
//         document.documentElement.removeEventListener('mouseup', this.stopDrag, false);
//     },

//     init(){
//         this.container = document.querySelector('.state-container--list');
//         this.container.className = this.container.className + ' resizable';
//         let resizer = document.createElement('div');
//         resizer.className = 'resizer';
//         this.container.appendChild(resizer);
//         resizer.addEventListener('mousedown', this.initDrag, false); 
//     }
// }

// export default helper;



