import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const divApp = document.getElementById('app');

async function getAllPhones() {
  try {
    const req = await fetch('http://localhost:3001/phones');
    const res = await req.json();

    const { results } = res;
    return results;
  } catch (error) {
    console.error('Erro ao buscar dados:', error.message);
    return [];
  }
}



window.addEventListener('load', async () => {
  const data = await getAllPhones();

  if (data) {
    data.forEach((el, index) => {
      divApp.innerHTML += `
      <div class="d-flex justify-content-center">
        <div class="card mb-3" style="width: 400px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${el.img}" class="img-fluid rounded-start bg-img p-2 h-100 text-center w-100" alt="${el.name}-img">
            </div>
            <div class="col-md-8">
              <div class="card-body d-flex align-items-center h-100">
              <div>
                <h5 class="card-title">${el.name}</h5>
                <p class="card-text">Preço: ${numeral(el.price).format('R$ 0,0.00')}</p>
                <p class="card-text"><small class="text-body-secondary">Cor: ${el.color}</small></p>
                <a href="./phone.html?id=${el.id}" class="btn btn-secondary">Saiba mais</a>
              </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
      `
    });
  } else {
    divApp.innerHTML = "LoADing"
  };
});