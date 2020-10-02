
/* FUNCION PARA LA CARGA DE PERSONAJES */




       
  /* FUNCION "choiceCharacter" SELECIONA PERSONAJES POR ESPECIES */
  
    export const choiceCharacter = (data) =>{
    const fragment = document.createDocumentFragment(),
    $cardsSearch = document.getElementById("cardsSearch"),
    $input = document.getElementById("search"),
    $cards = document.getElementById("cards");
    const $op =  document.getElementById("op");
    const $ver = document.getElementById("ver");
        for(let d of data){   
          const $article = document.createElement("ARTICLE"),
           $figure = document.createElement("FIGURE"),
           $images = document.createElement("IMG"),
           $figcaption = document.createElement("FIGCAPTION"),
           $descripcion = document.createElement("P");
           $article.setAttribute("class", "item-article");
           $figure.setAttribute("class", "item-figure");
           $descripcion.setAttribute("class", "item_description");
           $images.setAttribute("class", "item_img");
           $figcaption.setAttribute("class", "item_title");
                $images.setAttribute("src", d.image);
                $figcaption.textContent = d.name;
                $descripcion.innerHTML = "<br> " +
                "Genero : " + d.gender
                + "<br> "+
                "Especie : " + d.species
                + "<br> "+
                "Estado : " + d.status
                + "<br> "+
                "Origen : " + d.origin.name
                + "<br> "+ 
                "Lugar Actual  " + "<br>" + d.location.name;
                

            $figure.appendChild($images);
            $figure.appendChild($figcaption);
            $figure.appendChild($descripcion);
            $article.appendChild($figure);
         
            fragment.appendChild($article) 
      
              $op.addEventListener('change', (e)=>{  // evento al <select><option> mediante el target
              let selecionado = e.target.value; //  almacena el <option> actual seleccionado
                if(selecionado != d.species){  // si la condicion de seleccion y d.species es diferente: elimina del elemento article el contenido que contiene el elemento figure ya que cumple la condicion
                  $article.remove();          
                }                               // queda solo dentro del elemento article el contenido del elemento figure que contiene solo los elemento que no cumplan con la condicion
                 if(selecionado == d.species){   // si es igual la seleccion se añade al elemento cards de la vista de personajes los elemento que cumplan la condicion
                 fragment.appendChild($article)
                 $cards.appendChild(fragment); 
                }
                 if($op.value != ""){
                   $cardsSearch.style.display='none';
                    $ver.style.display='none'; 
               
                 }
                 if($op.value == "0" && $input.value == ""){
                  $cardsSearch.style.display='block';
              
                }
                 if($input != "" && $op.value != ""){
                  $cards.style.display='block';
                  
                }
               
               
           })
            
        }

    }
  

 

  /* FUNCION "searchCharacter" FILTRO PERSONAJES POR NOMBRE */
 
  export const searchCharacter = (dataP, input, selector,selector2, dataE) =>{
    
    const $input = document.getElementById(input);
    const $cards = document.getElementById("cards");
    const $op = document.getElementById("op");
    const $cardsSearch = document.getElementById(selector);
    const $ver = document.getElementById("ver");  
    const $modal = document.getElementById(selector2); 
  
       for(let i=0; i<dataP.length; i++){
        let urlImages = dataP[i].image;
        let digito = urlImages.substr(49); 
      
            const $article = document.createElement("ARTICLE");
            $article.setAttribute("class", "item-article cursor")
            const $figure = document.createElement("FIGURE");
            $figure.setAttribute("class", "item-figure-none" );    
            const $images = document.createElement("IMG");
            $images.setAttribute("class", "item_img")
            const $figcaption = document.createElement("FIGCAPTION");
            $figcaption.setAttribute("class", "item_title");
            $figcaption.setAttribute("id", "titulo");
           
            $images.setAttribute("src", dataP[i].image);
            $figcaption.innerHTML =  "<p class=names>" + dataP[i].name + "</p>"
            $figure.appendChild($images);
            $figure.appendChild($figcaption);
           
            $article.appendChild($figure);
            $cardsSearch.appendChild($article);
     
                  $input.addEventListener('keyup', (e) =>{

                      $article.appendChild($figure);
                      $cardsSearch.appendChild($article);
            
                        if(dataP[i].name.toLowerCase().indexOf(e.target.value.toLowerCase())== -1){
                            $article.remove();
                           /*  $cardsSearch.appendChild($newarticle)  */
                        }
                       
                          if(e.target.value != ""){
                              $op.value = "0"; 
                              $cards.style.display='none';
                              $cardsSearch.style.display='block';
                              $ver.style.display='none'; 
                         
                            if(e.target.value != "" && $op.value == "0"){
                              $ver.style.display='block';
                              $ver.innerHTML = "";
                            }
                          }
                       
                          if(e.target.value == ""){
                              e.target.value = ""
                              $op.value = "0"; 
                              $cardsSearch.style.display='block';
                              $ver.innerHTML="";

                            if(e.target.value == "" || $op.value == "0"){
                                $cards.style.display='block';
                                $cardsSearch.style.display='block';
                                $cardsSearch.style.display='block';
                                $cards.textContent = "";              
                            }
                          }
     
                })  

                $cardsSearch.children[i].addEventListener('click', (e)=>{
                  let urlIMG = e.target.src;
                  let name = e.target.textContent;
                  
                    if(urlImages == urlIMG || digito == dataP[i].id|| name == dataP[i].name){
                     document.querySelector('.close').classList.remove("off");
                      document.querySelector('.button_modal').classList.remove("off"); 

                      document.getElementById("modal").style.display='block'
                     
                      let name = dataP[i].name,
                      gender = dataP[i].gender,
                      status = dataP[i].status,
                      specie = dataP[i].species,
                      origin = dataP[i].origin.name,
                      location = dataP[i].location.name,
                      image = dataP[i].image;
                      document.querySelector('.card_title').textContent = name;
                      let imagen = `<img class="current" src='${dataP[i].image}'/>` ; 
                      document.querySelector('.card_figure').innerHTML= imagen;
                      document.querySelector('.specie').textContent = "Especie: " +specie;
                      document.querySelector('.status').textContent = "Estado: "+ status;
                      document.querySelector('.gender').textContent = "Genero: "+ gender;
                      document.querySelector('.origen').textContent = "Origen: "+ origin;
                      document.querySelector('.location').textContent = "Lugar Actual: "+ location;
                     
                      document.getElementById("btnEpisodio").addEventListener('click', (e)=>{
            
                        $cardsSearch.style.display='none';
                        document.getElementById("modal").style.display='none';
                        let show, title;
                        show=""
                        title ="";

                        for(let d of dataP){
                          for(let i=0; i<d.episode.length; i++){
                            for(let capitulos of dataE){
                            let urlEpisode = d.episode[i];
                            let digito = urlEpisode.substr(40);
                           
                              title =`<div class="card-episode"><h1>${dataP[i].name}</h1><img src="${dataP[i].image}"><div>`;                       
                                if(digito== capitulos.id ){
                                  if(digito== capitulos.id){
                                    if(d.name == name && d.origin.name == origin){ 
                                    title =`<div  class="card-episode"> <img class="item_img" src="${image}"> <h1>${d.name}</h1></div>`;
                                    show += `<div class="card-episode"> 
                                             <div id="col" class="col">
                                              ${digito}&nbsp;&nbsp
                                              ${capitulos.name}&nbsp;&nbsp;${capitulos.episode}</div></div>`;
                                    document.getElementById("ver").innerHTML = title+ show ;  
                                    } 
                                  }    
                                }   
                              }
                            }
                          }
                        
               
               
      })
     
 }

 document.getElementById('close_modal').addEventListener('click', ()=>{
  document.getElementById("modal").style.display='none'
}) 


})
}
  }     
          
