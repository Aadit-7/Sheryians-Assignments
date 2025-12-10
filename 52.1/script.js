// let para = document.querySelector("p");
// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// let inner = para.innerText;

// let id = null;

// para.addEventListener("mouseenter", () => {
//   id = setInterval(() => {
//     const str = inner
//       .split("")
//       .map((char, idx) => {
//         return text.split("")[Math.floor(Math.random() * 53)];
//       })
//       .join("");
//     para.innerText = str;
//   }, 30);
// });

// para.addEventListener("mouseleave", () => {
//   clearInterval(id);
//   id = null; //
// });

let para = document.querySelector("p");
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let inner = para.innerText;

para.addEventListener("mouseenter", () => {
  let itrr = 0;

  // FIX 1 — prevent multiple overlapping intervals
  // (we stop interval after animation completes)
  function randomChar() {
    const str = inner
      .split("")
      .map((char, idx) => {
        if (idx < itrr) {
          return char;
        } else {
          // FIX 2 & 3 — do NOT split text each time, and use correct length
          return text[Math.floor(Math.random() * text.length)];
        }
      })
      .join("");

    para.innerText = str;

    itrr += 0.25;

    // FIX 4 — stop interval when animation completes
    if (itrr >= inner.length) {
      clearInterval(interval);
    }
  }

  // FIX 5 — store interval INSIDE the event only
  let interval = setInterval(randomChar, 30);
});
