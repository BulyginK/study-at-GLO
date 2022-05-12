'use strict';
const saveBtn = document.querySelector('#save-btn');
const objectType = document.querySelector('.object__type');
const realtyBasic = document.querySelector('.object__realty__basic');
const tsBasic = document.querySelector('.object__ts__basic');

const realtyType = document.querySelector('.object__realty__type');
const realtyName = document.querySelector('.object__realty__name');
const realtyPurpose = document.querySelector('.object__realty__purpose');
const realtyYear = document.querySelector('.object__realty__year');
const realtyFoto = document.querySelector('#checkbox-realty-foto');
const realtyKadnumber = document.querySelector('.object__realty__kadnumber');
const realtyArea = document.querySelector('.object__realty__area');

const tsType = document.querySelector('.object__ts__type');
const tsName = document.querySelector('.object__ts__name');
const tsBrand = document.querySelector('.object__ts__brand');
const tsModel = document.querySelector('.object__ts__model');
const tsYear = document.querySelector('.object__ts__year');
const tsFoto = document.querySelector('#checkbox-ts-foto');

const trObjectRealty = document.querySelector('.tr__object__realty');
const trObjectTs = document.querySelector('.tr__object__ts');


class Object {
    constructor(object, type, name, year) {
        this.object = object;
        this.type = type;
        this.name = name;
        this.year = year;
    }
}

class ObjectRealty extends Object {
    constructor(object, type, name, year, kadnumber, area) {
        super(object, type, name, year);
        this.kadnumber = kadnumber;
        this.area = area;
    }
}

class ObjectTs extends Object {
    constructor(object, type, name, year) {
        super(object, type, name, year);
    }
}

const newTrRealty = () => {
    let newTr = document.createElement('tr');
    let count = 0;
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

const newTrTs = () => {
    let newTr = document.createElement('tr');
    let count = 0;
    newTr.innerHTML =
        `<tr>
            <td>${count++}</td>
            <td>${tsType.options[tsType.selectedIndex].textContent}</td>
            <td>${tsName.value}</td>
            <td>${tsBrand.value}</td>
            <td>${tsModel.value}</td>
            <td>${tsYear.value}</td>
            <td>${tsFoto.checked === true ? '+' : '-'}</td>
            <td><button>Удалить</button></td>
        </tr>`;
    trObjectTs.append(newTr);
}

objectType.addEventListener('change', () => {
    if (objectType.options[objectType.selectedIndex].value === 'realty') {
        realtyBasic.style.display = 'block';
        tsBasic.style.display = 'none';
    } else if (objectType.options[objectType.selectedIndex].value === 'ts') {
        tsBasic.style.display = 'block';
        realtyBasic.style.display = 'none';
    }
})

saveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const object = objectType.options[objectType.selectedIndex].value

    if (object === 'realty') {
        const type = realtyType.options[realtyType.selectedIndex].textContent;
        const objectRealty = new ObjectRealty(object, type, realtyName.value, realtyYear.value, realtyKadnumber.value, realtyArea.value);
        newTrRealty();
        console.log(objectRealty);
    } else if (object === 'ts') {
        const type = tsType.options[tsType.selectedIndex].textContent;
        const objectTs = new ObjectTs(object, type, tsName.value, tsYear.value);
        newTrTs();
        console.log(objectTs);
    }
});