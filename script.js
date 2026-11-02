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
        "{name}, you're proof that being effortlessly cool is actually possible. 😎",
        "{name}, you have the kind of energy that makes people forget what they were saying. 🔥",
        "{name}, you're dangerously good at being unforgettable. 😏",
        "{name}, some people enter a room. You make an entrance. 👑",
        "{name}, your confidence should honestly come with a warning label. ⚠️",
        "{name}, you don't need to prove you're cool. The room already knows. 😎",
        "{name}, you're the plot twist nobody saw coming but everyone loved. 🔥",
        "{name}, your vibe is expensive, and honestly, priceless. 💯",
        "{name}, you don't follow the vibe. You are the vibe. 😎"
    ],

    diva: [
        "{name}, honestly... the universe definitely took its time creating you. ✨",
        "{name}, you're not just beautiful — you're an entire experience. 💅",
        "{name}, mirrors should feel honoured every time you look into them. 👑",
        "{name}, your presence could easily be mistaken for a red-carpet entrance. ✨",
        "{name}, being iconic seems to come naturally to you. 💖",
        "{name}, you don't need to try too hard — the vibe already speaks for itself. 💅",
        "{name}, gorgeous is honestly an understatement. 😌✨",
        "{name}, you have the kind of beauty that makes people look twice... and then once more. 😏",
        "{name}, pretty is a word. You are a whole different category. 👑",
        "{name}, your confidence and beauty together are an unfair advantage. 🔥",
        "{name}, you're the reason 'effortlessly stunning' became a phrase. ✨",
        "{name}, your vibe is giving: impossible to ignore. 😮‍💨",
        "{name}, you're dangerously close to becoming someone's entire type. 🔥",
        "{name}, the universe definitely added extra details when it made you. ✨",
        "{name}, you're the kind of gorgeous people accidentally write songs about. 🎶"
    ],

    neutral: [
        "{name}, you have a genuinely amazing presence ✨",
        "{name}, the world is definitely more interesting with you in it 🌍",
        "{name}, you're doing better than you think you are 💫",
        "{name}, your energy is something special. ✨",
        "{name}, consider this your reminder that you're genuinely amazing. ✨",
        "{name}, you have a way of making ordinary moments feel better. 🌙",
        "{name}, you're the kind of person people are secretly happy to know. 💛",
        "{name}, your existence has more impact than you probably realise. ✨",
        "{name}, you're a whole vibe without even trying. 😌",
        "{name}, somebody's day definitely gets better when you show up. ☀️",
        "{name}, you're proof that being yourself can be more than enough. 💫",
        "{name}, your energy is weirdly addictive — in the best way. 😏",
        "{name}, you're much more interesting than you give yourself credit for. 🔥",
        "{name}, you bring something to the world that nobody else can copy. 🌍",
        "{name}, you make being yourself look pretty damn good. 😎"
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
        question: "Are you a bank loan? 💰",
        answer: "Because you've got my interest. 😏"
    },
    {
        question: "Are you tired? 😮‍💨",
        answer: "Because you've been running through my mind all day. ❤️"
    },
    {
        question: "Are you a magician? ✨",
        answer: "Because whenever you're around, everyone else disappears. 😏"
    },
    {
        question: "Are you a parking ticket? 🎫",
        answer: "Because you've got FINE written all over you. 🔥"
    },
    {
        question: "Are you Google? 🔍",
        answer: "Because you've got everything I've been searching for. ✨"
    },
    {
        question: "Are you a sunset? 🌅",
        answer: "Because I could stare at you for way too long. 😮‍💨"
    },
    {
        question: "Are you trouble? 😈",
        answer: "Because I know I probably shouldn't... but here I am. 😏🔥"
    },
    {
        question: "Are you gravity? 🌍",
        answer: "Because I keep falling for you. 😏"
    },
    {
        question: "Are you caffeine? ☕",
        answer: "Because one look at you and suddenly I can't calm down. 😮‍💨🔥"
    },
    {
        question: "Are you a bad idea? 😈",
        answer: "Because I know I should stay away... but you look way too tempting. 😏🔥"
    },
    {
        question: "Are you a distraction? 👀",
        answer: "Because productivity disappears the second you show up. 😮‍💨"
    },
    {
        question: "Are you dangerous? 🔥",
        answer: "Because getting closer to you feels like a risk I'm willing to take. 😏"
    }
];


/* =====================================================
   VARIABLES
===================================================== */

let currentName = "";
let currentVibe = "";
let currentMode = "";
let currentPickup = null;

/* Separate unused compliment pools for every vibe */
const unusedComplimentIndexes = {
    badass: [],
    diva: [],
    neutral: []
};

/* Unused pickup line pool */
let unusedPickupIndexes = [];


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

    document.getElementById(screenId).classList.add("active");
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
    const pool = unusedComplimentIndexes[currentVibe];

    /* Refill pool only after ALL compliments are used */
    if (pool.length === 0) {

        for (let i = 0; i < complimentList.length; i++) {
            pool.push(i);
        }
    }

    /* Pick random item from remaining pool */
    const randomPosition = Math.floor(
        Math.random() * pool.length
    );

    const randomIndex = pool.splice(
        randomPosition,
        1
    )[0];

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

    /* Refill only after ALL pickup lines are used */
    if (unusedPickupIndexes.length === 0) {

        for (let i = 0; i < pickupLines.length; i++) {
            unusedPickupIndexes.push(i);
        }
    }

    /* Pick random item from remaining pool */
    const randomPosition = Math.floor(
        Math.random() * unusedPickupIndexes.length
    );

    const randomIndex = unusedPickupIndexes.splice(
        randomPosition,
        1
    )[0];

    currentPickup = pickupLines[randomIndex];

    document.getElementById("pickupQuestion").innerText =
        currentPickup.question;
}


/* =====================================================
   PICKUP ANSWER
===================================================== */

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
   ANOTHER ONE BUTTON
===================================================== */

function giveAnotherCompliment() {

    const text = document.getElementById("complimentText");

    text.style.opacity = "0";
    text.style.transform = "translateY(15px)";

    setTimeout(() => {

        if (currentMode === "compliment") {

            showRandomCompliment();

            text.style.opacity = "1";
            text.style.transform = "translateY(0)";

        } else if (currentMode === "pickup") {

            choosePickupLine();

            text.style.opacity = "1";
            text.style.transform = "translateY(0)";

            document.body.classList.remove("revealed");

            showScreen("pickupScreen");
        }

    }, 250);
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
