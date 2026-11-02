/* =====================================================
   COMPLIMENT DATA
===================================================== */

const compliments = {
    badass: [
        "{name}, you don't chase attention — attention notices you first. 😎",
        "{name}, your presence has main character energy written all over it. 🔥",
        "{name}, you're not everyone's type... you're the standard.",
        "{name}, confidence looks ridiculously good on you. 😌",
        "{name}, you walk in like you already know the room belongs to you. 👑",
        "{name}, charisma isn't something you have — it's something you radiate. ⚡",
        "{name}, you're proof that being effortlessly cool is actually possible. 😎"
    ],

    diva: [
        "{name}, honestly... the universe definitely took its time creating you. ✨",
        "{name}, you're not just beautiful — you're an entire experience. 💅",
        "{name}, mirrors should feel honoured every time you look into them. 👑",
        "{name}, your presence could easily be mistaken for a red-carpet entrance. ✨",
        "{name}, being iconic seems to come naturally to you. 💖",
        "{name}, you don't need to try too hard — the vibe already speaks for itself. 💅",
        "{name}, gorgeous is honestly an understatement. 😌✨"
    ],

    neutral: [
        "{name}, you have a genuinely amazing presence ✨",
        "{name}, the world is definitely more interesting with you in it 🌍",
        "{name}, you're doing better than you think you are 💫",
        "{name}, your energy is something special.",
        "{name}, consider this your reminder that you're genuinely amazing. ✨"
    ]
};


/* =====================================================
   PICKUP LINE DATA
===================================================== */

const pickupLines = [
    {
        question: "Are you a light? 💡",
        answer: "Because you make my life bright. ✨"
    },
    {
        question: "Are you Wi-Fi? 📶",
        answer: "Because I'm feeling a connection. 😏"
    },
    {
        question: "Are you a camera? 📸",
        answer: "Because every time I see you, I smile. 😊"
    },
   {
       question: "Are you a bank loan?",
       answer: "Because you’ve got my interest."
   }
];


/* =====================================================
   VARIABLES
===================================================== */

let currentName = "";
let currentVibe = "";
let currentMode = "";
let lastComplimentIndex = -1;
let currentPickupIndex = -1;
let currentPickup = null;


/* =====================================================
   GET USER DETAILS
===================================================== */

function getUserDetails() {

    const nameInput = document.getElementById("name").value.trim();
    const vibe = document.getElementById("gender").value;

    if (nameInput === "") {
        alert("Hey! Enter your name first 😄");
        return false;
    }

    if (vibe === "") {
        alert("Choose your vibe first ✨");
        return false;
    }

    currentName = nameInput;
    currentVibe = vibe;

    return true;
}


/* =====================================================
   SCREEN SWITCHING
===================================================== */

function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const targetScreen = document.getElementById(screenId);

    targetScreen.classList.add("active");

    // Restart animation
    targetScreen.style.animation = "none";

    setTimeout(() => {
        targetScreen.style.animation = "";
    }, 10);
}


/* =====================================================
   COMPLIMENT FLOW
===================================================== */

function giveCompliment() {

    if (!getUserDetails()) return;

    currentMode = "compliment";

    showRandomCompliment();

    document.body.classList.add("revealed");

    showScreen("complimentScreen");
}


function showRandomCompliment() {

    const complimentList = compliments[currentVibe];

    let randomIndex;

    do {
        randomIndex = Math.floor(
            Math.random() * complimentList.length
        );
    } while (
        randomIndex === lastComplimentIndex &&
        complimentList.length > 1
    );

    lastComplimentIndex = randomIndex;

    const compliment = complimentList[randomIndex]
        .replace("{name}", currentName);

    document.getElementById("helloText").innerText =
        `Hey, ${currentName} ✦`;

    document.getElementById("complimentText").innerText =
        compliment;
}


/* =====================================================
   PICKUP LINE FLOW
===================================================== */

function startPickupLine() {

    if (!getUserDetails()) return;

    currentMode = "pickup";

    choosePickupLine();

    document.body.classList.remove("revealed");

    showScreen("pickupScreen");
}


function choosePickupLine() {

    let randomIndex;

    do {
        randomIndex = Math.floor(
            Math.random() * pickupLines.length
        );
    } while (
        randomIndex === currentPickupIndex &&
        pickupLines.length > 1
    );

    currentPickupIndex = randomIndex;
    currentPickup = pickupLines[randomIndex];

    document.getElementById("pickupQuestion").innerText =
        currentPickup.question;
}


/* YES or NO → same answer */

function answerPickup() {

    if (!currentPickup) return;

    document.getElementById("helloText").innerText =
        `Hey, ${currentName} ✦`;

    document.getElementById("complimentText").innerText =
        currentPickup.answer;

    document.body.classList.add("revealed");

    showScreen("complimentScreen");
}


/* =====================================================
   ANOTHER ONE
===================================================== */

function giveAnotherCompliment() {

    if (currentMode === "compliment") {

        const text = document.getElementById("complimentText");

        text.style.opacity = "0";
        text.style.transform = "translateY(15px)";

        setTimeout(() => {

            showRandomCompliment();

            text.style.opacity = "1";
            text.style.transform = "translateY(0)";

        }, 250);

    } else if (currentMode === "pickup") {

        choosePickupLine();

        document.body.classList.remove("revealed");

        showScreen("pickupScreen");
    }
}


/* =====================================================
   START AGAIN
===================================================== */

function goBack() {

    currentMode = "";
    currentPickup = null;

    document.body.classList.remove("revealed");

    showScreen("welcomeScreen");
}
