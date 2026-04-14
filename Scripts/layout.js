async function loadComponent(id, file) {
    const res = await fetch(file);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
}

function setActiveLink() {
    const currentPage = location.pathname.split('/').pop();

    document.querySelectorAll('nav a').forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;

        const pageLink = href.split('/').pop();

        if (pageLink === currentPage) {
            link.classList.add('active');
            console.log("Active:", pageLink);
        }
    });
}

async function initLayout() {
    await Promise.all([
        loadComponent('header', 'Templates/header.html'),
        loadComponent('footer', 'Templates/footer.html')
    ]);

    setActiveLink();

    document.body.classList.add('loaded'); // show page
}

initLayout();