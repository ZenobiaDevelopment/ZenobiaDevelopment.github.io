const lists = document.querySelectorAll(".nav-ul li");

const addGradients = (element) => {
  element.classList.add("gradient-clipped");
};
const removeGradients = (element) => {
  element.classList.remove("gradient-clipped");
};

lists.forEach((list) => {
  list.addEventListener("mouseenter", () => {
    addGradients(list);
  });
  list.addEventListener("mouseleave", () => {
    removeGradients(list);
  });
});
