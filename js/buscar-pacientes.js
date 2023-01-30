var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", () => {
    console.log("Buscando Pacientes...");
    
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");
   
    xhr.addEventListener("load", () => {
        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta); 

            pacientes.forEach((paciente) => {
                adicionaPacienteNaTabela(paciente);
            });
            
        } else {
            console.log( xhr.status);
            console.log( xhr.responseText);
            var erroAjax = document.querySelector("#erro-ajax")
            erroAjax.classList.remove("invisivel");
        }
        
    });

    xhr.send();

});
