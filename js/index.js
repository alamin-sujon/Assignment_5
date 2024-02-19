
const seats = document.getElementsByClassName('char-btn');
let count = 0;
let total = 0;
const arr = [];
for (let seat of seats) {
    seat.addEventListener('click', function (event) {
        const clickSeat = event.target;
        const clickSeatText = clickSeat.innerText ;
        count++;
        if (count > 4) {

            alert('You Cannot booked more than 4 seats')
        }
        else {
            clickSeat.style.backgroundColor = '#1DD100'
            clickSeat.style.color = 'white';


            const seatremains = getIntValue('total-seat');
            const updateSeat = seatremains - 1;
            setElementById('total-seat', updateSeat);


            const booked = getIntValue('booked-seat');
            const updateBooked = booked + 1;
            setElementById('booked-seat', updateBooked);


            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            const p3 = document.createElement('p');
            p1.innerText = clickSeat.innerText;
            p2.innerText = 'Economoy';
            p3.innerText = '550';
            p2.style.textAlign = 'right';
            p3.style.textAlign = 'right';
            document.getElementById('append-container').appendChild(p1);
            document.getElementById('append-container').appendChild(p2);
            document.getElementById('append-container').appendChild(p3);

            const total = getIntValue('total-tk');
            const newTotal = total + 550;
            setElementById('total-tk', newTotal);


            setElementById('grand-total', newTotal);


        }
       
    })
}

//  Set Value
function setElementById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

//  get int value
function getIntValue(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    return parseFloat(elementText);
}

function getDiscount(elementId, dis) {
    const element = getIntValue(elementId);
    return element * dis;
}

document.getElementById('apply').addEventListener('click', function () {
    const input = document.getElementById('input-field');
    const inputValue = input.value;
    if (inputValue === 'NEW15') {
        console.log('cl')

        const valueG = getIntValue('grand-total');
        const newG = valueG * 0.85;
        const disG = valueG - newG;
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        p1.innerText = 'Discount Price';
        p2.innerText = 'BDT ' + disG;
        p1.classList.add('font-semibold');
        p2.classList.add('font-semibold');
        document.getElementById('discount').appendChild(p1);
        document.getElementById('discount').appendChild(p2);

        setElementById('grand-total', newG)
        input.style.display = 'none';
        document.getElementById('apply').style.display = 'none'


    }

    else if (inputValue === 'Couple 20') {

        const valueG = getIntValue('grand-total');
        const newG = valueG * 0.80;
        const disG = valueG - newG;
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        p1.innerText = 'Discount Price';
        p2.innerText = 'BDT ' + disG;
        p1.classList.add('font-semibold');
        p2.classList.add('font-semibold');
        document.getElementById('discount').appendChild(p1);
        document.getElementById('discount').appendChild(p2);
        setElementById('grand-total', newG)
        input.style.display = 'none';
        document.getElementById('apply').style.display = 'none';


    }
    else {
        alert('Invalid Coupon');
    }
})

document.getElementById('number').addEventListener('keyup', function () {
    const inputValue = document.getElementById('number');
    const btn = document.getElementById('next');
    if (inputValue.value !== '') {
        btn.removeAttribute('disabled');
    }

})

document.getElementById('next').addEventListener('click', function () {
    const inputValue = document.getElementById('number');
    inputValue.value = '';

    location.href = 'new.html';

})