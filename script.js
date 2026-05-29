const dailyNotes = [
  "I hope you know how much I love you ❤️",
  "You are my favourite person.",
  "I’m so proud of you, always.",
  "You make my life softer and happier.",
  "I love disturbing you because you are mine.",
  "No matter how busy life gets, you are always in my heart.",
  "You make ordinary days feel special.",
  "I’m lucky to have you.",
  "Your smile is one of my favourite things.",
  "I love you more than yesterday."
];

const randomNotes = [
  "I miss youuu ❤️",
  "Come here, I want a hug.",
  "Reminder: you are loved by me.",
  "You are my safe place.",
  "I choose you again and again.",
  "You are annoying but I love you 😂",
  "I’m sending you a virtual kiss 😘"
];

const openWhenMessages = {
  sad: "I’m sorry you feel sad. Breathe, okay? I love you and I’m always on your side ❤️",
  tired: "Rest, baby. You don’t always have to be strong. I’m proud of you.",
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
    "If I had to choose again, I would still choose you. ❤️";
}

showDailyNote();
relationshipCounter();
updateCountdown();
