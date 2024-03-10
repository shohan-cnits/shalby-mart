// scrollable tabs work
// const productTabBox = document.querySelector(".product_menu_item_tab"),
//   productArrowIcons = document.querySelectorAll(".product_tab_arrow_icon i");

// productArrowIcons.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     productTabBox.scrollTop += icon.id === "top" ? -200 : 200;
//   });
// });

// let isDraggingProduct = false;
// const productDragging = (e) => {
//   if (!isDraggingProduct) return;
//   productTabBox.classList.add("productDragging");
//   productTabBox.scrollTop -= e.movementX;
// };

// const productDragStop = () => {
//   productTabBox.classList.remove("productDragging");
//   isDraggingProduct = false;
// };

// productTabBox.addEventListener("mousedown", () => (isDraggingProduct = true));
// productTabBox.addEventListener("mousemove", productDragging);
// document.addEventListener("mouseup", productDragStop);

// product menu tabs content work
// const productTabBtn = document.querySelectorAll(".product_menu_tab_btn");
// const productTabContent = document.querySelectorAll(
//   ".product_menu_tab_content"
// );

// productTabBtn.forEach((tab, index) => {
//   tab.addEventListener("click", () => {
//     productTabBtn.forEach((tab) => tab.classList.remove("active"));
//     tab.classList.add("active");

//     productTabContent.forEach((content) => content.classList.remove("active"));
//     productTabContent[index].classList.add("active");
//   });
// });


// //second tab
// const productTabBoxs = document.querySelector(".product_menu_item_tabs"),
//   productArrowIcon = document.querySelectorAll(".product_tab_arrow_icons");

//   productArrowIcon.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     productTabBoxs.scrollTop += icon.id === "top" ? -200 : 200;
//   });
// });

// let isDraggingProducts = false;
// const productDraggings = (e) => {
//   if (!isDraggingProducts) return;
//   productTabBoxs.classList.add("productDraggings");
//   productTabBoxs.scrollTop -= e.movementX;
// };

// const productDragStops = () => {
//   productTabBoxs.classList.remove("productDraggings");
//   isDraggingProducts = false;
// };

// productTabBoxs.addEventListener("mousedown", () => (isDraggingProducts = true));
// productTabBoxs.addEventListener("mousemove", productDraggings);
// document.addEventListener("mouseup", productDragStops);


// //Thrid tab

// const productTabBoxa = document.querySelector(".product_menu_item_taba"),
//   productArrowIcona = document.querySelectorAll(".product_tab_arrow_icona");

//   productArrowIcona.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     productTabBoxa.scrollTop += icon.id === "top" ? -200 : 200;
//   });
// });

// let isDraggingProducta = false;
// const productDragginga = (e) => {
//   if (!isDraggingProducta) return;
//   productTabBoxa.classList.add("productDragginga");
//   productTabBoxa.scrollTop -= e.movementX;
// };

// const productDragStopa = () => {
//   productTabBoxa.classList.remove("productDragginga");
//   isDraggingProducta = false;
// };

// productTabBoxa.addEventListener("mousedown", () => (isDraggingProducta = true));
// productTabBoxa.addEventListener("mousemove", productDragginga);
// document.addEventListener("mouseup", productDragStopa);