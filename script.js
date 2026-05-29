const dailyNotes = [
  "I hope you know how much I love you ma ❤️",
  "You are my favourite person in the whole entire universe.",
  "I’m so proud of you, always, my Gideon.",
  "You make my life softer and happier.",
  "I love disturbing you because you are mine.",
  "No matter how busy life gets, you are always in my heart ma, AND I BETTER BE TOO.",
  "You make ordinary days feel special but sometimes you really annoy me.",
  "I’m lucky to have you, the luckiest actually.",
  "Your smile is one of my favourite things, smile more instead of burping ma.",
  "I love you more than yesterday."
];

const randomNotes = [
  "I miss youuu ❤️",
  "Come here, I want a hug.",
  "Reminder: you are loved by me, always and forever.",
  "You are my safe place.",
  "I choose you again and again.",
  "You are annoying but I love you 😂",
  "I’m sending you a virtual kiss 😘"
];

const openWhenMessages = {
  sad: "I’m sorry you feel sad. Breathe, okay? Always pray and commit to God. Everything will be fine. I love you and I’m always on your side ❤️",
  tired: "Rest, ma. You don’t always have to be strong. I’m proud of you.",
  miss: "I miss you too. Imagine me hugging you very tightly right now."
};

function showDailyNote() {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today - start;
  const day = Math.floor(diff / (1000 * 60 * 60 * 24));
  const noteIndex = day % dailyNotes.length;
  document.getElementById("dailyNote").innerText = dailyNotes[noteIndex];
}

function randomNote() {
  const index = Math.floor(Math.random() * randomNotes.length);
  document.getElementById("randomNote").innerText = randomNotes[index];
}

function openWhen(type) {
  document.getElementById("openWhenText").innerText = openWhenMessages[type];
}

function relationshipCounter() {
  const startDate = new Date("2022-01-09");
  const today = new Date();

  const diff = today - startDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("together").innerText =
    `${days} days and counting ❤️`;
}

function updateCountdown() {
  const today = new Date();
  let targetDate = new Date(today.getFullYear(), 0, 9);

  if (today > targetDate) {
    targetDate = new Date(today.getFullYear() + 1, 0, 9);
  }

  const diff = targetDate - today;
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

  document.getElementById("countdown").innerText =
    `${days} days until our next anniversary ❤️`;
}

function secretMessage() {
  document.getElementById("secret").innerText =
    "I love you ma ❤️";
}

showDailyNote();
relationshipCounter();
updateCountdown();
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 18 + 14 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  document.querySelector(".hearts-container").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 600);
// Floating hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-30px";
  heart.style.fontSize = "24px";
  heart.style.zIndex = "9999";
  heart.style.pointerEvents = "none";
  heart.style.transition = "transform 5s linear, opacity 5s linear";
  heart.style.opacity = "1";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.style.transform = "translateY(-110vh)";
    heart.style.opacity = "0";
  }, 100);

  setTimeout(() => {
    heart.remove();
  }, 5200);
}, 700);

