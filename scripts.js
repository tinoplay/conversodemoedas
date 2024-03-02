const convertButton = document.querySelector(".convert-button")
const valorDinheiro = document.querySelector(".select1").value


function convertValores() {
    const inputValor = document.querySelector(".input-valor").value
    const valorReal = document.querySelector(".real-brasil")
    const valorDolar = document.querySelector(".dolar-convert")

    

    const dolarDia = 5.2
    const euroDia = 6.2
    

   
  
  
   if (valorDinheiro.value == "dolar"){
    valorDolar.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    
    }).format(inputValor/dolarDia)

   }
   
   if(valorDinheiro == "euro"){
    valorDolar.innerHTML =  new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
   }).format(inputValor/euroDia)
  
   
   valorReal.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL"    

}).format(inputValor)



  
   }

}

convertButton.addEventListener("click", convertValores)















