//revisar que el documento este cargado (html, css), entonces, ejecutar las funciones de javascript

document.addEventListener('DOMContentLoaded', function(){

    eventListeners();
    darkMode();


});

function darkMode(){

    const prefiereDarkMode = window.matchMedia('(prefers-color-schema: dark)');

    /**
     * si ya esta en dark mode la computadora, entonces así se vera la pagina cuando ingrese
     * sino, sera normal 
    **/
    if(prefiereDarkMode.matches){
        document.body.classList.add('dark-mode');
    }else{
        document.body.classList.remove('dark-mode');
    }

    /**
     * agregamos un adevenlistener para que este pendiete si cambia las preferencias el sistema
     * automaticamente, como whatsapp, o si lo hace manualmente 
    **/
    prefiereDarkMode.addEventListener('change',function(){
        if(prefiereDarkMode.matches){
            document.body.classList.add('dark-mode');
        }else{
            document.body.classList.remove('dark-mode');
        }

    });

    // boton para cambiar darkmode
    const botonDarkMode = document.querySelector('.dark-mode-boton');

    botonDarkMode.addEventListener('click', function(){
        document.body.classList.toggle('dark-mode');

    });
}

function eventListeners(){
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click',navegacionResponsive);
}

function navegacionResponsive(){
    const navegacion = document.querySelector('.navegacion');

    // toogle, si tiene la clase la quita y sino la pone. Buena opcion
    navegacion.classList.toggle('mostrar');
    
    /*   otra forma
    if (navegacion.classList.contains('mostrar')){
        navegacion.classList.remove('mostrar');
        
    }else{
        navegacion.classList.add('mostrar');
    }
    */
}