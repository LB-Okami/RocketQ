// Copiar o código da sala
function copy() {
    console.log('cheguei')
    // Pega o texto
    const copyText = document.getElementById('id-inv')
    
    // Seleciona o texto
    copyText.select()
    copyText.setSelectionRange(0, 99999) // Para dispositivos móveis

    // Copia o texto
    document.execCommand("copy")
}