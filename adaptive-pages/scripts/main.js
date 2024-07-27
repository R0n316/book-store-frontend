const tabsBox = document.querySelector(".tabs-box"),
    allTabs = tabsBox.querySelectorAll(".tab"),
    arrowIcons = document.querySelectorAll(".icon i");

let isDragging = false, startX, scrollLeft;

const handleIcons = (scrollVal) => {
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
    arrowIcons[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
        let scrollWidth = tabsBox.scrollLeft += icon.id === "left" ? -340 : 340;
        handleIcons(scrollWidth);
    });
});

allTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabsBox.querySelector(".active").classList.remove("active");
        tab.classList.add("active");
    });
});

const dragging = (e) => {
    if(!isDragging) return;
    tabsBox.classList.add("dragging");
    tabsBox.scrollLeft = scrollLeft - (e.pageX || e.touches[0].pageX - startX);
    handleIcons(tabsBox.scrollLeft);
}

const dragStop = () => {
    isDragging = false;
    tabsBox.classList.remove("dragging");
}

tabsBox.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX || e.touches[0].pageX;
    scrollLeft = tabsBox.scrollLeft;
});

tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

tabsBox.addEventListener("touchstart", (e) => {
    isDragging = true;
    startX = e.touches[0].pageX;
    scrollLeft = tabsBox.scrollLeft;
});

tabsBox.addEventListener("touchmove", dragging);
tabsBox.addEventListener("touchend", dragStop);

const bookCards = document.querySelector('.book-cards');

bookCards.addEventListener('wheel', function(event) {
    if (event.deltaY !== 0) {
        event.preventDefault();
        bookCards.scrollLeft += event.deltaY;
    }
});