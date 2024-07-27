document.addEventListener('DOMContentLoaded', (event) => {
    const inputTexto = document.getElementById('input-texto');
    const resultadoTexto = document.querySelector('.caixa__texto__resultado');
    const botaoCriptografar = document.querySelector('.botao__criptografar');
    const botaoDescriptografar = document.querySelector('.botao__descriptografar');
    const botaoCopiar = document.querySelector('.botao__copiar');
    const heda = document.getElementById('heda');
    const textoResultadoDiv = document.querySelector('.texto-resultado');
    const textoResultadoH1 = document.querySelector('.texto-resultado h1');
    const textoResultadoP = document.querySelector('.texto-resultado p');

    // Inicialmente esconde o botão copiar
    botaoCopiar.classList.add('hidden');

    // Limpa o texto quando carrega a página
    inputTexto.value = '';
    resultadoTexto.value = '';

    function criptografar(texto) {
        return texto
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    }

    function descriptografar(texto) {
        return texto
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }

    function handleCriptografar() {
        const texto = inputTexto.value;
        const textoCriptografado = criptografar(texto);
        resultadoTexto.value = textoCriptografado;
        inputTexto.value = textoCriptografado;
        heda.style.display = 'none';
        textoResultadoH1.style.display = 'none';
        textoResultadoP.style.display = 'none';
        textoResultadoDiv.style.display = 'block';
        botaoCopiar.classList.remove('hidden'); // Mostra o botão copiar
    }

    function handleDescriptografar() {
        const texto = inputTexto.value;
        const textoDescriptografado = descriptografar(texto);
        resultadoTexto.value = textoDescriptografado;
        inputTexto.value = textoDescriptografado;
        heda.style.display = 'none';
        textoResultadoH1.style.display = 'none';
        textoResultadoP.style.display = 'none';
        textoResultadoDiv.style.display = 'block';
        botaoCopiar.classList.remove('hidden'); // Mostra o botão copiar
    }

    function handleCopiar() {
        resultadoTexto.select();
        document.execCommand('copy');
    }

    inputTexto.addEventListener('input', () => {
        heda.style.display = 'block';
        textoResultadoH1.textContent = 'Muito bem';
        textoResultadoP.textContent = 'Vamos em frente';
        textoResultadoH1.style.display = 'block';
        textoResultadoP.style.display = 'block';
        textoResultadoDiv.style.display = 'none';
        botaoCopiar.classList.add('hidden'); // Esconde o botão copiar enquanto está digitando
    });

    botaoCriptografar.addEventListener('click', handleCriptografar);
    botaoDescriptografar.addEventListener('click', handleDescriptografar);
    botaoCopiar.addEventListener('click', handleCopiar);
});
