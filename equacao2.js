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
            "A precisa ser diferente de zero."
        );

        return;
    }


    const delta =
        Math.pow(B, 2) -
        4 * A * C;


    if (delta < 0) {

        mostrarResultado(
            result,
            "Resultado",
            `
            <p>
                Δ = ${fmt(delta)}
            </p>

            <p>
                Como Δ < 0, a equação
                não possui raízes reais.
            </p>

            <div class="steps">

                <p>
                    Δ = b² - 4ac
                </p>

                <p>
                    Δ = ${B}² - 4 × ${A} × ${C}
                </p>

                <p>
                    Δ = ${fmt(delta)}
                </p>

            </div>
            `
        );

        return;
    }


    const raizDelta =
        Math.sqrt(delta);


    const x1 =
        (-B + raizDelta) /
        (2 * A);


    const x2 =
        (-B - raizDelta) /
        (2 * A);


    mostrarResultado(
        result,
        "Resultado",
        `
        <p>
            <strong>Δ = ${fmt(delta)}</strong>
        </p>

        <p>
            x₁ =
            <strong>${fmt(x1)}</strong>
        </p>

        <p>
            x₂ =
            <strong>${fmt(x2)}</strong>
        </p>

        <div class="steps">

            <p>
                Δ = b² - 4ac
            </p>

            <p>
                Δ = ${B}² - 4 × ${A} × ${C}
            </p>

            <p>
                Δ = ${fmt(delta)}
            </p>

            <p>
                x = (-b ± √Δ) / 2a
            </p>

            <p>
                x₁ = ${fmt(x1)}
            </p>

            <p>
                x₂ = ${fmt(x2)}
            </p>

        </div>
        `
    );

});