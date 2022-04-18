'use strict';

// 1) Создать функцию-конструктор DomElement, который содержит свойства
// selector,height,width,bg,fontSize
// selector, height, width, bg, fontSize, newElement

const DomElement = function(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.background = bg;
    this.fontSize = fontSize;
    this.newElement = function() {
        this.selector = prompt("Какой блок создать? .*** - div, #*** - paragraph", "");
        let element = ''
        if (this.selector[0] == '.') {
            element = document.createElement('div');
            element.className = this.selector.substring(1);
            document.querySelector('body').append(element);
        } else if (this.selector[0] == '#') {
            element = document.createElement('p');
            element.id= this.selector.substring(1);
            document.querySelector('body').append(element);
        }
        this.height = +prompt("Какой высоты создать блок?", "");
        element.style.cssText = 'height:'+this.height+'px;';
        this.width = +prompt("Какой ширины создать блок?", "");
        element.style.cssText += 'width:'+this.width+'px;';
        this.background = prompt("Какого цвета фон блока?", "");
        element.style.cssText += 'background:'+this.background+';';
        this.fontSize = prompt("Какого размера шрифт в блоке?", "");
        element.style.cssText += 'font-size:'+this.fontSize+'px;';
        
        document.querySelector('body').children[1].textContent = prompt("Какой текст вставить в блок?", "");

    }
}

const elem = new DomElement();
elem.newElement();

console.log(elem);