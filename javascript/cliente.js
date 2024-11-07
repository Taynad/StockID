const btn = document.getElementById('Cadastrar_cliente');
const popup = document.getElementById('Pop-up_geral');
const close = document.querySelector('.btn_cancelar');

btn.addEventListener('click', () => {
  popup.classList.add('show');
});

close.addEventListener('click', () => {
  popup.classList.remove('show');
});
