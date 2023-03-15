const urlParams = new URLSearchParams(window.location.search);
const index = urlParams.get('index');
document.querySelector('.half-circle-text').innerHTML = index;


/*generate buttons*/

for (let i = (index-1)*100; i < index*100; i++) {

  if(Object.keys(words)[i] !== undefined){
    const button = document.createElement("button");
    button.innerHTML = Object.keys(words)[i];
    button.setAttribute('onclick', 'selected(this)');
    document.querySelector('.section-1').appendChild(button);
  }
}

/*generate story*/
function selected(button){
  button.style.backgroundColor = '#1B4AEF';
  button.style.color = 'white';
  window.location.href = '#section-2';
  const text = words[button.innerHTML]
                .replace(/\n/g, '<br>');

  document.querySelector('p').innerHTML = text;
}

/**/
function copy(){
  const c = document.querySelector('p').innerHTML
                .replace(/<br>/g, '\n');

  navigator.clipboard.writeText(c);

  const span = document.querySelector(".fade-copy");

  span.classList.add("animate");
  span.style.visibility = 'visible';
  
  
  setTimeout(() => {
    span.classList.remove("animate");
    span.style.visibility = 'hidden';
  }, 2000);

}

/**/
function backHome(){
    window.location.href = `index.html`;
}


/**/
const scrollToTopButton = document.getElementById('scrollToTop');

scrollToTopButton.addEventListener('click', () => {
const scrollStep = -window.scrollY / (500 / 15); // 500ms duration, 15ms interval
let scrollAnimation = requestAnimationFrame(step);

function step() {
    if (window.scrollY === 0) {
    cancelAnimationFrame(scrollAnimation);
    } else {
    window.scrollBy(0, scrollStep);
    scrollAnimation = requestAnimationFrame(step);
    }
}
});
