/* ---------------------------------------------------------------
-----Funcion de Tabuladores*/
   function mostrarOcultar(event) {
     var tabSeleccionado = event.target.dataset.tabSeleccionado;
     var overflow = document.getElementById("overviewTab");
     var students = document.getElementById("studentsTab");
     var teachers = document.getElementById("teachersTab");
     if(tabSeleccionado === "tabOverview"){
      console.log("overflow");
      students.style.display = "none";
      teachers.style.display = "none";
      //muestra el tab
      overflow.style.display = "block";

     }else if (tabSeleccionado === "tabStudents") {
    console.log("studen");
     teachers.style.display = "none";
     overflow.style.display = "none";
     //muestra la tab
     students.style.display = "block";

     }else if (tabSeleccionado === "tabTeachers") {
    console.log("tecaher");
     students.style.display = "none";
     overflow.style.display = "none";
     //muestra la tab
     teachers.style.display = "block";
     }

   }
     var cargarPagina = function() {
       var overflow = document.getElementById("overviewTab");
       var students = document.getElementById("studentsTab");
       var teachers = document.getElementById("teachersTab");
       overflow.style.display = "none";
       students.style.display = "none";
       teachers.style.display = "none";

       var elementosTab = document.getElementsByClassName("tab");
       for (var i = 0; i < elementosTab.length; i++) {
         elementosTab[i].addEventListener("click",mostrarOcultar);
       }
     }

   cargarPagina();
