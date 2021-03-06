const [home,skills,projects,contact] = document.querySelectorAll('section,#contact');

const activarLink = (element) => {
    let linkActivo = document.querySelector('.header__link.active');
    if(linkActivo != null) {
        linkActivo.classList.remove('active');
    }
    element?.classList.add('active');
}

window.addEventListener('scroll',() => {
    if(window.scrollY > 40) {
        document.querySelector('#header').classList.add('scroll');
    } else {
        document.querySelector('#header').classList.remove('scroll');
    }
    if( (window.scrollY+300) >= contact.offsetTop) {
        activarLink(document.querySelector('.header__link[href="#contact"]'));
    } else if(window.scrollY+100 >= projects.offsetTop) {
        activarLink(document.querySelector('.header__link[href="#projects"]'));
    }else if(window.scrollY+100 >= skills.offsetTop) {
        activarLink(document.querySelector('.header__link[href="#skills"]'));
    } else if(window.scrollY <= 250) {
        activarLink(document.querySelector('.header__link[href="#home"]'));
    }
});

const listProjects = document.querySelector('#project-list');
data.forEach(project => {
    let technologies = document.createElement('div');
    if(project?.technologies != null) {
        project.technologies.forEach(technology => {
            technologies.innerHTML += `<img src="./resource/${technology}.png" alt="${technology}"></img>`
        })
    }

    listProjects.innerHTML += `<div class="project__item">
        <img
            class="project__img"
            src="${project.img}" alt="${project.name}" />
        <div class="project__content">
            <h4 class="project__title">${project.name}</h4>
            <p class="project__description">${project.description}</a>
            <div class="technologies">
                ${technologies?.innerHTML}
            </div>
            <a href="${project.link}" target="_blank" class="btn btn--details">
                Ver más info
            </a>
        </div>
    </div>`
})