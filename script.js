let arr = [
  {
    dp: "img11.avif",
    story: "img3.avif",
  },
  {
    dp: "img10.avif",
    story: "img4.avif",
  },
  {
    dp: "img9.avif",
    story: "img1.avif",
  },
  {
    dp: "img8.avif",
    story: "img2.avif",
  },
  {
    dp: "img7.avif",
    story: "img5.avif",
  },
  {
    dp: "img6.avif",
    story: "img6.avif",
  },
];

let clutter = "";

arr.forEach(function (elem, idx) {
  clutter += `<div class="story">
  <img id="${idx}" src= "${elem.dp}" />
  </div>`;
});

document.querySelector("#storiyan").innerHTML = clutter;

document.querySelector("#storiyan").addEventListener("click", function (event) {
  let val = arr[event.target.id].story;
  document.querySelector("#full-screen").style.display = "block";
  document.querySelector("#full-screen").style.backgroundImage = `url(${
    arr[event.target.id].story
  })`;

  setTimeout(function () {
    document.querySelector("#full-screen").style.display = "none";
  }, 2000);
});

console.log(clutter);
