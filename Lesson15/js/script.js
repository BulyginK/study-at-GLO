'use strict';

// 1) Создать функцию-конструктор DomElement, который содержит свойства
// selector,height,width,bg,fontSize
// selector, height, width, bg, fontSize, newElement

const body = document.querySelector('body');

const DomElement = function(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.backgroundColor = bg;
    this.fontSize = fontSize;
    this.newElement = function() {
        selector = prompt("Какой блок создать? .*** - div, #*** - paragraph", "");
        let element = ''
        if (selector[0] == '.') {
            element = document.createElement('div');
            element.className = selector.substring(1);
            body.append(element);
        } else if (selector[0] == '#') {
            element = document.createElement('p');
            element.id= selector.substring(1);
            body.append(element);
        }
        height = prompt("Какой ширины создать блок?", "");
        console.log(height);

        element.style.cssText = 'height: ' + height + ';';

    }
}

const elem = new DomElement();
elem.newElement();