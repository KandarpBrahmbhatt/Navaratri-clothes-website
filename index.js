let cardMen = document.querySelector(".cardMen");
let cardgirl = document.querySelector(".cardgirl");



function showCard(img) {
    let newImg = document.getElementById("cartImg");
    newImg.src = img.src;
    document.querySelector(".fullPage").style.display = "flex";
    cardgirl.style.display = "none";

}

// Add to Cart

function addItem() {
    document.querySelector(".addCart").style.display = "block";
    cardMen.style.display = "none";
    cardgirl.style.display = "none";
}

function addToCart() {
    alert("Added To Cart");
    location.reload();
}


// checout
function startCheckout() {
    document.querySelectorAll('.checkout-step').forEach(step => step.classList.remove('active-step'));
    document.getElementById('step1').classList.add('active-step');
}

function nextStep(stepNumber) {
    document.querySelectorAll('.checkout-step').forEach(step => step.classList.remove('active-step'));
    document.getElementById(`step${stepNumber}`).classList.add('active-step');
}

function restart() {
    document.querySelectorAll('.checkout-step').forEach(step => step.classList.remove('active-step'));
}