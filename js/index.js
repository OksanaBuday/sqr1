var a = Number(prompt('Введіть а'));
document.write('a= ' + a);
document.write('<br>');
var b = Number(prompt('Введіть b'));
document.write('b= ' + b);
document.write('<br>');
var c = Number(prompt('Введіть c'));
document.write('c= ' + c);
document.write('<br>');
document.write('Рівння виду: ' + a + 'x <sup>2</sup> + ' + b + 'x +  ' + c);
document.write('<br>');

var result = square(a, b, c);
document.write('Розв*язок рівняння:');
document.write('<br>');
document.write(result);

function square(a, b, c) {
    var result;

    if (a === 0) {
        result = 'Введіть а відмінне від 0';
        return result;
    }

    if (D() === 0) {
        var x = -(b / 2 * a);
        return 'x = ' + x;

    }
    else if (D() < 0) {
        result = 'Рівняння немає коренів';
        return result;
    }

    var d = D(a, b, c);
    var x1 = (-b + Math.sqrt(d)) / (2 * a);
    var x2 = (-b - Math.sqrt(d)) / (2 * a);
    return 'x1= ' + x1 + ' x2 = ' + x2;

}

function D() {
    return b * b - 4 * a * c;

}
