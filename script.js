document.getElementById("year").textContent =
  new Date().getFullYear();

const btn = document.getElementById("helloBtn");
const out = document.getElementById("helloOut");

if (btn && out) {
  btn.addEventListener("click", () => {
    out.textContent = "JavaScript is working ✅";
  });
}
