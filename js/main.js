import { data } from './data.js'

const $Personalesprojects = document.querySelector("#personal_projects")
const $collabProjects=document.querySelector("#collab_projects")
const $couses=document.querySelector('#courses')

data.personalProjects.map(item=>{
    item.deploy?
    $Personalesprojects.innerHTML += `
    <article class="project">
        <div class="project-details">
            <h3 class="project-title">${item.title}</h3>
            <h6 class="project-course">${item.course}</h6>
            <p class="project-url"><small><strong>Puedes verlo en:</strong> <a href="${item.deploy}" target="_blank"><span>${item.deploy}</span></a></small></p>
            <p class="project-url"><small><strong>Github:</strong> <a href="${item.repo}" target="_blank"><span>${item.repo}</span></a></small></p>
            <p class="project-description">${item.description}</a></p>
        </div>
        <figure class="project-imageContainer">
            <img class="project-image" width="500" src="${item.img_src}" alt="${item.img_alt}">
        </figure>
    </article> 
    `:
    $Personalesprojects.innerHTML += `
    <article class="project">
        <div class="project-details">
            <h3 class="project-title">${item.title}</h3>
            <h6 class="project-course">${item.course}</h6>
            <p class="project-url"><small><strong>Github:</strong> <a href="${item.repo}" target="_blank"><span>${item.repo}</span></a></small></p>
            <p class="project-description">${item.description}</a></p>
        </div>
        <figure class="project-imageContainer">
            <img class="project-image" width="500" src="${item.img_src}" alt="${item.img_alt}">
        </figure>
    </article> 
    `
})
data.collabprojects.map(item=>{
    item.deploy?
    $collabProjects.innerHTML += `
    <article class="project">
        <div class="project-details">
            <h3 class="project-title">${item.title}</h3>
            <h6 class="project-course">${item.course}</h6>
            <p class="project-url"><small><strong>Puedes verlo en:</strong> <a href="${item.deploy}" target="_blank"><span>${item.deploy}</span></a></small></p>
            <p class="project-url"><small><strong>Github:</strong> <a href="${item.repo}" target="_blank"><span>${item.repo}</span></a></small></p>
            <p class="project-description">${item.description}</a></p>
        </div>
        <figure class="project-imageContainer">
            <img class="project-image" width="500" src="${item.img_src}" alt="${item.img_alt}">
        </figure>
    </article> 
    `:
    $collabProjects.innerHTML += `
    <article class="project">
        <div class="project-details">
            <h3 class="project-title">${item.title}</h3>
            <h6 class="project-course">${item.course}</h6>
            <p class="project-url"><small><strong>Github:</strong> <a href="${item.repo}" target="_blank"><span>${item.repo}</span></a></small></p>
            <p class="project-description">${item.description}</a></p>
        </div>
        <figure class="project-imageContainer">
            <img class="project-image" width="500" src="${item.img_src}" alt="${item.img_alt}">
        </figure>
    </article> 
    `
})
data.courses.map(item=>{
    $couses.innerHTML+=`
    <article class="event">
        <figure class="event-imageContainer">
            <img class="event-image" src="${item.img_src}" width="500"/>
        </figure>
        <div class="event-detail">
            <h3 class="event-title">${item.title}</h3>
            <p class="event-description">${item.description}</p>
            <a class="event-url" href="${item.url}" target="_blank">Ver Diploma</a>
        </div>
    </article>
    `
})