var backGround = document.querySelector('.bg-color');
var color = document.querySelector('.color');
var padding = document.querySelector('.padding');
var border = document.querySelector('.border');
var elBorder = document.querySelector('.br-color');
var font = document.querySelector('.font-size');
var paragraph = document.querySelector('p');
var text = document.querySelector('.text-container');
var btnSave = document.querySelector('.save');
var elResult = document.querySelector('.result')

btnSave.addEventListener('click', function(e){
    e.preventDefault();
    var element = document.querySelector('.text-container');
    element.style.borderRadius = border.value;
    paragraph.style.color = color.value;
    paragraph.style.backgroundColor = backGround.value;
    paragraph.style.padding = padding.value;
    text.style.borderColor = elBorder.value;
    paragraph.style.fontSize = font.value;

    elResult.textContent = document.querySelector('p').classList.add('card');
})