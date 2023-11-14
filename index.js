document.getElementById('backBtn').addEventListener('click', () => {
    window.location.href = "index.html"
    console.log('hello')
})

const ham = document.getElementById('ham')
const leftBar = document.getElementById('left')

ham.addEventListener('click', (event) => {
    // Toggle the display property of leftBar
    if (leftBar.style.display === 'flex') {
        leftBar.style.display = 'none';

    } else {
        leftBar.style.display = 'flex';
        leftBar.style.width = "200px"
        leftBar.style.alignItems = 'flex-start'

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



// document.getElementById('addTxt').addEventListener('input', () => {
//     let notesValue = document.getElementById('addTxt').value;
//     notesObj = []
//     if(notesValue.trim()){
//         document.getElementsByClassName('mid-container')[0].style.display="none"
//         document.getElementsByClassName('last-container')[0].style.display="none"
//         document.getElementsByClassName('bt-2')[0].style.display="none"
//         notesObj = notesValue.split('\n');
//     }


// });

// const btn = document.getElementsByClassName('sndBtn')[0]

// btn.addEventListener('click',()=>{
//     if(btn){
//         const styles = {
//             display: 'flex',
//             width: '88%',
//             height: '4rem',
//             alignItems: 'center',
//             background: 'pink',
//             justifyContent: 'flex-end',
//             padding: '0px 22px',
//             fontSize: '25px',
//             margin: '50px',
//             borderRadius: '59px',
//         };

//         let html = "";
//         // foreach loop in notesObj array
//         notesObj.forEach((element) => {
//         const divElement = document.createElement('div');
//         divElement.textContent = element;
//         Object.assign(divElement.style, styles);
//         html += divElement.outerHTML;
//         });


//         document.getElementById('textBox').innerHTML=html
//     }
//     document.getElementById('textBox').innerHTML += html;
//     // clearing the input after sending it
//     document.getElementById('addTxt').value = "";


// })

document.getElementById('addTxt').addEventListener('input', () => {
    let notesValue = document.getElementById('addTxt').value;
    notesObj = []
    if (notesValue.trim()) {
        document.getElementsByClassName('mid-container')[0].style.display = "none";
        document.getElementsByClassName('last-container')[0].style.display = "none";
        document.getElementsByClassName('bt-2')[0].style.display = "none";
        notesObj = notesValue.split('\n');
    }
});

const btn = document.getElementsByClassName('sndBtn')[0]

const styles = {
    display: 'flex',
    width: '88%',
    height: '4rem',
    alignItems: 'center',
    background: 'pink',
    justifyContent: 'flex-end',
    padding: '0px 22px',
    fontSize: '25px',
    margin: '50px',
    borderRadius: '59px',
};

const styles2 = {
    display: 'flex',
    width: '88%',
    height: '4rem',
    alignItems: 'center',
    background: 'wheat',
    padding: '0px 22px',
    margin : "120px 0",
    fontSize: '25px',
    borderRadius: '59px',

}

const message = {
    "hello": "hey wassup",
    "how are you": "im good and you",
    "good morning": "good morning sir",
    "hi": "hello!",
    "what's up": "not much, just chilling",
    "how's it going": "pretty good, thanks for asking",
    "good night": "sweet dreams!",
    "nice to meet you": "likewise!",
    "see you later": "until next time!",
    "bye": "goodbye!",
    "thank you": "you're welcome!",
};



btn.addEventListener('click', () => {
    if (btn) {
        const notesObj = document.getElementById('addTxt').value.split('\n');
        let html = "";

        notesObj.forEach((element) => {
            const divElement = document.createElement('div');
            divElement.textContent = element;
            Object.assign(divElement.style, styles);
            html += divElement.outerHTML;

            // Check if the element is a key in the message object
            if (message[element.toLowerCase()] || message[element.toUpperCase()]) {
                const replyElement = document.createElement('div');
                const randomMessage = getRandomMessage();
                replyElement.textContent = randomMessage;
                Object.assign(replyElement.style, styles2);
                html += replyElement.outerHTML;
            }
        });

        // Append the new content to the existing content
        document.getElementById('textBox').innerHTML += html;

        // clearing the input after sending it
        document.getElementById('addTxt').value = "";
    }
});

function getRandomMessage() {
    const keys = Object.keys(message);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return message[randomKey];
}

