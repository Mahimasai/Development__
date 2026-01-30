const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const results1 = document.querySelector("#results1");
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please give a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please give a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    const wei_guide = document.querySelector("#weight-guide");

    if (bmi < 18.6) {
      document.body.style.backgroundColor = "red";
      const text = document.createTextNode(
        wei_guide.querySelector("p:nth-child(2)").innerText,
      );
      results1.appendChild(text);
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      document.body.style.backgroundColor = "green";
      const text = document.createTextNode(
        wei_guide.querySelector("p:nth-child(3)").innerText,
      );
      results1.appendChild(text);
    } else if (bmi > 24.9) {
      document.body.style.backgroundColor = "yellow";
      const text = document.createTextNode(
        wei_guide.querySelector("p:nth-child(4)").innerText,
      );
      console.log(text);
      results1.appendChild(text);
    }

    results.innerHTML = `<span>Your BMI is ${bmi}<span>`;
  }
});
