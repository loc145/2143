let nodes = document.querySelectorAll('li');
for(let i of nodes){

    i.addEventListener('click', function(event){
    	// console.log(event);
        let char = event.target.innerHTML;
        // console.log(char);
        window.location.href = `page2.html?index=${char}`;
    });
}