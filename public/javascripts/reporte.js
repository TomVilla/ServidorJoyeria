  
window.onload = () => {
  /*
    Realice un requerimiento asincrónico al URL "http://localhost:3001/clientes".
    Cargue el resultado en el elemento select#inputGroupSelect01
  */
    fetch("http://localhost:3001/clientes")
    .then(response => response.json())
    .then(data => {
      let grupo = document.getElementById("inputGroupSelect01")
      plantilla = ""
      for(i of data){
        let id = i["id"]
        let nombre = i["nombre"]
        plantilla +=  `<option selected value = ${id}>${nombre}</option>` 
    }
    grupo.innerHTML += plantilla
    });

  


 /*
  Reaccione al evento change del elemento select#inputGroupSelect01. (REFERENCIA: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
  Realice un requerimiento asincrónico al URL "http://localhost:3002/ordenes/:idCliente" con el identificador del cliente seleccionado.
  Cargue los resultados en el elemento table#ordenes_tablas.
 */

const selectElement = document.querySelector('#inputGroupSelect01');

selectElement.addEventListener('change', (event) => {
    const resultado = document.querySelector('#ordenes_tablas');
    const id = event.target.value
    console.log(id)
    let tabla = document.getElementById("#ordenes_tablas")
    plantilla = ""
    const url = "http://localhost:3002/facturas/cliente/"+id
    fetch(url)
    .then(response =>response.json())
    .then(data =>{
      console.log(data)
      for(i of data){
        let id = i["idFactura"]
        let fecha = i["fechaFactura"]
        let cod = i["codProducto"]
        let cant = i["cantidad"]
        let precioU = i["precioUnitario"]
        let precioP = i["precioParcial"]
        plantilla += `<tr>
                        <td>${id}</td>
                        <td>${fecha}</td>
                        <td>${cod}</td>
                        <td>${cant}</td>
                        <td>${precioU}</td>
                        <td>${precioP}</td>
                    </tr>`
      }
      resultado.innerHTML = plantilla
    })
});

 


};