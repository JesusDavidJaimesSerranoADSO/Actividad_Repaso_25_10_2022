addEventListener("DOMContentLoaded", (e)=>{
    let btnSave = document.querySelector(`input[type="submit"]`)
    let contador = 0
        btnSave.addEventListener("click", (e)=>{
            e.preventDefault();
            if (contador < 4){
                let myTabla = document.querySelector("tbody");
                let name = document.querySelector(`input[name="nombre"`)
                let horas = document.querySelector(`input[name="horas"]`)
                let total = horas.value * 5208.33
                myTabla.insertAdjacentHTML("beforeend",`
                    <tr>
                    <th>${name.value}</th>
                    <th>${horas.value}</th>
                    <th>${5208.33}</th>
                    <th>${total}</th>
                    <th>${contador + 1}</th>
                    </tr>
                    `
                )
            contador++ 
            name.value= ""
            horas.value=""
            }
        })                     
})