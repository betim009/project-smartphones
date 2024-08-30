const param = new URLSearchParams(window.location.search);
const id = param.get('id');
const divPhone = document.getElementById('div-phone');


async function getPhoneById(idPhone) {
    const req = await fetch(`http://localhost:3001/phones/${idPhone}`);
    const res = await req.json();

    return res;
};


window.addEventListener('load', async () => {
    const phone = await getPhoneById(id);


    divPhone.innerHTML += `
        <div>
            <h5>${phone.name}</h5>
            <p>${numeral(phone.price).format('R$ 0,0.00')}</p>
            <img src="${phone.img}" />
        </div>
    `;
});