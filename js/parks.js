const yellowBtn1 = document.body.querySelector('#yellow-btn');
const yellowBtn2 = document.querySelector('#yellow-btn2');
const yellowBtn3 = document.querySelector('#yellow-btn3');
const header1 = document.querySelector('#header1');
const header2 = document.querySelector('#header2');
const header3 = document.querySelector('#header3');
const uList1 = document.querySelector('#acadia-list');
const uList2 = document.querySelector('#samoa-list');
const uList3 = document.querySelector('#arches-list');

yellowBtn1.addEventListener('click', e => {
     parkList = yellowBtn1.previousElementSibling;
     parkList.lastElementChild.classList.add("yellow-bg");
});

yellowBtn2.addEventListener('click', e => {
     parkList = yellowBtn2.previousElementSibling;
     parkList.lastElementChild.classList.add("yellow-bg");
});

yellowBtn3.addEventListener('click', e => {
     parkList = yellowBtn3.previousElementSibling;
     parkList.lastElementChild.classList.add("yellow-bg");
});

header1.addEventListener('click', e => {
     parkList = header1.nextElementSibling.children;
     for(let i = 0; i < parkList.length; i++) {
          parkList[i].style.fontWeight = "bold";
     }
});

header2.addEventListener('click', e => {
     parkList = header2.nextElementSibling.children;
     for(let i = 0; i < parkList.length; i++) {
          parkList[i].style.fontWeight = "bold";
     }
});

header3.addEventListener('click', e => {
     parkList = header3.nextElementSibling.children;
     for(let i = 0; i < parkList.length; i++) {
          parkList[i].style.fontWeight = "bold";
     }
});

uList1.addEventListener('click', e => {
     listItem = uList1.firstElementChild
     listItem.style.color = "blue";
});

uList2.addEventListener('click', e => {
     listItem = uList2.firstElementChild
     listItem.style.color = "blue";
});

uList3.addEventListener('click', e => {
     listItem = uList3.firstElementChild
     listItem.style.color = "blue";
});

