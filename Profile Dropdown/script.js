/* const profilePic = document.querySelector(".profile-pic");
const dropdown = document.getElementById("dropdownMenu");

profilePic.addEventListener("click", () => {
  dropdown.classList.toggle("show");
});

window.addEventListener("click", (e) => {
  if (!profilePic.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.remove("show");
  }
}); */


const profilePic = document.querySelector('.profile-pic')
const dropdown = document.querySelector('.dropdown')

profilePic.addEventListener('click', ()=> {
  dropdown.classList.toggle("show")
})

window.addEventListener('click', (e)=> {
  if(!profilePic.contains(e.target) && (!dropdown.contains(e.target))){
    dropdown.contains.remove('show');
  }
});
