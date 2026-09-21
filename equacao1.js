const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");

const calculate = document.getElementById("calculate");
const result = document.getElementById("result");


calculate.addEventListener("click", () => {

    const A = num(a.value);
    const B = num(b.value);
    const C = num(c.value);


    if (
        !Number.isFinite(A) ||
        !Number.isFinite(B) ||
        !Number.isFinite(C)
    ) {

        mostrarErro(
            result,
            "Preencha todos os campos."
        );

        return;
    }


    if (A === 0) {

        mostrarErro(
            result,
            "O valor de A não pode ser zero."
        );

        return;
    }


    const x =
        (C - B) / A;


    mostrarResultado(
        result,
        "Resultado",
        `
        <p>
            <strong>x = ${fmt(x)}</strong>
        </p>

        <div class="steps">

            <p>
                Equação:
                ${A}x + ${B} = ${C}
            </p>

            <p>
                ${A}x = ${C} - ${B}
            </p>

            <p>
                ${A}x = ${C - B}
            </p>

            <p>
                x = (${C - B}) ÷ ${A}
            </p>

            <p>
                x = ${fmt(x)}
            </p>

        </div>
        `
    );

});

