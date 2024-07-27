document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.getElementById('tabs');

    tabs.addEventListener('wheel', (event) => {
        event.preventDefault();
        tabs.scrollLeft += event.deltaY;
    });
});




const tab = document.querySelector('.tabs');
const badges = tab.querySelectorAll('.tab');
const icons = document.querySelectorAll('.icon');

badges.forEach(badge => {
    badge.addEventListener('click', () => {
        tab.querySelector('.active').classList.remove('active');
        badge.classList.add('active');
    })
});

tab.addEventListener('scroll', e => updateIcons(e.target.scrollLeft, e.target.scrollWidth, e.target.clientWidth));

function updateIcons(scrolledWidth, scrollWidth, clientWidth) {
    icons[0].parentElement.classList.toggle('hide', scrolledWidth <= 1);
    icons[1].parentElement.classList.toggle('hide', scrolledWidth >= scrollWidth - clientWidth - 1);
}