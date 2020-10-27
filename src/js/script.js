const one = document.querySelector('.one');

one.style.width = "150px";
one.style.paddingBottom = "40px";

// console.log(one.style);

one.classList.add('two');

const toggle = document.querySelector('.toggle');

toggle.onclick = function () {
    this.classList.toggle('three');
};

let gas = document.querySelectorAll('.gas');
for (let i = 0; i < gas.length; i++) {
    gas[i].onclick = function () {
        let gallons = document.querySelector('.gallons').value;
        let amount = this.getAttribute('data');
        console.log(gallons * amount);
    };
}

let a = document.createElement('div');
a.innerHTML = 'HI';
a.classList.add('one');
console.log(a);