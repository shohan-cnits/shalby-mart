const selectBtn = document.getElementById('select_btn');
const text = document.getElementById('select_text');
const option = document.getElementsByClassName('option');

selectBtn.addEventListener('click', function() {
    selectBtn.classList.toggle('active');
});

for (options of option) {
    options.onclick = function() {
        text.innerHTML = this.textContent;
        selectBtn.classList.remove('active');
    }
};