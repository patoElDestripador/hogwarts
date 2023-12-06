class Hogwarts {

    constructor(){
        this.alumnos = [];
        this.frontContenedor = document.getElementById("contenedor");
    }

    



    //Front Generadores
    generarTest(){
        this.frontContenedor.innerHTML =  `
        <div class="row text-light mt-5">
        <div class="col-12 border border-white text-center">
            Selecciona hasta 5 atributos que te identifiquen
        </div>
        <div class="col-12 border border-white" >
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

}

let hogwarts = new Hogwarts();

hogwarts.generarTest()



