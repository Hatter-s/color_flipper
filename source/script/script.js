// make sample obj
// yelow obj 
const  obj = {
    hue:  60,
    saturation: 100,
    lightness: 45, 
    hsl: 'hsl(60, 100%, 50%)',
    hexValue: '#ffff00',
    rgb: 'rgb(255, 255, 0)'
}
// hover element for for hover effect of child element of container-color
// create style 
// take element from DOM.
const nav = document.querySelector('nav');
const containerColor = document.getElementById('container-color');
const body = document.body;
const h1 = document.querySelector('h1');
const button = document.querySelector('#btn-change-color');
const test = document.getElementById('test');
// check lightness
if (obj.lightness < 50) { //color dark
    //set nav background-color and add class color 
    nav.style.backgroundColor = 'var(--bs-dark)';
    nav.classList.add('navbar-dark');
    // set background-color and color for container-color
    containerColor.style.backgroundColor = 'var(--bs-dark)';
    for(let i of containerColor.children) {
        i.style.color = 'white';
    }
    // hover?
    
    
    
}
const chooseFile = async () => {
    const [fileHandle] = await window.showOpenFilePicker();
    const fileData = await fileHandle.getFile();
    console.log(fileData);
    const text = await fileData.text();
    test.innerHTML = text;
}
