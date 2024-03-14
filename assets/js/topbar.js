const selectBtn = document.getElementById('topbar_btn');
const text = document.getElementById('topbar_text');
const option = document.getElementsByClassName('topbar_option');

selectBtn.addEventListener('click', function() {
    selectBtn.classList.toggle('active');
});

console.log(".add");

for (options of option) {
    options.onclick = function() {
        text.innerHTML = this.textContent;
        selectBtn.classList.remove('active');
    }
};
