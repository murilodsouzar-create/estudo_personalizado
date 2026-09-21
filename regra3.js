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
            "O valor A não pode ser zero."
        );

        return;
    }


    const x =
        (B * C) / A;


    mostrarResultado(
        result,
        "Resultado",
        `
        <p>
            <strong>X = ${fmt(x)}</strong>
        </p>

        <div class="steps">

            <p>
                A → B
            </p>

            <p>
                C → X
            </p>

            <p>
                X = B × C ÷ A
            </p>

            <p>
                X = ${B} × ${C} ÷ ${A}
            </p>

            <p>
                X = ${fmt(x)}
            </p>

        </div>
        `
    );

});