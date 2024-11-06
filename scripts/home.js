let menu =document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
const searchInput = document.getElementById('search-input');







menu.onclick =( ) =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}


function searchItems() {
    const searchText = searchInput.value.toLowerCase();
    const itemElements = document.getElementsByClassName('item-class');
   
    for (let i = 0; i < itemElements.length; i++) {
       const itemElement = itemElements[i];
       const itemText = itemElement.textContent || itemElement.innerText;
   
       if (itemText.toLowerCase().indexOf(searchText) > -1) {
         itemElement.style.display = '';
       } else {
         itemElement.style.display = 'none';
       }
    }
   }

   searchInput.addEventListener('input', searchItems);




    
  

