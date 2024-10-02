document.querySelector("#toggle").addEventListener("click", function () {
  if (this.checked) {
    console.log("checked");
    document.querySelector("html").classList.add("dark");
  } else {
    console.log("not");
    document.querySelector("html").classList.remove("dark");
  }
});