/* 
export const verModal = (data) =>{
  const $cardsSearch = document.getElementById("cardsSearch");
  const $modal = document.getElementById("modal");
  const $close = document.createElement("SPAN");
  for(let i=0; i<data.length; i++){
     let urlImages = data[i].image;
    let digito = urlImages.substr(49); 
          $cardsSearch.children[i].addEventListener('click', (e)=>{
            let urlIMG = e.target.src;
            let name = e.target.textContent;
            
              if(urlImages == urlIMG || digito == data[i].id|| name == data[i].name){
                $modal.classList.add("active-m");
            const $article = document.createElement("ARTICLE");
            $article.setAttribute("class", "item-article cursor")

            const $newarticle = document.createElement("ARTICLE");
            $newarticle.setAttribute("class", "item-article");
         
            const $figure = document.createElement("FIGURE");
            $figure.setAttribute("class", "item-figure" );
            
            const $images = document.createElement("IMG");
            $images.setAttribute("class", "item_img")
            
          
            $close.setAttribute("class", "close")
            $close.innerHTML ="X"
            const $figcaption = document.createElement("FIGCAPTION");
            $figcaption.setAttribute("class", "item_titulo");
            $figcaption.setAttribute("id", "titulo");
     
            const  $descripcion = document.createElement("P");
            $descripcion.setAttribute("class", "item_desc active_");
            $descripcion.setAttribute("id", "descripcion");
               
                $figure.appendChild($close)
            
                $images.setAttribute("src", data[i].image);
                $figcaption.innerHTML =  "<p class=names>" + data[i].name + "</p>"
                 $descripcion.innerHTML = "<br>" +
                "Genero : " + data[i].gender
                + "<br> "+
                "Especie : " + data[i].species
                + "<br> "+
                "Estado : " + data[i].status
                + "<br> "+
                "Origen : " + data[i].origin.name
                + "<br> "+ 
                "Lugar Actual  " + "<br>" + data[i].location.name
                + "<span>EPISODIOS</span>"
               ;
    
              
    
                $figure.appendChild($images);
                $figure.appendChild($figcaption);
                $figure.appendChild($descripcion); 
               
    
                $article.appendChild($figure);
                $modal.appendChild($article);
      
                console.log($modal.className);
                $article.classList.remove('cursor')
              
                  $close.addEventListener('click', ()=>{
                    
                    $modal.style.display='none'; 
                    $modal.classList.toggle('active-m')
                   
                 })
                

            }
             
         
        
          })
       
   
  }

}
 */





