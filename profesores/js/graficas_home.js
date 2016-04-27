$(function() {
    Morris.Line({
        element: 'grafica_linea_simple',
        data: [
            { año: '2012', A1: 5, B1: 7, C1: 7, A2: 7, B2: 5 },
            { año: '2013', A1: 3, B1: 7, C1: 7, A2: 6, B2: 7 },
            { año: '2014', A1: 4, B1: 7, C1: 9, A2: 7, B2: 9 },
            { año: '2015', A1: 6, B1: 6, C1: 8, A2: 6, B2: 6 }
        ],
        xkey: 'año',
        ykeys: ['A1', 'B1', 'C1', 'A2', 'B2'],
        labels: ['Notas 1º A', 'Notas 1º B', 'Notas 1º C', 'Notas 2º A', 'Notas 2º B', ],
        hideHover: 'auto',
        resize: true
    });
    Morris.Area({
        element: 'grafica_areas',
        data: [{
            periodo: '2015 Q1',
            sin_completar: 5,
            unoE: 25,
            dosE: 24,
            tresE: 10
        }, {
            periodo: '2015 Q2',
            sin_completar: 0,
            unoE: 12,
            dosE: 21,
            tresE: 8
        }, {
            periodo: '2015 Q3',
            sin_completar: 2,
            unoE: 32,
            dosE: 9,
            tresE: 17
        }, {
            periodo: '2015 Q4',
            sin_completar: 11,
            unoE: 17,
            dosE: 12,
            tresE: 12
        }],
        xkey: 'periodo',
        ykeys: ['sin_completar', 'unoE', 'dosE', 'tresE'],
        labels: ['Sin completar', 'Una estrella', 'Dos estrellas', 'Tres estrellas'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });
    Morris.Bar({
        element: 'grafica_barras',
        data: [{
            y: '2006',
            a: 70,
            b: 80,
            c: 65,
            d: 75,
            e: 100
        }, {
            y: '2007',
            a: 65,
            b: 55,
            c: 85,
            d: 70,
            e: 80
        }, {
            y: '2012',
            a: 100,
            b: 90,
            c: 65,
            d: 65,
            e: 85
        }, {
            y: '2013',
            a: 70,
            b: 90,
            c: 60,
            d: 75,
            e: 70
        }, {
            y: '2014',
            a: 60,
            b: 35,
            c: 50,
            d: 65,
            e: 70
        }, {
            y: '2015',
            a: 70,
            b: 55,
            c: 20,
            d: 50,
            e: 100
        }],
        xkey: 'y',
        ykeys: ['a', 'b', 'c', 'd', 'e'],
        labels: ['Puntuación 1ºA', 'Puntuación 1ºB', 'Puntuación 1ºC', 'Puntuación 2ºA', 'Puntuación 2ºB'],
        hideHover: 'auto',
        resize: true
    });
});