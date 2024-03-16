const list = document.querySelectorAll('.mobile_navigation_list');

function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active')
}

console.log("mine");


list.forEach((item) => 
item.addEventListener('click',activeLink)
);