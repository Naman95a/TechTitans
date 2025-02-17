let currentPage = 0;
const pages = document.querySelectorAll('.page');

function turnPage(pageNumber) {
    if (pageNumber < pages.length) {
        pages[pageNumber - 1].style.transform = 'rotateY(-180deg)';
        pages[pageNumber - 1].style.zIndex = -pageNumber;
    }
}

function resetBook() {
    pages.forEach((page, index) => {
        page.style.transform = 'rotateY(0deg)';
        page.style.zIndex = pages.length - index;
    });
}