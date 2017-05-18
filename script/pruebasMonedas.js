function formato_numero(numero, decimales, separador_decimal, separador_miles) {
    numero = parseFloat(numero);
    if (isNaN(numero)) {
        return "";
    }
    if (decimales !== undefined) {
        // Redondeamos
        numero = numero.toFixed(decimales);
    }
    // Convertimos el punto en separador_decimal
    numero = numero.toString().replace(".", separador_decimal !== undefined ? separador_decimal : ",");
    if (separador_miles) {
        // Añadimos los separadores de miles
        var miles = new RegExp("(-?[0-9]+)([0-9]{3})");
        while (miles.test(numero)) {
            numero = numero.replace(miles, "$1" + separador_miles + "$2");
        }
    }
    return numero;
}


function format(input, id) {
    var num = input.value.replace(/\./g, '');
    if (num != '') {
        if (!isNaN(num)) {
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\,?)(\d{9})/g, '$1,');
            num = num.split('').reverse().join('').replace(/^[\,]/, '');
            input.value = "$" + formato_numero(num, 0, '.', ',');
            return true;
        } else if (id == 'creciente') {
            $('#' + input.id).val('');
            $('#guarda_monto').val('');
            ObtencionGuarda(0);
            return false;
        } else if (id == 'consumo') {
            $('#' + input.id).val('');
            $('#guarda_monto').val('');
            ObtencionGuarda(0);
            return false;
        } else if (id == 'domicilia') {
            $('#' + input.id).val('');
            $('#guarda_monto').val('');
            ObtencionGuarda(0);
            return false;
        }
    } else {
        $('#' + input.id).val('');
    }
}