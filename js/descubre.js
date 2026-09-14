document.addEventListener('DOMContentLoaded', function () {
    var navToggle = document.getElementById('ilNavToggle');
    var nav = document.querySelector('.il-nav');
    if (navToggle && nav) {
        navToggle.addEventListener('click', function () {
            nav.classList.toggle('is-open');
        });
    }

    var heroSearch = document.getElementById('ilHeroSearch');
    var directorySearch = document.getElementById('ilDirectorySearch');
    var directorySection = document.getElementById('directorio');

    function goToDirectory(value) {
        if (directorySearch && value) {
            directorySearch.value = value;
        }
        if (directorySection) {
            directorySection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    if (heroSearch) {
        heroSearch.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                goToDirectory(heroSearch.value);
            }
        });
        var heroSubmit = heroSearch.closest('form').querySelector('.il-search-submit');
        if (heroSubmit) {
            heroSubmit.addEventListener('click', function () {
                goToDirectory(heroSearch.value);
            });
        }
    }

    var filterCards = document.querySelectorAll('.il-filter-card');
    filterCards.forEach(function (card) {
        card.addEventListener('click', function () {
            filterCards.forEach(function (c) { c.classList.remove('is-selected'); });
            card.classList.add('is-selected');
        });
    });

    var consultarBtn = document.getElementById('ilConsultarBtn');
    if (consultarBtn) {
        consultarBtn.addEventListener('click', function () {
            window.location.href = 'solicitudes.html';
        });
    }

    if (directorySearch) {
        var orgCards = document.querySelectorAll('.il-org-card');
        directorySearch.addEventListener('input', function () {
            var term = directorySearch.value.trim().toLowerCase();
            orgCards.forEach(function (card) {
                var text = card.textContent.toLowerCase();
                card.style.display = term === '' || text.indexOf(term) !== -1 ? '' : 'none';
            });
        });
    }
});
