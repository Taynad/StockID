// Obtendo os elementos do DOM
const openModalBtn1 = document.getElementById("cadastrar_cliente");
const openModalBtn2 = document.getElementById("pagar_divida");
const openModalBtn3 = document.getElementById("aumentar_limite");
const openModalBtn4 = document.getElementById("btn_mais");


const modal_cadastrar = document.getElementById("popup_cadastrar");
const modal_pagarDiv = document.getElementById("popup_pagarDiv");
const modal_limite = document.getElementById("popup_limite");
const modal_mais = document.getElementById("popup_mais");

const cancelBtn1 = document.getElementById("btn_cancelar");
const cancelBtn2 = document.getElementById("btn_cancelarPagarDiv");
const cancelBtn3 = document.getElementById("btn_cancelarLimite");
const cancelBtn4 = document.getElementById("btn_excluirMais");

const overlay = document.getElementById("overlay");

// Função para abrir o pop-up de cadastrar
openModalBtn1.onclick = function() {
    modal_cadastrar.style.display = "block";
    overlay.style.display = "block";
}
// Função para abrir o pop-up de pagar dívida
openModalBtn2.onclick = function() {
    modal_pagarDiv.style.display = "block";
    overlay.style.display = "block";
}
// Função para abrir o pop-up de aumentar limite
openModalBtn3.onclick = function() {
  modal_limite.style.display = "block";
  overlay.style.display = "block";
}

// Função para abrir o pop-up de aumentar mais
openModalBtn4.onclick = function() {
  modal_mais.style.display = "block";
  overlay.style.display = "block";
}

// Função para fechar o pop-up ao clicar no botão "Cancelar" de cadastrar
cancelBtn1.onclick = function() {
    modal_cadastrar.style.display = "none";
    overlay.style.display = "none";
}
// Função para fechar o pop-up ao clicar no botão "Cancelar" de pagar dívida
cancelBtn2.onclick = function() {
    modal_pagarDiv.style.display = "none";
    overlay.style.display = "none";
}
// Função para fechar o pop-up ao clicar no botão "Cancelar" de aumentar limite
cancelBtn3.onclick = function() {
    modal_limite.style.display = "none";
    overlay.style.display = "none";
}

// Função para fechar o pop-up ao clicar no botão "Cancelar" de aumentar limite
cancelBtn4.onclick = function() {
  modal_mais.style.display = "none";
  overlay.style.display = "none";
}

// Fechar os modais ao clicar fora deles ou no overlay
window.onclick = function(event) {
    // Verifica se o clique foi fora do modal e fecha todos os modais
    if (event.target === overlay) {
        modal_cadastrar.style.display = "none";
        modal_pagarDiv.style.display = "none";
        modal_limite.style.display = "none";
        modal_mais.style.display = "none";
        overlay.style.display = "none";
    }
}

 

