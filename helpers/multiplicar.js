const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try {

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } X ${ i } = ${ base * i }\n`;
            consola += colors.green(`${ base } X ${ i } = ${ base * i }\n`);
        }

        if (listar) {

            console.log('===========================');
            console.log('  Tabla del'.red, base, 'hasta el'.red, hasta);
            console.log('===========================');
            console.log(consola)

        }

        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);

        return `tabla - ${ base }.txt `.rainbow;

    } catch (err) {

        throw err;

    }


}

module.exports = {
    crearArchivo
}