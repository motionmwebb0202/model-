const showModelbtn = document.querySelector(".wrapper button");
const modelWindow = document.querySelector(".model");
const modelContent = document.querySelector(".content");
const modelclosebtn = document.querySelector(".content-t span");
const buttons = document.querySelectorAll(".buttons button");
const images = document.querySelector(".images");
// window.addEventListener("click", (e) => {
//     if (e.target == modelWindow) {
//       modelWindow.style.display = "none";
//     }
//   });
// console.log(buttons);
const data = {
  Kyrgyzstan: [
    "https://ichef.bbci.co.uk/news/976/cpsprodpb/C257/production/_129115794_gettyimages-1331807831-1.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/1200px-Flag_of_Kyrgyzstan.svg.png",
    "https://lp-cms-production.imgix.net/features/2018/04/world-nomad-games-kyrgyzstan1-9b925c7fee3b.jpg",
  ],
  Russion: [
    "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/Q3OZXAQ4Y5LFJMJ2RM2OEORP2U.jpg",
    "https://www.tripsavvy.com/thmb/RZ9PuAnGhDx7nRdAEoVe6txAbIg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/moscow-kremlin-and-st-basil-cathedral-at-dusk-158200423-5a64f4594e46ba00377331fb-f1cefbfe078841fa9951f6b4a7c44ae2.jpg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/800px-Flag_of_Russia.svg.png",
  ],
  USA: [
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg",
    "https://www.visum-usa.de/assets/Uploads/Fotolia-34726084-L__FocusFillWzYwMCw1MDAsIngiLDc0XQ.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/former-u-s-president-donald-trump-speaks-to-reporters-news-photo-1680289458.jpg?crop=0.670xw:1.00xh;0.190xw,0&resize=640:*",
  ],
};

showModelbtn.addEventListener("click", () => {
  modelWindow.style.display = "flex";
});

modelclosebtn.addEventListener("click", () => {
  modelWindow.style.display = "none";
});

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    images.innerHTML = "";
    images.innerHTML += data[e.target.textContent].map(
      (img) => `<img src="${img}" alt"" />`
    ).join(" ");
  });
});
