const rightBtn = document.getElementById('rightBtn')
const rightBtn2 = document.getElementById('rightBtn-2')
const rightBar = document.getElementsByClassName('right-bar')[0]
const ham = document.getElementsByClassName('ham')[0]
const leftBar = document.getElementById('left')
const leftIcons = document.querySelectorAll('.leftIcons')
const btn = document.getElementsByClassName('btn')[0]
const rowBox = document.getElementById('rowBox')

btn.addEventListener('click',()=>{
    window.location.href="index2.html"
})

// leftIcons.forEach(function(icon) {
//     icon.style.display = "block";
// });

// rightBtn.display.style="none"
rightBar.style.display="none"
rightBtn.style.display='block'


rightBtn.addEventListener('click',()=>{
    
    if(rightBtn){
        rightBar.style.display = rightBar.style.display === 'none' ? 'flex' : 'none';
    }
})

let isLeftBarExpanded = false;

ham.addEventListener('click', () => {
    if (isLeftBarExpanded) {
        leftBar.style.width = "70px";
        leftIcons.forEach(function (icon) {
            icon.style.display = "block";
        });
        rowBox.style.width="10rem";
        rowBox.style.display="flex";
        rowBox.style.justifyContent="space-between";
    } else {
        leftBar.style.display="block"
        leftBar.style.width = "200px";
        leftIcons.forEach(function (icon) {
            icon.style.display = "none";
        });
        rowBox.style.display="none"
    }

    isLeftBarExpanded = !isLeftBarExpanded; // Toggle the state
});


leftBar.addEventListener('mouseover',(e)=>{
    if(leftBar){
        leftBar.style.width="200px";
        leftIcons.forEach(function(icon) {
            icon.style.display = icon.style.display === "none" ? "block" :"none";
        });
        rowBox.style.width="10rem";
        rowBox.style.display="flex";
        rowBox.style.justifyContent="space-between";
    }

})


leftBar.addEventListener('mouseout',()=>{
    if(leftBar){
        leftBar.style.width="70px";
        leftIcons.forEach(function(icon) {
            icon.style.display = icon.style.display === "block" ? "none" :"block";
        });
        rowBox.style.display="none"
    }
})