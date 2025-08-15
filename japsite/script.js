//typing effect home screen page
const typedElement = document.getElementById("typed");

if (typedElement) {
    var typed = new Typed('#typed', {
        strings: ["夢を持って生きろ.", "Live with a dream."],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });
}

//sakuras, only for index.html
if (document.body.classList.contains('home-page')) {
    window.addEventListener('DOMContentLoaded', () => {
        function createSakura() {
            const sakura = document.createElement('div');
            sakura.classList.add('sakura');
            sakura.style.left = Math.random() * window.innerWidth + 'px';
            sakura.style.animationDuration = 5 + Math.random() * 5 + 's';
            document.body.appendChild(sakura);

            setTimeout(() => {
                sakura.remove();
            }, 10000);
        }

        setInterval(createSakura, 500);
    });
}

// site update feature, simple so people know if outdated or not
const lastModifiedElement = document.getElementById("last-modified");

if (lastModifiedElement) {
    const lastModified = document.lastModified;
    lastModifiedElement.textContent = "Last Updated: " + lastModified;
}