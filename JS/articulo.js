var UrlGetArticulo = 'http://localhost:90/G7_20/controller/articulos.php?op=GetArticulos';
var PostArticulo = 'http://localhost:90/G7_20/controller/articulos.php?op=InsertArticulos';
var PutArticulo = 'http://localhost:90/G7_20/controller/articulos.php?op=UpdateArticulos';
var DeleteArticulo = 'http://localhost:90/G7_20/controller/articulos.php?op=DeleteArticulos';
var GetUno = 'http://localhost:90/G7_20/controller/articulos.php?op=GetUno';

$(document).ready(function(){
    CargarArticulos();
});

function CargarArticulos(){
    $.ajax({
        url: UrlGetArticulo,
        type: 'GET',
        datatype: 'JSON',
        success: function (response){
            var MiItems = response;
            var Valores='';

            for(i=0; i< MiItems.length; i++){
                Valores += '<tr>'+
                '<td>'+MiItems[i].ID +'</td>'+
                '<td>'+MiItems[i].DESCRIPCION +'</td>'+
                '<td>'+MiItems[i].UNIDAD +'</td>'+
                '<td>'+MiItems[i].COSTO +'</td>'+
                '<td>'+MiItems[i].PRECIO +'</td>'+
                '<td>'+MiItems[i].APLICA_ISV +'</td>'+
                '<td>'+MiItems[i].PORCENTAJE_ISV +'</td>'+
                '<td>'+MiItems[i].ESTADO +'</td>'+
                '<td>'+MiItems[i].ID_SOCIO +'</td>'+
                '<td>'+
                '<button class="btn btn-warning" onclick="CargarArticulos('+MiItems[i].ID+')">Editar</button>'+
                '<button class="btn btn-danger" onclick="EliminarArticulo('+MiItems[i].ID+')">Eliminar</button>'+
                '<td>'+
            ' </tr>';
            $('.Articulos').html(Valores);
            }
        }
    });
}

function AgregarArticulo(){
    var datosarticulo = {
        DESCRIPCION: $('#DESCRIPCION').val(),
        UNIDAD: $('#UNIDAD').val(),
        COSTO: $('#COSTO').val(),
        PRECIO: $('#PRECIO').val(),
        APLICA_ISV: $('#APLICA_ISV').val(),
        PORCENTAJE_ISV: $('#PORCENTAJE_ISV').val(),
        ESTADO: $('#ESTADO').val(),
        ID_SOCIO: $('#ID_SOCIO').val()
    };
    var datosarticulojson=JSON.stringify(datosarticulo);

    $.ajax({
        url: PostArticulo,
        type: 'POST',
        data:datosarticulojson,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function(response){
            console.log(response);
        }
    });
    alert("Articulo Agregado");
 
    
}

function CargarArticulo(idarticulo){
    var datosarticulo = {
        ID: idarticulo
    };
    var datosarticulojson= JSON.stringify(datosarticulo);

    $.ajax({
        url: GetUno,
        type: 'POST',
        data: datosarticulojson,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function(response){
            var MiItems= response;
            $('#DESCRIPCION').val(MiItems[0].DESCRIPCION);
            $('#UNIDAD').val(MiItems[0].UNIDAD);
            $('#COSTO').val(MiItems[0].COSTO);
            $('#PRECIO').val(MiItems[0].PRECIO);
            $('#APLICA_ISV').val(MiItems[0].APLICA_ISV);
            $('#PORCENTAJE_ISV').val(MiItems[0].PORCENTAJE_ISV);
            $('#ESTADO').val(MiItems[0].ESTADO);
            $('#ID_SOCIO').val(MiItems[0].ID_SOCIO);

            var btnactualizar = '<input type="submit" ID="btn_actualizar" onclick="ActualizarArticulo('+ MiItems[0].ID+')"'+
            'value="Actualizar Articulo" class="btn btn-primary"></input>';
            $('.btnagregar').html(btnactualizar);
        }
    });

}


function ActualizarArticulo(){
    var datosarticulo = {
        DESCRIPCION: $('#DESCRIPCION').val(),
        UNIDAD: $('#UNIDAD').val(),
        COSTO: $('#COSTO').val(),
        PRECIO: $('#PRECIO').val(),
        APLICA_ISV: $('#APLICA_ISV').val(),
        PORCENTAJE_ISV: $('#PORCENTAJE_ISV').val(),
        ESTADO: $('#ESTADO').val(),
        ID_SOCIO: $('#ID_SOCIO').val()
    };
    var datosarticulojson=JSON.stringify(datosarticulo);

    $.ajax({
        url: PutArticulo,
        type: 'PUT',
        data:datosarticulojson,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function(response){
            console.log(response);
        }
    });
    alert("Articulo Actualizado");
 
    
}

function EliminarArticulo(idarticulo){
    var datosarticulo = {
        ID: idarticulo
    };
    var datosarticulojson= JSON.stringify(datosarticulo);
    
    $.ajax({
        url: DeleteArticulo,
        type: 'DELETE',
        data:datosarticulojson,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function(response){
            console.log(response);
        }
    });
    alert("Articulo Eliminado");
}