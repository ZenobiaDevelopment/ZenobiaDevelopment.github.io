const projectGrid = document.querySelector(".project-grid");
const projects = data;

projects.forEach((project) => {
  html = `
        <a class='project-child' href='${project.url}'
          <div>
            <h4 class='gradient-clipped'>${project.id} - ${project.name}</h4>
            <p>${project.about}</p>
          </div>
        </a>
    `;
  projectGrid.innerHTML += html;
});
