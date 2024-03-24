function myFunction() {
  const element = document.getElementById("id01");
  element.innerHTML = "Nowy nagłówek";
}

function myColorChange() {
  const element = document.getElementById("id01");
  element.style.color = "red";
}

const fruits = ["Jabłko", "Banan", "Pomarańcza", "Winogrona", "Arbuz"];

const numbers = [1, 7, 8, 4, 9, 15];

const wyznacznik = 5;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > wyznacznik) {
    console.log(numbers[i]);
  }
}
