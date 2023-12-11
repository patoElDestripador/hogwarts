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
            
        }
        this.informacionCasa = {
            nombre : "",
            estudiantes : 0,
            puntos : 0
        }
        this.generarVideoIntro()
        //dependiendo de la casa saldria el personaje
    }


    //crud de juego

    guardarEstudiante(){
        this.estudiante = {
            nombre: document.getElementById("idNombre").value,
            edad:document.getElementById("idFechaNacimiento").value,
            linaje:this.validarLinaje(),
            casa : "",
            cualidades: [],
            clases :[],
            animalPatronus :"", 
            
        }
    }
    validarLinaje(){
        let linajepadre = document.getElementById("idFamliaPadre").value;
        let linajemadre = document.getElementById("idFamliaMadre").value;
        //1 = Mestizo  
        //2 = Muggle
        //3 = Sangre pura 

        switch (linajemadre + linajepadre) {
            case "22":
                return "muggle"
                break;
            case "33":
                return "sangre pura"
                break;
            default:
                return "meztizo"
                break;
        }
    }
    seleccionarCasa(){
        datosCualidades
    }
    GenerarAnimalPatronus(){

    }

    //Front Generadores
    generarTest(){
        this.frontContenedor.innerHTML =  `


        <div class="col-12 border border-white text-center">
            Selecciona hasta 5 atributos que te identifiquen
        </div>
        <div class="col-12 border border-white" >
        <div class="ContendorCheck text-light mt-5">
            <div class="form-check row" id="conetendorCualidades">
            </div>
        </div>
        </div>`;
    console.log("datos",datosCualidades.cualidades)
    for (let index = 0; index < datosCualidades.cualidades.length; index++) {
        document.getElementById("conetendorCualidades").innerHTML += `
        
        <input type="checkbox" class="btn-check" id="btn-check-outlined${index}" autocomplete="off">
        <label class="btn btn-outline-light" for="btn-check-outlined${index}">${datosCualidades.cualidades[index]}</label>
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
        formualario.classList = "z-3 position-absolute w-100"
        formualario.innerHTML = `        
        <div class="d-flex justify-content-center align-items-center min-vh-100">
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
                <button type="button" id="btnSubmit" class="btn btn-secondary" type="button" onClick="hogwarts.guardarEstudiante()">Enviar</button>
            </div>
        </form>
        </div>`;
        document.getElementById("contenedor").appendChild(formualario);
        //document.getElementById("contenedor").remevoChild(formualario);
    }

}

let hogwarts = new Hogwarts();
