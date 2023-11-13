const rightBtn = document.getElementById('rightBtn')
const rightBtn2 = document.getElementById('rightBtn-2')
const rightBar = document.getElementsByClassName('right-bar')[0]
const ham = document.getElementsByClassName('ham')[0]
const leftBar = document.getElementById('left')
const leftIcons = document.querySelectorAll('.leftIcons')
const btn = document.getElementsByClassName('btn')[0]
const rowBox = document.getElementById('rowBox')

btn.addEventListener('click', () => {
    window.location.href = "index2.html"
})

leftBar.style.display = 'none'

document.getElementById('newBtn').addEventListener('click', () => {
    window.location.href = "index2.html"
})

rightBar.style.display = "none"
rightBtn.style.display = 'block'


rightBtn.addEventListener('click', () => {

    if (rightBtn) {
        rightBar.style.display = rightBar.style.display === 'none' ? 'flex' : 'none';
    }
})

ham.addEventListener('click', (event) => {
    // Toggle the display property of leftBar
    if (leftBar.style.display === 'flex') {
        leftBar.style.display = 'none';

    } else {
        leftBar.style.display = 'flex';
        leftBar.style.width="200px"
        leftBar.style.alignItems='flex-start'

    }
    
    // Prevent the click event from propagating further, so it doesn't trigger the document click event immediately
    event.stopPropagation();
});

// Event listener to close leftBar when clicking anywhere else on the document
document.addEventListener('click', (event) => {
    // Check if the click is outside of leftBar and ham icon
    const isClickInsideLeftBar = leftBar.contains(event.target);
    const isClickOnHam = event.target === ham;

    // If the click is outside of leftBar and ham icon, close leftBar
    if (!isClickInsideLeftBar && !isClickOnHam && leftBar.style.display === 'flex') {
        leftBar.style.display = 'none';
    }
});




leftBar.addEventListener('mouseover', (e) => {
    if (leftBar) {
        leftBar.style.width = "200px";
        leftIcons.forEach(function (icon) {
            icon.style.display = icon.style.display === "none" ? "block" : "none";
        });
        rowBox.style.width = "10rem";
        rowBox.style.display = "flex";
        rowBox.style.justifyContent = "space-between";
    }

})


leftBar.addEventListener('mouseout', () => {
    if (leftBar) {
        leftBar.style.width = "70px";
        leftIcons.forEach(function (icon) {
            icon.style.display = icon.style.display === "block" ? "none" : "block";
        });
        rowBox.style.display = "none"
    }
})

let hidefun = window.matchMedia('(max-width:820px)')
const MediaQuery = () => {
    if (hidefun.matches) {
        document.getElementsByClassName('main-box')[0].style.display = 'none'
        document.getElementsByClassName('leftRes')[0].style.display='block'
        document.getElementsByClassName('iconsClass')[0].style.display='none'
    }
    else {
        document.getElementsByClassName('main-box')[0].style.display = 'flex'
        document.getElementsByClassName('leftRes')[0].style.display='none'
        document.getElementsByClassName('iconsClass')[0].style.display='flex'
    }
}
MediaQuery();
window.addEventListener('resize', MediaQuery);

document.getElementById('pageCng').addEventListener('click', () => {
    window.location.href = "index2.html"
})

document.getElementById('pageCHng').addEventListener('click', () => {
    window.location.href = "index2.html"
})
document.getElementById('backBtn').addEventListener('click', () => {
    // 
    console.log('hello')
})
