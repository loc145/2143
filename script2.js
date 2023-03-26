const urlParams = new URLSearchParams(window.location.search);
const index = urlParams.get('index');
document.querySelector('.half-circle-text').innerHTML = index;

const iFrame1 = document.querySelector('#myIframe1');
const iFrame2 = document.querySelector('#myIframe2');
const iFrame3 = document.querySelector('#myIframe3');
iFrame3.setAttribute('style', 'display: none;');
/*generate 100 vocabularies*/

for (let i = (index-1)*100; i < index*100; i++) {
  let vocabulary = Object.keys(word)[i];
  if(vocabulary !== undefined){
    let emVocabulary = vocabulary.replace(/\w+$/, (match)=>{
      return `<em>${match}</em>`;
    })

    const button = document.createElement("button");
    button.innerHTML = emVocabulary;
    button.setAttribute('onclick', 'selected(this)');
    button.setAttribute('translate', 'no');
    document.querySelector('.theTop').appendChild(button);
  }
}

let previous = '';
let current = '';
let keyword = '';
// const btnSwitch = document.getElementById('switchWebsite');
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

  /*Paragraph processing...
  const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if(isMobile()){
    window.location.href = '#theLeft';
  }
  
  const currentText = current.innerHTML.match(/^[a-zA-Z-]+/)[0];
  const CurrentText = currentText.charAt(0).toUpperCase() + currentText.slice(1);
  //If the keyword = 'ant (noun)' then there are 6 cases to replace:
      1.| ant |
      2.|ant |
      3.| antsss | => have extend
      4.| Ant |
      5.|Ant |
      6.| Antsss |  => have extend
  
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
*/

  //I want oxford, tracau scroll to #id when loaded
  keyword = current.innerText.replace(/\s\w+$/, "");
  let n = 1;
  const originalLink = word[current.innerText];
  const lastChar = originalLink.charAt(originalLink.length - 1);
  if(!isNaN(lastChar)){
    n = lastChar;
  }
  iFrame1.setAttribute('src', `${word[current.innerText]}#${keyword}_h_${n}`);
  iFrame2.setAttribute('src', `https://tracau.vn/?s=${keyword}#tc-s`);
  iFrame3.setAttribute('src', `https://www.google.com/search?tbm=isch&q=${keyword}#REsRA`)
}

/*This feature isn't useful any more, so I removed it
function checkNullForSection2(){
  let c = document.querySelector('p').innerText;

  if(c == ''){
    alert('Please choose a word first.');
    return false;
  }
    
  return c;
}


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


function speak() {
  let checkLang = document.querySelector('p').innerHTML;
  let text = document.querySelector('p').innerText;

  let isVietnamese = /istranslated|<\/font>/g.test(checkLang);


  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = isVietnamese? 'vi':'en';
  speechSynthesis.speak(speech);
}
*/

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

function switchWebsite(){
  const styleIframe3 = iFrame3.getAttribute('style');
  if(styleIframe3 == 'display: none;'){
    iFrame2.setAttribute('style', 'display: none;');
    iFrame3.setAttribute('style', "");
  } else{
    iFrame2.setAttribute('style', "");
    iFrame3.setAttribute('style', 'display: none;');
  }
}


/*document.addEventListener('keydown', function(event){
  console.log(event.code);
  if(event.code == 'Enter' || event.code == 'NumpadEnter'){
    switchWebsite();
  }else if(event.code == 'Space'){
    event.preventDefault();
    switchWebsite();
  }
})*/