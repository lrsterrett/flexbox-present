let tracker = new Array();

function coolify(lessonNumber) {
    const lesson = document.getElementById(`lesson-${lessonNumber}`);
    tracker.push(0);
    lesson.addEventListener('click', () => {
        const elements = lesson.querySelectorAll('.cool-transition');
        elements[tracker[parseInt(lessonNumber)]++].classList.add('cool-transition-in');
    });
}

window.onload = () => {
    coolify('0');
    coolify('7');
}