(function () {
    'use strict';

    class Page {
        constructor() {
            document.addEventListener('DOMContentLoaded', () => this.init());

            this.prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        }

        init() {
            const {prefersDarkMode} = this;

            this.sunsetElement = document.querySelector('img#sunset');
            this.sunriseElement = document.querySelector('img#sunrise');
            this.socialElements = Array.from(document.querySelectorAll('img.social'));

            this.sunsetElement.addEventListener('click', () => this.sunset());
            this.sunriseElement.addEventListener('click', () => this.sunrise());

            if (window.localStorage.getItem('darkMode') === 'true' ||
                (prefersDarkMode && window.localStorage.getItem('darkMode') !== 'false')) {
                this.sunset();
            }
        }

        sunset() {
            const {sunsetElement, sunriseElement, socialElements} = this;

            document.body.classList.add('night');
            window.localStorage.setItem('darkMode', 'true');
            sunsetElement.style.display = 'none';
            sunriseElement.style.display = '';
            socialElements.forEach(img => {
                img.style.display = img.classList.contains('social-night') ? '' : 'none';
            });
        }

        sunrise() {
            const {sunsetElement, sunriseElement, socialElements} = this;

            document.body.classList.remove('night');
            window.localStorage.setItem('darkMode', 'false');
            sunsetElement.style.display = '';
            sunriseElement.style.display = 'none';
            socialElements.forEach(img => {
                img.style.display = img.classList.contains('social-night') ? 'none' : '';
            });
        }
    }

    new Page();
})();
