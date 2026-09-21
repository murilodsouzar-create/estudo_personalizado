const a = document.getElementById("a");
const b = document.getElementById("b");

const calculate = document.getElementById("calculate");
const result = document.getElementById("result");


function mdc(a, b) {

    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {

        const resto = a % b;

        a = b;
        b = resto;

    }

    return a;

}


function mmc(a, b) {

    const divisor = mdc(a, b);

    return Math.abs(a * b) / divisor;

}


calculate.addEventListener("click", () => {

    const A = num(a.value);
    const B = num(b.value);


    if (
        !Number.isFinite(A) ||
        !Number.isFinite(B)
    ) {

        mostrarErro(
            result,
            "Digite os dois números."
        );

        return;
    }


    if (A === 0 || B === 0) {

        mostrarErro(
            result,
            "Os números precisam ser diferentes de zero."
        );

        return;
    }


    const resultadoMDC =
        mdc(A, B);


    const resultadoMMC =
        mmc(A, B);


    mostrarResultado(
        result,
        "Resultado",
        `
        <p>
            <strong>MDC = ${fmt(resultadoMDC)}</strong>
        </p>

        <p>
            <strong>MMC = ${fmt(resultadoMMC)}</strong>
        </p>

        <div class="steps">

            <p>
                Números:
                ${A} e ${B}
            </p>

            <p>
                MDC(${A}, ${B})
                = ${resultadoMDC}
            </p>

            <p>
                MMC =
                |${A} × ${B}| ÷ MDC
            </p>

            <p>
                MMC =
                ${Math.abs(A * B)}
                ÷
                ${resultadoMDC}
            </p>

            <p>
                MMC =
                ${resultadoMMC}
            </p>

        </div>
        `
    );

}); 