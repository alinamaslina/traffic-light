const lights = document.querySelectorAll(".light");

let currentIndex = 0;

function changeLight() {
  currentIndex = currentIndex > 2 ? 0 : currentIndex;

  //   if (currentIndex > 2) {
  //     currentIndex = 0;
  //   }

  console.log(currentIndex);

  lights.forEach((light) => light.classList.remove("active"));

  lights[currentIndex].classList.add("active");

  currentIndex++;
}

// changeLight();

setInterval(changeLight, 1000);