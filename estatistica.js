const numbersInput = document.getElementById("numbers");
const calculateButton = document.getElementById("calculate");
const result = document.getElementById("result");

calculateButton.addEventListener("click", () => {

    const numbers = numbersInput.value
        .split(",")
        .map(num)
        .filter(Number.isFinite);

    if (numbers.length === 0) {

        mostrarErro(
            result,
            "Digite pelo menos um número."
        );

        return;
    }


    // MÉDIA

    const soma = numbers.reduce(
        (acc, valor) => acc + valor,
        0
    );

    const media = soma / numbers.length;


    // ORDENAR

    const ordenados = [...numbers].sort(
        (a, b) => a - b
    );


    // MEDIANA

    let mediana;

    const meio = Math.floor(
        ordenados.length / 2
    );

    if (ordenados.length % 2 === 0) {

        mediana =
            (ordenados[meio - 1] +
             ordenados[meio]) / 2;

    } else {

        mediana = ordenados[meio];

    }


    // MODA

    const frequencias = {};

    numbers.forEach(numero => {

        frequencias[numero] =
            (frequencias[numero] || 0) + 1;

    });


    const maiorFrequencia =
        Math.max(...Object.values(frequencias));


    const modas = Object.keys(frequencias)
        .filter(
            numero =>
                frequencias[numero] === maiorFrequencia
        );


    let moda = "Não existe moda";

    if (maiorFrequencia > 1) {

        moda = modas.join(", ");

    }


    // VARIÂNCIA

    const somaQuadrados =
        numbers.reduce(
            (acc, valor) =>
                acc + Math.pow(valor - media, 2),
            0
        );

    const variancia =
        somaQuadrados / numbers.length;


    // DESVIO PADRÃO

    const desvio =
        Math.sqrt(variancia);


    mostrarResultado(
        result,
        "Resultado",
        `
        <p><strong>Média:</strong> ${fmt(media)}</p>

        <p><strong>Mediana:</strong> ${fmt(mediana)}</p>

        <p><strong>Moda:</strong> ${moda}</p>

        <p><strong>Variância:</strong> ${fmt(variancia)}</p>

        <p><strong>Desvio padrão:</strong> ${fmt(desvio)}</p>

        <div class="steps">

            <p>
                <strong>Passo 1:</strong>
                Soma = ${fmt(soma)}
            </p>

            <p>
                <strong>Passo 2:</strong>
                Quantidade de números = ${numbers.length}
            </p>

            <p>
                <strong>Passo 3:</strong>
                Média = ${fmt(soma)} ÷ ${numbers.length}
                = ${fmt(media)}
            </p>

            <p>
                <strong>Passo 4:</strong>
                Variância = ${fmt(variancia)}
            </p>

            <p>
                <strong>Passo 5:</strong>
                √${fmt(variancia)}
                = ${fmt(desvio)}
            </p>

        </div>
        `
    );

});