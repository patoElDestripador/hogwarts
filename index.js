class Hogwarts {

    constructor(){
        this.alumnos = [];
        this.frontContenedor = document.getElementById("contenedor");
        this.estudiante = {
            nombre: "",
            edad:"",
            linaje:"",
            casa :"",
            cualidades: [],
            clases :[],
            animalPatronus :"", 
            genero: ""
        }
        this.informacionCasa = {
            nombre : "",
            estudiantes : 0,
            puntos : 0
        }
        this.contadorTestDePersonalidad = 0;
        this.cualidadesTestDePersonalidad = [];
        this.cualidadesTestDePersonalidadAux = [];
        //this.generarVideoIntro()
        //dependiendo de la casa saldria el personaje
    }




    guardarEstudiante(){
        this.estudiante = {
            nombre: document.getElementById("idNombre").value,
            edad:document.getElementById("idFechaNacimiento").value,
            linaje:this.generarLinaje(),
            casa : "",
            cualidades: [],
            clases :[],
            animalPatronus :"", 
            genero: document.getElementById("idGenero").value
        }
    }
    generarLinaje(){
        let linajepadre = document.getElementById("idFamliaPadre").value;
        let linajemadre = document.getElementById("idFamliaMadre").value;
        switch (linajemadre + linajepadre) {
            case "22":
                return "muggle"
            case "33":
                return "sangre pura"
            default:
                return "meztizo"
        }
    }
    seleccionarCasa(){

        generarTestPersonalidad()
        
    }

    validarTestDePersonalidad(valor){
        let seleccionBoton = document.getElementById(`btn-check-outlined${valor}`).checked;
        let seleccionCualidad = datosCualidades.cualidades[valor];
        let mensajeCualidad = document.getElementById("idTextoBloqueoCualidades")
        let botonEnvioTest = document.getElementById("botonEnvioTest")
        if(seleccionBoton){
            this.cualidadesTestDePersonalidadAux.push(seleccionCualidad)
        }
        
        if(this.cualidadesTestDePersonalidad.length <= 8 && seleccionBoton){
            this.cualidadesTestDePersonalidad.push(seleccionCualidad)
        }else if(!seleccionBoton){
            let posicion = this.cualidadesTestDePersonalidad.findIndex(e=> e === seleccionCualidad)
            let posicion2 = this.cualidadesTestDePersonalidadAux.findIndex(e=> e === seleccionCualidad)
            if( posicion != -1){
                this.cualidadesTestDePersonalidad.splice(posicion,1)
            }
            if( posicion2 != -1){
                this.cualidadesTestDePersonalidadAux.splice(posicion,1)
            }
        }
        if(this.cualidadesTestDePersonalidadAux.length >= 10){
            console.log(botonEnvioTest.setAttribute("disabled",""))
            mensajeCualidad.style.display = 'block';
        }
        if(this.cualidadesTestDePersonalidadAux.length <= 9 ){
            mensajeCualidad.style.display = 'none';
        }
        if(this.cualidadesTestDePersonalidad.length == 9){
            botonEnvioTest.removeAttribute("disabled");
        }
    }


    generarAnimalPatronus(){
        //document.getElementById("contenedor").remevoChild(formualario);
    }

    //Front Generadores
    generarTestPersonalidad(){
        let test = document.createElement("div");
        test.classList = "z-3 position-absolute w-100 mb-3 row"
        test.innerHTML = `
        <div class="col-6 offset-3 border border-white text-center text-light mt-5 p-3" id="textoArriba">
                <h1>Selecciona 9 atributos que te identifiquen</h1>
                <h3 class="text-danger text-center" style="display: none;" id="idTextoBloqueoCualidades">Solo puedes seleccionar 9 atributos</h3>
                
        </div>
            <div class="col-6 offset-3 border border-white p-3" >
                <div class="ContendorCheck text-light mt-5">
                    <div class="form-check" >
                        <div class="row" id="conetendorCualidades">
                        </div>
                    </div>
                </div>
                <div class=" col-6 offset-3 d-grid ">
                <button id="botonEnvioTest" class="btn btn btn-outline-light" type="button" onClick="hogwarts.validarTestDePersonalidad()" disabled>enviar</button>
                </div>
            </div>

        </div>`;
        document.getElementById("contenedor").appendChild(test);
        for (let index = 0; index < datosCualidades.cualidades.length; index++) {
            document.getElementById("conetendorCualidades").innerHTML += `
            <div class="mb-4 col-2 d-grid gap-2">
                <input type="checkbox" class="btn-check" onChange="hogwarts.validarTestDePersonalidad(${index});" id="btn-check-outlined${index}" autocomplete="off">
                <label class="btn btn-outline-light" for="btn-check-outlined${index}">${datosCualidades.cualidades[index]}</label>
            </div>
            `
        }
    }
    


    generarVideoIntro(){
        var musika = document.getElementById('musika');
        var video1 = document.getElementById('video1');
        var video2 = document.getElementById('video2');
        // Añade algo al final de video1
        video1.addEventListener('ended', function() {
            video1.style.display = 'none';
            video2.style.display = 'block';
            video2.classList += 'z-0 position-absolute';
            video2.play();
            hogwarts.generarFormulario();
            //cuando llene fomulario se oculta video2 
        });
        document.body.addEventListener('click', function() {
            musika.play();
            video1.play();
        });
    }

    generarFormulario(){
        let formualario = document.createElement("div");
        formualario.classList = "z-3 position-absolute w-100 d-flex justify-content-center align-items-center min-vh-100"
        formualario.setAttribute("id","idDivFormulario")
        formualario.innerHTML = `        
        <form class="w-50 ms-5 efectoDifuminado p-4 rounded">
            <div class="mb-3 text-center text-light">
                <h1>Formulario inscripción</h1>
            </div>
            <div class="mb-3">
                <label for="idNombre" class="form-label text-light">Nombre</label>
                <input type="text" class="form-control efectoDifuminado text-light" id="idNombre">
            </div>
            <div class="mb-3">
                <label for="idFechaNacimiento" class="form-label text-light">Fecha nacimiento</label>
                <input type="date" class="form-control efectoDifuminado text-light" id="idFechaNacimiento">
            </div>
            <div class="mb-3">
            <label for="idGenero" class="form-label text-light">Genero</label>
                <select class="form-select text-light efectoDifuminado" id="idGenero" aria-label="Default select example">
                    <option selected>Seleccionar...</option>
                    <option value="1">Hombre</option>
                    <option value="2">Mujer</option>
                    <option value="3">Pato pura</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="idFamliaPadre" class="form-label text-light">Linaje familiar padre</label>
                <select class="form-select text-light efectoDifuminado" id="idFamliaPadre" aria-label="Default select example">
                    <option selected>Seleccionar...</option>
                    <option value="1">Mestizo</option>
                    <option value="2">Muggle</option>
                    <option value="3">Sangre pura</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="idFamliaMadre" class="form-label text-light">Linaje familiar madre</label>
                <select class="form-select text-light efectoDifuminado" id="idFamliaMadre" aria-label="Default select example">
                    <option selected>Seleccionar...</option>
                    <option value="1">Mestizo</option>
                    <option value="2">Muggle</option>
                    <option value="3">Sangre pura</option>
                </select>
            </div>
            <div class="d-grid gap-2">
                <button type="button" id="btnSubmit" class="btn btn btn-outline-light" type="button" onClick="hogwarts.guardarEstudiante()">Enviar</button>
            </div>
        </form>`;
        document.getElementById("contenedor").appendChild(formualario);
        
        this.guardarEstudiante();
        document.getElementById("contenedor").remevoChild(document.getElementById("idDivFormulario"));
        this.generarTestPersonalidad()
    }

}

let hogwarts = new Hogwarts();
hogwarts.generarTestPersonalidad()