/* 

    export const verEpisodios = (dataP, dataE)=>{
     
      const $ver = document.getElementById("ver");   
      const $cardsSearch = document.getElementById("cardsSearch");
      const $cards = document.getElementById("cards");
      const $op = document.getElementById("op");
      const $input = document.getElementById("search");
     

      for(let i=0; i<dataP.length; i++){
      $cardsSearch.children[i].addEventListener('click', (e)=>{
          let save = e.target;
          if( save.classList.contains("names")){

             $cardsSearch.style.display='none';
             $cards.style.display='none';
                  if(e.target.textContent== dataP[i].name || e.target.textContent == dataP[i].origin.name){
                       
                      const $article = document.createElement("ARTICLE");
                      const $newarticle = document.createElement("ARTICLE");
                      const $figure = document.createElement("FIGURE");
                      const $images = document.createElement("IMG");
                      $images.setAttribute("class", "img_image");

                      const $figcaption = document.createElement("FIGCAPTION");
                      $figcaption.setAttribute("class", "i_titulo");

                      $images.setAttribute("src", dataP[i].image);
                      $figcaption.innerHTML =  "<p class=names>" + dataP[i].name + "</p>" + "<br>"

                      $figure.appendChild($images);
                      $figure.appendChild($figcaption);
                     
                     
                     for(let x=0; x<dataP[i].episode.length; x++){
                       let cadenaUrl = dataP[i].episode[x];
                       
                         let seleccion = cadenaUrl.substr(40); 
                    
                         for(let capitulo of dataE){
                            if(seleccion == capitulo.id){
                            
                              const  $listado = document.createElement("LI");
                              $listado.setAttribute("class", "item_listado");
                              $listado.innerHTML += capitulo.id +' - '+ capitulo.name;
                              $figure.appendChild($listado);
                         
              
                               $article.appendChild($figure);
                               $ver.appendChild($article); 
                              
                                 if($input == " "){
                                   console.log("paso");
                                  $ver.appendChild($newarticle); 
                                 }
                              
                            }
                          
                            
                         }
                      
                    }
                   
                
                  }
                  
              
                }
             })
       
        
      }
          
       
    }
 

 */


   export const episodioXpersonajes =(dataP, dataE)=>{
     
       const $temporada = document.getElementById("temporadas");
       const $title_temporada = document.querySelectorAll('.panels__item h3');
       const $listEpisode = document.querySelectorAll('.panels__item li');
       const $cardsTemporada = document.getElementById("cardsTemporada");
       const $titulo = document.getElementById("title_ep");

        for(let x of dataE){
        
          $temporada.addEventListener('click', (e)=>{
            let name_titulo = e.target.textContent;
            let item_selecionado = e.target.textContent.substr(0,2);

             for(let i=0; i<x.characters.length; i++){
               dataP.forEach(p=>{
            
              let url = x.characters[i];
              let digito = url.substr(42); 
             
          
              if(digito == p.id && x.id == item_selecionado){
                 $temporada.style.display='none'; 
              
                const $article = document.createElement("ARTICLE");
                $article.setAttribute("class", "item-article")
                const $newarticle = document.createElement("ARTICLE");
                $newarticle.setAttribute("class", "item-article")
                const $figure = document.createElement("FIGURE");
                $figure.setAttribute("class", "item-figure-full");
                const fragment = document.createDocumentFragment();
                const $images = document.createElement("IMG");
                $images.setAttribute("class", "item_img")
                const $figcaption = document.createElement("FIGCAPTION");
                $figcaption.setAttribute("class", "item_title-full")
                const  $descripcion = document.createElement("P");
                $descripcion.setAttribute("class", "item_description-full");
                $titulo.setAttribute("class","item_title" )

                $titulo.innerHTML = x.name + '  '+ x.episode + '  '+ x.air_date;
               
                $images.setAttribute("src", p.image);
                $figcaption.textContent = p.name;
                $descripcion.innerHTML = "<br>"+"<br>"+"Capitulo: "+ x.name+" <br> " +
                "Episodio: " + x.episode + "<br>"+
                "Genero : " + p.gender
                + "<br> "+
                "Especie : " + p.species
                + "<br> "+
                "Estado : " + p.status
                + "<br> "+
                "Origen : "  + "<br>" + p.origin.name
                + "<br> "+ 
                "Lugar Actual :  " + "<br>" + p.location.name;

                $figure.appendChild($images);
                $figure.appendChild($figcaption);
                $figure.appendChild($descripcion);

                $article.appendChild($figure);
                $cardsTemporada.appendChild($article);
              }
              
                
              })
       
            }
      }) 
   }
  
  }

 
