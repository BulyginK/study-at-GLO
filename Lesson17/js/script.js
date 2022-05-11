'use strict';
const saveBtn = document.querySelector('#save-btn');
const objectType = document.querySelector('.object__type');
const realtyBasic = document.querySelector('.object__realty__basic');
const realtyType = document.querySelector('.object__realty__type');
const realtyName = document.querySelector('.object__realty__name');
const realtyPurpose = document.querySelector('.object__realty__purpose');
const realtyYear = document.querySelector('.object__realty__year');
const realtyFoto = document.querySelector('#checkbox-realty-foto');
const realtyKadnumber = document.querySelector('.object__realty__kadnumber');
const realtyArea = document.querySelector('.object__realty__area');
const trObjectRealty = document.querySelector('.tr__object__realty');
let count = 0;

class Object {
    constructor(namber, type, name, year) {
        this.namber = namber;
        this.type = type;
        this.name = name;
        this.year = year;
    }
}

class ObjectRealty extends Object {
    constructor(namber, type, name, year, kadnumber, area) {
        super(namber, type, name, year)
        this.kadnumber = kadnumber;
        this.area = area;
    }
}

const newTr = () => {
    let newTr = document.createElement('tr');
    newTr.innerHTML =
        `<tr>
            <td>${count++}</td>
            <td>${realtyType.options[realtyType.selectedIndex].textContent}</td>
            <td>${realtyName.value}</td>
            <td>${realtyPurpose.value}</td>
            <td>${realtyYear.value}</td>
            <td>${realtyFoto.checked === true ? '+' : '-'}</td>
            <td>${realtyKadnumber.value}</td>
            <td>${realtyArea.value}</td>
            <td><button>Удалить</button></td>
        </tr>`;
    trObjectRealty.append(newTr);
}

objectType.addEventListener('change', () => {
    if (objectType.options[objectType.selectedIndex].value === 'realty') {
        realtyBasic.style.display = 'block'
    } else if (objectType.options[objectType.selectedIndex].value === 'ts') {

    }
})

saveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const type = realtyType.options[realtyType.selectedIndex].textContent;
    const objectRealty = new ObjectRealty(count, type, realtyPurpose.value, realtyYear.value, realtyKadnumber.value, realtyArea.value);
    newTr();
    console.log(objectRealty);
});

