'use strict';

// 1) Создать функцию-конструктор DomElement, который содержит свойства

const DomElement = function(selector) {
    this.selector = ''
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.addDiv = function() {
    if (selector[0] = '.') {
        let div = document.createElement('div');
        div.className = selector.substring(1);
    } else if (selector[0] = '#') {
        let paragraph = document.createElement('p');
        paragraph.id ='igParagraph';
    }
}

const elem = new DomElement();

console.log(elem);

