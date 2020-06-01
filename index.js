//Importamos los paquetes que requerimos
const express = require('express');
const hbs = require('hbs');

//creamos la aplicacion
const app = express();

//Definimos el motor de plantillas
//No de vamos a emplear MVC (Vista vamos a utiisar HBS)
app.set('view engine', 'hbs');

//Vamos a generar los partials
hbs.registerPartials(__dirname + '/views/partials');

//Generamos el sitio estatico
app.use(express.static(__dirname + '/public'));

//configurar mis rutas
app.get('/Caravaggio', (req, res)=>{
    res.render('Michelangelo Merisi', {
        autor : 'Jonathan Liens',
        year : new Date().getFullYear(),
        title : 'Michelangelo Merisi Da Caravaggio'
        reseña:"Caravaggio, cuyo nombre real era Michelangelo Merisi (Milán, 1573 – Porto Ercole, 1610), artista pintor italiano,  uno de los exponentes más destacados de la escuela naturalista que surgió en Italia como oposición a la corriente manierista triunfante durante el siglo XVI. En sus cuadros, tanto profanos como religiosos, no utilizó otro modelo más que la cruda realidad sin someter a los personajes a proceso alguno de idealización. Esta forma de tratar las composiciones religiosas atrajo la atención de la Contrarreforma por su carácter devocional que facilitaba la identificación de los fieles con los modelos de santidad, aunque, en algún caso, la excesiva vulgaridad de aquellos le valió algún problema con la Iglesia. Fue asimismo muy importante su utilización del claroscuro para imprimir dramatismo a sus obras"
    });
});

app.get('/Goya', (req, res)=>{
    res.render('Francisco', {
        autor :'Jonathan Liens',
        year : new Date().getFullYear(),
        title : 'Francisco de Goya'
        Reseña:"Fuendetodos, España, 1746 - Burdeos, Francia, 1828) Pintor y grabador español. Goya fue el artista europeo más importante de su tiempo y el que ejerció mayor influencia en la evolución posterior de la pintura, ya que sus últimas obras se consideran precursoras del impresionismo. Goya aprendió de su padre el oficio de dorador, pero, decidido a dedicarse a la pintura, se trasladó a Madrid para formarse junto a Francisco Bayeu, con cuya hermana se casó en 1775, año de su establecimiento definitivo en Madrid. Bayeu le proporcionó trabajo en la Real Fábrica de Tapices, para la que realizó sesenta y tres cartones, en su mayor parte con escenas idílicas y de la vida diaria, plasmadas con colores claros y vivos e impregnadas de alegría y romanticismo"
    });
});

app.get('/Renoir', (req, res)=>{
    res.render('Pierre-Auguste', {
        autor : 'Jonathan Liens',
        year : new Date().getFullYear(),
        title : 'Pierre-Auguste Renoir'
    Reseña:"(Limoges, 1841 - Cagnes-sur-Mer, 1919) Pintor francés, una de las más destacadas figuras del impresionismo, tendencia de la que se distanciaría para seguir una línea personal. Hijo de artesanos, vivió sus primeros años en barrios proletarios donde trabajó como decorador de porcelanas y pintor de abanicos. Después pudo acceder al taller del pintor Gilbert y, luego, al de Gleyre, donde conoció a Claude Monet, Frédéric Bazille y Alfred Sisley, con quien más tarde compartió su casa en París. Sus primeros intereses como pintor se inclinaron por la escuela de Barbizon y, consecuentemente, por la pintura al aire libre. Durante los días agitados de la Comuna, pintó con Monet a orillas del Sena. En 1873 terminó Jinetes en el bosque de Bolonia, excluida del Salón oficial y expuesta en el de los Rechazados. Durand-Ruel se interesó por su obra y en 1874 participó en la primera exposición impresionista, en los estudios del fotógrafo Nadar"
    });
});

app.get('/Velazquez', (req, res)=>{
    res.render('Diego Rodriguez', {
        autor : 'Jonathan Liens',
        year : new Date().getFullYear(),
        title : 'Diego Rodríguez de Silva y Velázquez',
        Reseña :"Nació en Sevilla el 6 de junio de 1599 conocido como Diego Velázquez , fué un pintor Barroco considerado uno de los mas grandes de la pintura española , y figura indiscutible en la pintura universal.  Pasó sus primeros años en Sevilla donde desarrollo un estilo naturalista influenciado por Caravaggio. Se mudo a Madrid y a los 24 años fue nombrado pintor del rey, y 4 años mas tarde a pintor de cámara , el cargo mas importante en los pintores del rey. A esto se dedico el resto de su vida, hacía retratos y cuadros para adornar la casa real. Su estilo evolucionó hacia una pintura de gran luminosidad con pinceladas rápidas y sueltas.  Este estilo se desarrollo gracias a el estudio de los pintores reales y su viaje a Italia donde estuvo estudiando la pintura antigua y la contemporánea. En su última década tenia un dominio perfecto de la luz, murió el día 6 de agosto de 1660 en Madrid" 
    });
});

//Arrancamos el servisdor web
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
});
