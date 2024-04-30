// import { getData } from "../../cargaDatos.js";

let caratula = document.getElementById('caratula');
let area = document.getElementById('area');
let localidad = document.getElementById('localidad');

window.onload = async () => {
  const response = await fetch("http://localhost:3000/getAreas");
  if (!response.ok) {
    console.log("Error al cargar las areas");
  }
  const data_area = await response.json();
  cargarSelect(data_area, "area" )

  const response1 = await fetch("http://localhost:3000/getCaratulas");
  if (!response1.ok) {
    console.log("Error al cargar las areas");
  }
  const data_caratula = await response1.json();
  cargarSelect(data_caratula, "caratula")

  const response2 = await fetch("http://localhost:3000/getLocalidades");
  if (!response2.ok) {
    console.log("Error al cargar las areas");
  }
  const data_localidad = await response2.json();
  cargarSelect(data_localidad, "localidad")
}


const cargarSelect = (arr, idSelect) => {
  arr.forEach((element) => {
    let option = document.createElement('option');
    const localidad = document.createTextNode(`${element}`);
    option.value = element;
    option.appendChild(localidad);
    document.getElementById(idSelect).appendChild(option);
  });  
}

// let res = downloadListMun();
// res.then((data) => {
//   data.forEach((municipio) => {
//     let option = document.createElement('option');
//     const localidad = document.createTextNode(`${municipio}`);
//     option.value = municipio;
//     option.appendChild(localidad);
//     document.getElementById('localidad').appendChild(option);
//   });
// });