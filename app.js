function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Verifica se a seção foi encontrada
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Se o campoPesquisa for uma string 
    if(!campoPesquisa){

        alert("Nada foi encontrado. favor digite algo para procurar sobre o esporte que deseja saber");
        return;
    }

    campoPesquisa = campoPesquisa.trim(); // Remove espaços em branco
    campoPesquisa = campoPesquisa.replace(/[^\w\s]/gi, ''); // Remove caracteres não alfanuméricos
    campoPesquisa = campoPesquisa.replace(/\s+/g, ' '); // Normaliza espaços

    if (!campoPesquisa) {
        alert("Por favor, digite um termo de pesquisa válido.");
        return;
    }
    
    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let Título = "";
    let descricao = "";
    let tags = "";
    let link = "";
   
  
    // Itera sobre os dados da pesquisa
    for (let dado of dados) {
        Título = dado.Título.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        link = dado.link.toLowerCase();
      
        // se titulo inclues campoPesquisa
        if (Título.includes(campoPesquisa) || descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)|| link.includes(campoPesquisa)) {
            // Cria um novo elemento div para cada resultado
            resultados += `
            <div class="item-resultado" id="item-resultado">
                <h2>
                <!--Link para o resultado-->
                <a href="#" target="_blank" class="titulo-resultado"> ${dado.Título} </a> 
                </h2>
                <!--Descrição do resultado-->
                <p class="descricao-meta"> ${dado.descricao} </p>
                <!--Link para o resultado-->
                <a href=${dado.link} target="_blank">Saiba mais</a> 
            </div>
            `;

        }

    }

    if (!resultados) {
        alert("Nenhum resultado encontrado em nossa base de dados");
        //    resultados = "<p> Nenhum resultado encontrado em nossa base de dados </p>";
    }
  
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
  }

