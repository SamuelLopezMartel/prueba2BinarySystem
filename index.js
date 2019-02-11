function estado(idDiv){
    
    let div = document.getElementById(idDiv);
    let divClass = div.classList;
    console.log('esto es ' + divClass+ typeof(divClass))

   switch(divClass+""){
       case 'defecto':
       console.log('esto es ' + divClass)
       divClass.replace('defecto', 'activado');
       break;
       case 'activado':
       divClass.replace('activado','desactivado')
       break;
       case 'desactivado':
       divClass.replace('desactivado','defecto')
       break;
   }

}