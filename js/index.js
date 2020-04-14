(function () {
    'use strict';

    class Page {
        constructor() {
            document.addEventListener('DOMContentLoaded', () => this.init());
        }

        init() {
            this.prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            this.sunsetElement = document.querySelector('img#sunset');
            this.sunriseElement = document.querySelector('img#sunrise');
            this.socialElements = Array.from(document.querySelectorAll('img.social'));

            this.sunsetElement.addEventListener('click', () => this.sunset());
            this.sunriseElement.addEventListener('click', () => this.sunrise());

            if (this.prefersDarkMode || window.localStorage.getItem('night')) {
                if (!window.localStorage.getItem('preferenceOverride')) {
                    this.sunset();
                }
            }
        }

        sunset() {
            const {sunsetElement, sunriseElement, socialElements, prefersDarkMode} = this;

            document.body.classList.add('night');
            window.localStorage.setItem('night', 'true');
            window.localStorage.removeItem('preferenceOverride');
            sunsetElement.style.display = 'none';
            sunriseElement.style.display = '';
            socialElements.forEach(img => {
                img.style.display = img.classList.contains('social-night') ? '' : 'none';
            });
        }

        sunrise() {
            const {sunsetElement, sunriseElement, socialElements, prefersDarkMode} = this;

            document.body.classList.remove('night');
            window.localStorage.removeItem('night');

            if (prefersDarkMode) {
                window.localStorage.setItem('preferenceOverride', 'true');
            }

            sunsetElement.style.display = '';
            sunriseElement.style.display = 'none';
            socialElements.forEach(img => {
                img.style.display = img.classList.contains('social-night') ? 'none' : '';
            });
        }
    }

    new Page();
})();
