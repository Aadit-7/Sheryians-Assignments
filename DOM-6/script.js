let audioA = new Audio("28.mp3");
let audioS = new Audio("29.mp3");
let audioD = new Audio("30.mp3");
let audioF = new Audio("31.mp3");
let audioG = new Audio("32.mp3");
let audioH = new Audio("33.mp3");
let audioJ = new Audio("34.mp3");
let audioK = new Audio("35.mp3");
let audioL = new Audio("36.mp3");
let audioLL = new Audio("37.mp3");

document.body.addEventListener("keydown", (dets) => {
  let key = dets.code;

  if (key === "KeyA") {
    audioA.currentTime = 0;
    audioA.play();
    Key.classList.add("active");
  } else if (key === "KeyS") {
    audioS.currentTime = 0;
    audioS.play();
  } else if (key === "KeyD") {
    audioD.currentTime = 0;
    audioD.play();
  } else if (key === "KeyF") {
    audioF.currentTime = 0;
    audioF.play();
  } else if (key === "KeyG") {
    audioG.currentTime = 0;
    audioG.play();
  } else if (key === "KeyH") {
    audioH.currentTime = 0;
    audioH.play();
  } else if (key === "KeyJ") {
    audioJ.currentTime = 0;
    audioJ.play();
  } else if (key === "KeyK") {
    audioK.currentTime = 0;
    audioK.play();
  } else if (key === "KeyL") {
    audioL.currentTime = 0;
    audioL.play();
  } else if (key === "Semicolon") {
    audioLL.currentTime = 0;
    audioLL.play();
  }

  console.log(key);
});
