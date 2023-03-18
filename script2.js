const urlParams = new URLSearchParams(window.location.search);
const index = urlParams.get('index');
document.querySelector('.half-circle-text').innerHTML = index;


/*generate buttons*/

for (let i = (index-1)*100; i < index*100; i++) {

  if(Object.keys(words)[i] !== undefined){
    const button = document.createElement("button");
    button.innerHTML = Object.keys(words)[i];
    button.setAttribute('onclick', 'selected(this)');
    button.setAttribute('translate', 'no');
    document.querySelector('.section-1').appendChild(button);
  }
}

let previous = '';
let current = '';

/*generate story*/
function selected(button){

  //Highlight previous selected words
  previous = current;
  if(previous != ''){
    previous.classList.remove('highlight-yellow');
    previous.classList.add('highlight-blue')
  }

  //Highlight current selected word
  current = button;
  current.classList.add('highlight-yellow');
  
  //
  window.location.href = '#section-2';

  const currentText = current.innerHTML.match(/^[a-zA-Z-]+/)[0];
  const CurrentText = currentText.charAt(0).toUpperCase() + currentText.slice(1);

  const regex = new RegExp(`${currentText}`, 'g');
  const Regex = new RegExp(`${CurrentText}`, 'g');

  const text = words[button.innerHTML]
                // .replace(/\n/g, '<br>')
                .replace(regex, `<mark>${currentText}</mark>`)
                .replace(Regex, `<mark>${CurrentText}</mark>`);
  //Uppercase first character of each paragraphs

  // const paragraphs = text.split("<br><br><mark>");

  // for (let i in paragraphs) {
  //   paragraphs[i] = paragraphs[i].charAt(0).toUpperCase() + paragraphs[i].slice(1);
  // }

  // const newText = paragraphs.join("<br><br><mark>");

  document.querySelector('p').innerHTML = text;
}

/**/
function backHome(){
    window.location.href = `index.html`;
}

/**/
function checkNullForSection2(){
  let c = document.querySelector('p').innerHTML
                // .replace(/<br>/g, '\n')
                .replace(/<\/?mark>/g, '');
  if(c == ''){
    alert('Please choose a word first.');
    return false;
  }
    
  return c;
}

/**/
let timeoutId;
function pronounce(){

    if(checkNullForSection2() !== false){
        // navigator.clipboard.writeText(text);
        
        const span = document.querySelector(".fade-pronounce");
        span.innerHTML = pronunciationOf[current.innerHTML];
        span.classList.add("animate");
        span.style.visibility = 'visible';
        
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
          span.classList.remove("animate");
          span.style.visibility = 'hidden';
        }, 2000);
      }
}



/**/
function onlineTranslate(name){

    const text = checkNullForSection2();
    const textTranslated = /<font style="vertical-align: inherit;">/.test(text);
    if(text!== false && textTranslated == false){
          const width = 850;
          const height = 500;

          const top = Math.floor(screen.height/2 - height/2) - 100;
          const left = Math.floor(screen.width/2 - width/2);

          let url;
          if(name.classList[1] == 'left'){
            url = `https://translate.google.com/?hl=vi&tab=TT&sl=en&tl=vi&text=${text}&op=translate`;
          } else if(name.classList[1] == 'right'){
            url = `https://www.bing.com/translator?from=en&to=vi&text=${text}`;
          }

          window.open(
          url,
          'popUpWindow',
          `width=${width}, height=${height}, top=${top}, left=${left},
          toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes`); 
    } else if(textTranslated == true){
      alert("Please click 'Show original' button first.")
    }
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
