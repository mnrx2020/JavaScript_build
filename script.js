// Tab functionality
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Side menu functionality
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

// Form submission to Google Sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbwzbOE6yOHCLEjXqFjW1VTQNhahAKaJZ2afi93xNerrnrP9g517pyc6NbwUckX-uT-0dQ/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        const formData = new FormData(form);
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            msg.innerHTML = 'Message sent successfully';
            setTimeout(() => {
                msg.innerHTML = '';
            }, 5000);
            form.reset();
        } else {
            throw new Error('Failed to submit form data');
        }
    } catch (error) {
        console.error('Error!', error.message);
    }
});

// "See More" button functionality
document.getElementById("see-more-btn").addEventListener("click", function() {
    const allAdditionalWorks = document.querySelectorAll(".work:nth-child(n+4)"); // Selects all works after the third one
    allAdditionalWorks.forEach(function(work) {
        work.classList.toggle("hidden");
    });
    this.textContent = this.textContent === "See More" ? "See Less" : "See More";
});