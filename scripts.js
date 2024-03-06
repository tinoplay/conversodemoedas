const convertButton = document.querySelector(".convert-button")
const valorDinheiro = document.querySelector(".select1")


function convertValores() {
    const inputValor = document.querySelector(".input-valor").value
    const valorReal = document.querySelector(".real-brasil")
    const valorDolar = document.querySelector(".dolar-convert")



    const dolarDia = 5.2
    const euroDia = 6.2
    const libraDia = 6.3



    valorReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValor)

    if (valorDinheiro.value == "Dolar") {
        valorDolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"

        }).format(inputValor / dolarDia)

    }

    if (valorDinheiro.value == "Euro") {
        valorDolar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor / euroDia)


    }
    if (valorDinheiro.value == "Libra") {
        valorDolar.innerHTML = new Intl.NumberFormat("de-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor / libraDia)


    }

}

    function moedaConverteda() {
        const trocaMoedas = document.getElementById("troca-nome")
        const trocaImg = document.querySelector(".troca-img")


        if (valorDinheiro.value == "Dolar") {
            trocaMoedas.innerHTML = "Dolar"
            trocaImg.src = "./assets/dolar.png"
        }

        if (valorDinheiro.value == "Euro") {
            trocaMoedas.innerHTML = "Euro"
            trocaImg.src = "./assets/euro.png"
        }

        if (valorDinheiro.value == "Libra") {
            trocaMoedas.innerHTML = "Libra"
            trocaImg.src = "./assets/libra.png"
        }

        convertValores()
    }

    




valorDinheiro.addEventListener("change", moedaConverteda)
convertButton.addEventListener("click", convertValores)















