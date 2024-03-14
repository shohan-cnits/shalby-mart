const selectBtn = document.getElementById('topbar_btn');
const text = document.getElementById('topbar_text');
const option = document.getElementsByClassName('topbar_option');

selectBtn.addEventListener('click', function() {
    selectBtn.classList.toggle('active');
});

for (options of option) {
    options.onclick = function() {
        text.innerHTML = this.textContent;
        selectBtn.classList.remove('active');
    }
};


//2nd
const selectBtns = document.getElementById('topbar_btns');
const texts = document.getElementById('topbar_texts');
const optiona = document.getElementsByClassName('topbar_options');

selectBtns.addEventListener('click', function() {
    selectBtns.classList.toggle('active');
});

for (options of optiona) {
    options.onclick = function() {
        texts.innerHTML = this.textContent;
        selectBtns.classList.remove('active');
    }
};
