import './style.css';

const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  showSpinner();
  // disable the button
  e.preventDefault();

  const data = new FormData(form);

  const response = await fetch('http://localhost:8088/dream', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: data.get('prompt'),
    }),
  });
  if (response.ok) {
    const { img } = await response.json();
    // alert(img);
    const result = document.querySelector('#result');
    result.innerHTML = `<img src="${img}" width="512" />`;
  }
  else {
    const error = await response.text();
    alert(error);
    console.log(error);
  }
  hideSpinner();
});


function showSpinner() {
  const button = document.querySelector('button');
  button.disabled = true;
  button.innerHTML = 'Dreaming... <span class="spinner">🤓</span>';
}

function hideSpinner() {
  const button = document.querySelector('button');
  button.disabled = false;
  button.innerHTML = 'Dream';
}