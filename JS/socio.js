var UrlGetSocio ='http://34.68.196.220:90/G7_20/Socios/controller/socio.php?op=GetSocio';
var UrlPostSocio = 'http://34.68.196.220:90/G7_20/Socios/controller/socio.php?op=insertsocio';
var UrlUnoSocio = 'http://34.68.196.220:90/G7_20/Socios/controller/socio.php?op=GetUno';
var UrlUpdateSocio = 'http://34.68.196.220:90/G7_20/Socios/controller/socio.php?op=updatesocio';
var UrlDeleteSocio = 'http://34.68.196.220:90/G7_20/Socios/controller/socio.php?op=deletesocio';

$(document).ready(function(){
    cargarSocio();
});

function cargarSocio(){
    $.ajax({
        url: UrlGetSocio,
        type: 'GET',
        datatype: 'JSON',
        success: function(response){
            var MiItems = response;
            var Valores= '';

            for(i=0; i<MiItems.length; i++){
                Valores += '<tr>'+                
                '<td id="idpro">'+MiItems[i].id+'</td>'+
                '<td>'+MiItems[i].nombre+'</td>'+
                '<td>'+MiItems[i].razon_social+'</td>'+
                '<td>'+MiItems[i].direccion+'</td>'+
                '<td>'+MiItems[i].tipo_socio+'</td>'+
                '<td>'+MiItems[i].contacto+'</td>'+
                '<td>'+MiItems[i].email+'</td>'+
                '<td>'+MiItems[i].fecha_creado+'</td>'+
                '<td>'+MiItems[i].estado+'</td>'+
                '<td>'+MiItems[i].telefono+'</td>'+
                '<td>'+
                '<button class="btn btn-warning" onclick="cargarSocio('+MiItems[i].id+')">Editar</button>'+
                '<button class="btn btn-danger" onclick="eliminarSocio('+MiItems[i].id+')">Eliminar</button>'+
                '</td>'+
                '</tr>';
                $('.socio').html(Valores);
                alert(Valores);

            }
        }

    });
}


function AgregarSocio(){
    var datosocio ={
        nombre:$('#nombre').val(),
        razon_social:$('#razon_social').val(),
        direccion:$('#direccion').val(),
        tipo_socio:$('#tipo_socio').val(),
        contacto:$('#contacto').val(),
        email:$('#email').val(),
        fecha_creado:$('#fecha_creado').val(),
        estado:$('#estado').val(),
        telefono:$('#telefono').val()
    };
    var datosociojson= JSON.stringify(datosocio);

    $.ajax({
        url: UrlPostSocio,
        type: 'POST',
        data: datosociojson,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function(response){
            console.log(response);            
        }

    });
    alert("Socio Agregado");
}

function cargarSocio(idsocio){
        var datosocio = {
        id: idsocio
    
        };
        var datosociojson= JSON.stringify(datosocio);

        $.ajax({
            url: UrlUnoSocio,
            type: 'POST',
            data: datosociojson,
            datatype: 'JSON',
            contentType: 'application/json',
            success: function(response){
            var MiItems = response;
            $('#nombre').val(MiItems[0].nombre);
            $('#razon_social').val(MiItems[0].razon_social);
            $('#direccion').val(MiItems[0].direccion);
            $('#tipo_socio').val(MiItems[0].tipo_socio);
            $('#contacto').val(MiItems[0].contacto);
            $('#email').val(MiItems[0].email);
            $('#fecha_creado').val(MiItems[0].fecha_creado);
            $('#estado').val(MiItems[0].estado);
            $('#telefono').val(MiItems[0].telefono);
            var btnactualizar = '<input type="submit" id="btn_actualizar" onclick="ActualizarSocio('+MiItems[i].id+') "value="Actualizar Socio" class="btn btn-primary"></input>';
            $('.btnagregar').html(btnactualizar);

         }

    });

}

function ActualizarSocio(idsocio){
    var datosocio = {
        id: idsocio,
        nombre: $('#nombre').val(),
        razon_social: $('#razon_social').val(),
        direccion: $('#direccion').val(),
        tipo_socio: $('#tipo_socio').val(),
        contacto: $('#contacto').val(),
        email: $('#email').val(),
        fecha_creado: $('#fecha_creado').val(),
        estado: $('#estado').val(),
        telefono: $('#telefono').val(),
    };
    var datosociojson= JSON.stringify(datosocio);

    $.ajax({
        url: UrlUpdateSocio,
        type: 'PUT',
        data: datosociojson,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function(response){
            console.log(response);            
        }

    });
    alert("Socio Actualizado");



}

function eliminarSocio(idsocio){
    var datosocio = {
    id: idsocio

    };
    var datosociojson= JSON.stringify(datosocio);
    
    $.ajax({
        url: UrlDeleteSocio,
        type: 'DELETE',
        data: datosociojson,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function(response){
            var MiItems = response;
            $('#nombre').val(MiItems[0].nombre);
            $('#razon_social').val(MiItems[0].razon_social);
            $('#direccion').val(MiItems[0].direccion);
            $('#tipo_socio').val(MiItems[0].tipo_socio);
            $('#contacto').val(MiItems[0].contacto);
            $('#email').val(MiItems[0].email);
            $('#fecha_creado').val(MiItems[0].fecha_creado);
            $('#estado').val(MiItems[0].estado);
            $('#telefono').val(MiItems[0].telefono);
            var btneliminar = '<input type="submit" id="btn_eliminar" onclick="eliminarSocio('+MiItems[i].id+') "value="Eliminar Socio" class="btn btn-primary"></input>';
            $('.btnagregar').html(btneliminar);
          
        }

    });
    alert("Socio Eliminado");

}  