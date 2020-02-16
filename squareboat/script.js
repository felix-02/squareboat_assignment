let expand = document.querySelector('.fa-expand-alt');
let secondSection = document.querySelector('.second-section');
expand.addEventListener('click',()=>{
    secondSection.classList.toggle('hidden')
})