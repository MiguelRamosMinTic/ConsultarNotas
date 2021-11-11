// NOTAS ----------------------

function consultarNota(){
  let email = {
    emailEstudiante: $("#emailNota").val(),
  }
  $.ajax({
      url:'https://g6c335b483ca254-bdgastosg16.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/notas/retos/'+email.emailEstudiante,
      type:'GET',
      dataType: 'json',
      success:function(response) {
          var misItems = response.items;
          limpiarFormulario();
          $("#miResultadoNotas").empty();
          $("#miResultadoMensajes").empty();

          $("#miResultadoNotas").append("<td style='text-align: center;'>NOMBRE</td>");
          $("#miResultadoNotas").append("<td>NOTA RETO 2</td>");
          $("#miResultadoNotas").append("<td>NOTA RETO 3</td>");
          $("#miResultadoNotas").append("<td>NOTA RETO 4</td>");
          $("#miResultadoNotas").append("<td>NOTA RETO 5</td>");
          $("#miResultadoNotas").append("<td>PROMEDIO</td>");

          $("#miResultadoMensajes").append("<td style='text-align: center;'>MENSAJE RETO 2</td>");
          $("#miResultadoMensajes").append("<td style='text-align: center;'>MENSAJE RETO 3</td>");
          $("#miResultadoMensajes").append("<td style='text-align: center;'>MENSAJE RETO 4</td>");
          $("#miResultadoMensajes").append("<td style='text-align: center;'>MENSAJE RETO 5</td>");
          for(i=0;i<misItems.length;i++){
              console.log(misItems[i]);
              $("#miResultadoNotas").append("<tr>");
              $("#miResultadoNotas").append("<td>"+misItems[i].nombre+"</td>");
              $("#miResultadoNotas").append("<td style='text-align: center;'>"+misItems[i].frontend_reto2+"</td>");
              $("#miResultadoNotas").append("<td style='text-align: center;'>"+misItems[i].frontend_reto3+"</td>");
              $("#miResultadoNotas").append("<td style='text-align: center;'>"+misItems[i].frontend_reto4+"</td>");
              $("#miResultadoNotas").append("<td style='text-align: center;'>"+misItems[i].frontend_reto5+"</td>");
              $("#miResultadoNotas").append("<td style='text-align: center;'>"+misItems[i].promedio+"</td>");
              $("#miResultadoNotas").append("</tr>");

              $("#miResultadoMensajes").append("<tr>");
              $("#miResultadoMensajes").append("<td style='text-align: center;'>"+misItems[i].mensaje_r2+"</td>");
              $("#miResultadoMensajes").append("<td style='text-align: center;'>"+misItems[i].mensaje_r3+"</td>");
              $("#miResultadoMensajes").append("<td style='text-align: center;'>"+misItems[i].mensaje_r4+"</td>");
              $("#miResultadoMensajes").append("<td style='text-align: center;'>"+misItems[i].mensaje_r5+"</td>");
              $("#miResultadoMensajes").append("</tr>");
          }
      },

  });
}

function limpiarFormulario() {
  $("#emailNota").val("");
}