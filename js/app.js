/*
 * Funcionalidad de tu producto
 */
// Puedes hacer uso de la base de datos a través de la variable `data`
//console.log(data);

/*var arraySede = Object.keys(data);
var numSede = arraySede.length;
var nombreSede = 0;


console.log(numSede);


for (var i = 0; i <= numSede; i++) {
  var numeroGeneraciones = Object.keys(data[arraySede[i]]);
  console.log(numeroGeneraciones);
  for (var j = 0; j <= numeroGeneraciones.length; j++) {
    var totalAlumnas = data[numSede[i]][numeroGeneraciones[j]]["students"].length;

    }
  }*/









/*---- Función para seleccionar sede y promoción, y generar datos------*/
var select = document.getElementById("filtro-sedes");
select.addEventListener("change", seleccionarOpcion);
function seleccionarOpcion() {
  var sede = select.value;
  var generacion = select.options[select.selectedIndex].dataset.generacion;
  var generacionEstudiantes = data[sede][generacion]["students"].length;
  var arrayEstudiantes = data[sede][generacion]["students"];
  var calificacionesNps = data[sede][generacion]["ratings"]; //arrayRartings


  console.log(generacionEstudiantes);
  console.log(arrayEstudiantes);
  console.log(calificacionesNps);



/*----------------------- CODIGO PARA LA SECCION DEL OVERVIEW ------------------------*/


//Código para acceder a las alumnas activas por sede y generacióne specificas

var counterActivo = 0;
var counterInactivo = 0;

for (var i = 0; i< generacionEstudiantes; i++){
  console.log(generacionEstudiantes.length);
  console.log (data[sede][generacion].students[i].active);
  var activeStudents = data[sede][generacion].students[i].active;
  console.log(activeStudents);
  if(activeStudents === true){
    counterActivo ++; //contador Activo
  } else {
    counterInactivo ++; //contador Inactivo
  }
}

console.log("El valor es de activas: "+ counterActivo);
console.log("El valor es de inactivas: "+ counterInactivo);

/*---- Estudiantes que desertaron (Porcentaje)------*/

var inactivoPorcentaje = ((counterInactivo / generacionEstudiantes) * 100).toFixed(1) + '%';
console.log(inactivoPorcentaje);

// Total de estudiantes en su contenedor
 var enrollmentStudents = document.getElementById("caja-enrollment");
 enrollmentStudents.textContent = generacionEstudiantes;

 console.log(enrollmentStudents);

 // Porcentaje de estudiantes que desertaron en su contenedor
   var dropoutPorcentaje = document.getElementById("dropout-porcentaje");
   dropoutPorcentaje.textContent = inactivoPorcentaje;


/*------- ACHIEVEMENT (Meta de Estudiantes Tectico y HSE)----------------*/
var  metaStudent= 0;

var totalActTech =0;
var totalActHSE =0;

for (var i = 0; i < generacionEstudiantes; i++) {
 var scoreTech = 0;
 var scoreHSE = 0;
 var activeStudents = data[sede][generacion].students[i].active;
   if(activeStudents === true){
 console.log(activeStudents);

   for (var j = 0; j < arrayEstudiantes[i]["sprints"].length; j++) {
     scoreTech += arrayEstudiantes[i]["sprints"][j]["score"]["tech"];
     scoreHSE += arrayEstudiantes[i]["sprints"][j]["score"]["hse"];
     console.log("puntaje HSE " + scoreHSE);
     console.log("puntaje TE " + scoreTech);
   }

   var promedioTech = scoreTech / arrayEstudiantes[i]["sprints"].length;
 var promedioHSE = scoreHSE / arrayEstudiantes[i]["sprints"].length;
 console.log("promT " + promedioTech);
 console.log("promHSE "+ promedioHSE);

 if (promedioTech >= 1260 && promedioHSE >= 840) {
   metaStudent++;
 }
 }
}
    console.log("El valor es de Tech: "+ totalActTech);
    console.log("El valor es de HSE: "+ totalActHSE);

  var cajaAchievement = document.getElementById("caja-achievement");
  cajaAchievement.textContent = metaStudent;

  var percentajeTotal = document.getElementById("achievement-porcentaje");
   percentajeTotal.textContent = ((metaStudent / generacionEstudiantes) * 100).toFixed(1);



 /*------- El Net Promoter Score (NPS) promedio de los sprints cursados----------------*/

    var promptersNps = document.getElementById("promoters");
    var passiveNps = document.getElementById("passive");
    var detractorNps = document.getElementById("detractor");
    var nps = document.getElementById("acumulativo-nps");
    console.log(nps);


    var promoters = 0 / generacionEstudiantes * 100;
    var passives = 0 / generacionEstudiantes * 100;
    var detractors = 0 / generacionEstudiantes * 100;
    for (i = 0; i < calificacionesNps.length; i++) {
      promoters += (calificacionesNps[i]["nps"]["promoters"]) / calificacionesNps.length;
      passives += (calificacionesNps[i]["nps"]["passive"]) / calificacionesNps.length;
      detractors += (calificacionesNps[i]["nps"]["detractors"]) / calificacionesNps.length;

      promptersNps.textContent = promoters.toFixed(1) + "% Promoters";
      passiveNps.textContent = passives.toFixed(1) + "% Passives";
      detractorNps.textContent = detractors.toFixed(1) + "% Detractors";

      nps.textContent = (promoters - detractors).toFixed(1);
    }
