const urlParams = new URLSearchParams(window.location.search);
const index = urlParams.get('index');
document.querySelector('.half-circle-text').innerHTML = index;

/*generate vocabularies*/

for (let i = (index-1)*100; i < index*100; i++) {

  if(Object.keys(words)[i] !== undefined){
    const button = document.createElement("button");
    button.innerHTML = Object.keys(words)[i];
    button.setAttribute('onclick', 'selected(this)');
    button.setAttribute('translate', 'no');
    document.querySelector('#section-1').appendChild(button);
  }
}

let previous = '';
let current = '';

/*WHEN CLICK ON A VOCABULARY*/
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

  //Paragraph processing...
  window.location.href = '#section-2';
  const currentText = current.innerHTML.match(/^[a-zA-Z-]+/)[0];
  const CurrentText = currentText.charAt(0).toUpperCase() + currentText.slice(1);
  /*If the keyword = 'ant (noun)' then there are 6 cases to replace:
      1.| ant |
      2.|ant |
      3.| antsss | => have extend
      4.| Ant |
      5.|Ant |
      6.| Antsss |  => have extend
  */
  const regex1 = new RegExp(`${currentText}\\w*`, 'g');
  const regex2 = new RegExp(`${CurrentText}\\w*`, 'g');
  const text = words[button.innerHTML]
                      .replace(/\n/g, '<br>')
  //After translation, the text inside each tag will auto be trimed...
  //Therefore, I add pseudo-space around the vocabulary
                      .replace(regex1, (match1) => {
                                return `&#160;<mark translate='no'>${match1}</mark>&#160;`;
                              })
                      .replace(regex2, (match2) => {
                                return `&#160;<mark translate='no'>${match2}</mark>&#160;`;
                              });

  document.querySelector('p').innerHTML = text;

  let iFrame = document.querySelector('#myIframe');
  iFrame.setAttribute('src', `https://tracau.vn/?s=${currentText}`);
}

/**/
function checkNullForSection2(){
  let c = document.querySelector('p').innerText;

  if(c == ''){
    alert('Please choose a word first.');
    return false;
  }
    
  return c;
}

/*This feature isn't useful any more, so I removed it
function onlineTranslate(name){

    const text = checkNullForSection2();

    if(text!== false){
          
      console.log(text.replace(/ /g, '%20'))

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
    }
}
*/
/**/
let timeoutId;
function partOfSpeech(){
    if(checkNullForSection2() !== false){
        const span = document.querySelector(".fade-drop");
        span.innerHTML = current.innerHTML.match(/\((\w+)\)/)[1];
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
function speak() {
  let checkLang = document.querySelector('p').innerHTML;
  let text = document.querySelector('p').innerText;

  let isVietnamese = /istranslated|<\/font>/g.test(checkLang);


  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = isVietnamese? 'vi':'en';
  speechSynthesis.speak(speech);
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

/**/
function backHome(){
  window.location.href = `index.html`;
}