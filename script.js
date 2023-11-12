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
document.getElementById('newBtn').addEventListener('click',()=>{
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


// ham.addEventListener('click', () => {
//     if (isLeftBarExpanded) {
//         leftBar.style.width = "70px";
//         leftIcons.forEach(function (icon) {
//             icon.style.display = "flex";
//         });
//         rowBox.style.width="10rem";
//         rowBox.style.display="flex";
//         rowBox.style.justifyContent="space-between";
//     } else {
//         leftBar.style.display="flex"
//         leftBar.style.width = "200px";
//         leftIcons.forEach(function (icon) {
//             icon.style.display = "none";
//         });
//         rowBox.style.display="none"
//     }

//     isLeftBarExpanded = !isLeftBarExpanded; // Toggle the state
// });

ham.addEventListener('click', () => {
    if (isLeftBarExpanded) {
        // Code for when left bar is expanded
        leftBar.style.width = "70px";
        leftIcons.forEach(function (icon) {
            icon.style.display = "flex";
        });
        rowBox.style.width = "10rem";
        rowBox.style.display = "flex";
        rowBox.style.justifyContent = "space-between";
    } else {
        // Code for when left bar is not expanded
        leftBar.style.display = "flex"
        leftBar.style.width = "200px";
        leftIcons.forEach(function (icon) {
            icon.style.display = "none";
        });
        rowBox.style.display = "none"
    }

    isLeftBarExpanded = !isLeftBarExpanded; // Toggle the state
});

// Add an event listener to reset the state when the document is clicked
document.addEventListener('click', (event) => {
    const target = event.target;
    const isHamButton = target === ham || ham.contains(target);

    // Check if the clicked element is not the ham button or its children
    if (!isHamButton) {
        // Reset to default state
        leftBar.style.width = ""; // Set to default width
        leftIcons.forEach(function (icon) {
            icon.style.display = ""; // Set to default display
        });
        rowBox.style.width = ""; // Set to default width
        rowBox.style.display = ""; // Set to default display
        rowBox.style.justifyContent = ""; // Set to default justify content

        isLeftBarExpanded = false; // Set the state to default
    }
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