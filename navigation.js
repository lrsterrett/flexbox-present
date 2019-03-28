const intro = document.getElementById('intro');
const header = document.querySelector('header');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.previous');
const main = document.querySelector('main');
const lessonTitle = document.getElementById('lesson-title');
const lessons = ['Introduction', 'Display: Flex', 'Justifying Content', 'Aligning Items', 'Navbar Example', 'Controlling Width', 'Content Wrap Example', 'Flex Direction: Column', 'Meme Example', 'Re-Ordering', 'Mowercycle'];

let index = 0;

function changeLesson(i) {
    lessonTitle.textContent = lessons[i];
}

function changeSlide() {
    document.querySelector('.active').classList.remove('active');
    document.getElementById(`lesson-${index}`).classList.add('active');
}

lessonTitle.onload = changeLesson(index);

nextBtn.addEventListener('click', () => {
    if (index == lessons.length - 1) {
        index = 0;
        changeLesson(index);
    } else changeLesson(++index);
    
    changeSlide();
});

prevBtn.addEventListener('click', () => {
    if (index == 0) {
        index = lessons.length - 1;
        changeLesson(index);
    } else changeLesson(--index);
    
    changeSlide();
});

intro.addEventListener('click', () => {
    intro.classList.add('paused');
    header.classList.add('start-lessons');
    setTimeout(() => {intro.style = 'display: none'}, 1000);
    
});