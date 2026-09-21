const figure = document.getElementById("figure");

const value1 = document.getElementById("value1");
const value2 = document.getElementById("value2");

const calculate = document.getElementById("calculate");
const result = document.getElementById("result");


calculate.addEventListener("click", () => {

    const v1 = num(value1.value);
    const v2 = num(value2.value);


    if (!Number.isFinite(v1)) {

        mostrarErro(
            result,
            "Digite o primeiro valor."
        );

        return;
    }


    let html = "";


    switch (figure.value) {


        case "square": {

            const area = v1 * v1;
            const perimeter = 4 * v1;

            html = `
                <p>
                    Área:
                    <strong>${fmt(area)}</strong>
                </p>

                <p>
                    Perímetro:
                    <strong>${fmt(perimeter)}</strong>
                </p>

                <div class="steps">

                    <p>
                        Área = lado²
                    </p>

                    <p>
                        Área = ${v1}²
                        = ${fmt(area)}
                    </p>

                    <p>
                        Perímetro = 4 × ${v1}
                        = ${fmt(perimeter)}
                    </p>

                </div>
            `;

            break;
        }


        case "rectangle": {

            if (!Number.isFinite(v2)) {

                mostrarErro(
                    result,
                    "Digite a largura."
                );

                return;
            }

            const area = v1 * v2;
            const perimeter = 2 * (v1 + v2);

            html = `
                <p>
                    Área:
                    <strong>${fmt(area)}</strong>
                </p>

                <p>
                    Perímetro:
                    <strong>${fmt(perimeter)}</strong>
                </p>
            `;

            break;
        }


        case "triangle": {

            if (!Number.isFinite(v2)) {

                mostrarErro(
                    result,
                    "Digite a altura."
                );

                return;
            }

            const area =
                (v1 * v2) / 2;

            html = `
                <p>
                    Área:
                    <strong>${fmt(area)}</strong>
                </p>

                <div class="steps">

                    <p>
                        Área = (base × altura) ÷ 2
                    </p>

                    <p>
                        Área =
                        (${v1} × ${v2}) ÷ 2
                    </p>

                    <p>
                        Área = ${fmt(area)}
                    </p>

                </div>
            `;

            break;
        }


        case "circle": {

            const area =
                Math.PI * v1 * v1;

            const circumference =
                2 * Math.PI * v1;

            html = `
                <p>
                    Área:
                    <strong>${fmt(area)}</strong>
                </p>

                <p>
                    Circunferência:
                    <strong>${fmt(circumference)}</strong>
                </p>
            `;

            break;
        }


        case "cube": {

            const area =
                6 * Math.pow(v1, 2);

            const volume =
                Math.pow(v1, 3);

            html = `
                <p>
                    Área total:
                    <strong>${fmt(area)}</strong>
                </p>

                <p>
                    Volume:
                    <strong>${fmt(volume)}</strong>
                </p>
            `;

            break;
        }


        case "cylinder": {

            if (!Number.isFinite(v2)) {

                mostrarErro(
                    result,
                    "Digite a altura."
                );

                return;
            }

            const area =
                2 * Math.PI * v1 * (v1 + v2);

            const volume =
                Math.PI *
                Math.pow(v1, 2) *
                v2;

            html = `
                <p>
                    Área total:
                    <strong>${fmt(area)}</strong>
                </p>

                <p>
                    Volume:
                    <strong>${fmt(volume)}</strong>
                </p>
            `;

            break;
        }

    }


    mostrarResultado(
        result,
        "Resultado",
        html
    );

});