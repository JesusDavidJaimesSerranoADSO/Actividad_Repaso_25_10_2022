addEventListener("DOMContentLoaded", (e)=>{
    let btnSave = document.querySelector(`input[type="submit"]`)
    let numero = document.querySelector(`input[name="numero"`)
    
    btnSave.addEventListener("click", (e)=>{
        let contador = 0
        let mostrar = []
        e.preventDefault();
        for(let divisor = 1; divisor < numero.value; divisor++){
            let resto = numero.value % divisor
            if ( resto == 0){
                mostrar.push(divisor) 
                contador += divisor 

            }
        } 
        if (contador == numero.value ){
            var texto = "el numero es perfecto"
        }
        else{
            var texto = "el numero no es perfecto"
        }

        let myTabla = document.querySelector("tbody");
        myTabla.insertAdjacentHTML("beforeend",`
            <tr>
                <th>${mostrar}</th>
                <th>${contador}</th>
                <th>${texto}</th>
            </tr>
            `
        )
    })                     
})