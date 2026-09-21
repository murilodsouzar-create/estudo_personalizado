function num(valor) {

    return Number(
        String(valor)
            .replace(",", ".")
            .trim()
    );

}


function fmt(valor) {

    if (!Number.isFinite(valor)) {
        return "Resultado inválido";
    }

    return valor.toLocaleString("pt-BR", {
        maximumFractionDigits: 6
    });

}


function mostrarResultado(elemento, titulo, conteudo) {

    elemento.innerHTML = `
        <h3>${titulo}</h3>
        ${conteudo}
    `;

    elemento.classList.add("show");

}


function mostrarErro(elemento, mensagem) {

    elemento.innerHTML = `
        <h3>⚠️ Atenção</h3>
        <p>${mensagem}</p>
    `;

    elemento.classList.add("show");

}