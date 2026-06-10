// Função para o botão "Saber Mais" rolar a página até a seção sobre
document.getElementById('btnSaibaMais').addEventListener('click', function() {
    document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' });
});

// Função para mostrar dicas dinâmicas quando o usuário clica nos cards de benefícios
function mostrarDica(mensagem) {
    const caixa = document.getElementById('caixaDica');
    
    // Remove a classe que esconde a caixa
    caixa.classList.remove('escondido');
    
    // Insere o texto da dica dentro da caixa
    caixa.innerHTML = `<strong>Dica Sustentável:</strong> ${mensagem}`;
}