export const verGenero = (data) =>{
  data.forEach(d=>{
    const $templateG = document.getElementById("template-gender");
    const $templateS = document.getElementById("template-status");
    const $opGender=document.getElementById("op_gender");
    const $opStatus=document.getElementById("op_status");
   
    const $article = document.createElement("ARTICLE"),
    $figure = document.createElement("FIGURE"),
    $images = document.createElement("IMG"),
    $figcaption = document.createElement("FIGCAPTION"),
    $descripcion = document.createElement("P");
    $article.setAttribute("class", "item-article");
    $figure.setAttribute("class", "item-figure");
    $descripcion.setAttribute("class", "item_description");
    $images.setAttribute("class", "item_img");
    $figcaption.setAttribute("class", "item_title");
         $images.setAttribute("src", d.image);
         $figcaption.textContent = d.name;
         $descripcion.innerHTML = "<br> " +
         "Genero : " + d.gender
         + "<br> "+
         "Especie : " + d.species
         + "<br> "+
         "Estado : " + d.status
         + "<br> "+
         "Origen : " + d.origin.name
         + "<br> "+ 
         "Lugar Actual  " + "<br>" + d.location.name;

         $figure.appendChild($images);
         $figure.appendChild($figcaption);
         $figure.appendChild($descripcion);
     
       

    $opGender.addEventListener('change', (e)=>{
   
      if(e.target.value == d.gender){
        $article.appendChild($figure);
        $templateG.appendChild($article)
        
        
   

      }
      if(e.target.value != d.gender){
           $article.remove();
 
      }

      if($opGender.value!= "0"){
        $templateS.style.display='none'
        $templateG.style.display='block'
        $opStatus="0";
        $opStatus="";
      }
  
 
    })
   
  })
}


export const verEstado =(data)=>{
  data.forEach(d=>{
    const $templateG = document.getElementById("template-gender");
    const $templateS = document.getElementById("template-status");
    const $opStatus=document.getElementById("op_status");
   
    const $article = document.createElement("ARTICLE"),
    $figure = document.createElement("FIGURE"),
    $images = document.createElement("IMG"),
    $figcaption = document.createElement("FIGCAPTION"),
    $descripcion = document.createElement("P");
    $article.setAttribute("class", "item-article");
    $figure.setAttribute("class", "item-figure");
    $descripcion.setAttribute("class", "item_description");
    $images.setAttribute("class", "item_img");
    $figcaption.setAttribute("class", "item_title");
         $images.setAttribute("src", d.image);
         $figcaption.textContent = d.name;
         $descripcion.innerHTML = "<br> " +
         "Genero : " + d.gender
         + "<br> "+
         "Especie : " + d.species
         + "<br> "+
         "Estado : " + d.status
         + "<br> "+
         "Origen : " + d.origin.name
         + "<br> "+ 
         "Lugar Actual  " + "<br>" + d.location.name;

         $figure.appendChild($images);
         $figure.appendChild($figcaption);
         $figure.appendChild($descripcion);
     
       

    $opStatus.addEventListener('change', (e)=>{
      if(e.target.value == d.status){
        $article.appendChild($figure);
        $templateS.appendChild($article) 
      
      }
      if(e.target.value != d.status){
           $article.remove();
 
      }
      if($opStatus.value!= "0"){
        $templateG.style.display='none'
        $templateS.style.display='block'
        $opGender="0";
        $opStatus=""
      }
    
    })
  })
      
}