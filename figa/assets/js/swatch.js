var el = document.querySelectorAll('.inner-swatch li');
for (let i = 0; i < el.length; i++) {
    el[i].onclick = function () {
        var c = 0;
        while (c < el.length) {
            el[c++].className = 'inner-swatch';
        }
        el[i].className = 'inner-swatch active';
    };
}