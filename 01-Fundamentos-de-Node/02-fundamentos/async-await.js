const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];


const getEmpleado = ( id, callback ) => {

    return new Promise((resolve, reject) => {

        const empleado = empleados.find( e => e.id === id )

        if(empleado){
            resolve(empleado);
        }else{
            reject(`No existe empleado con id ${id}`)
        }
    });

}

const getSalario = ( id, callback ) => {

    return new Promise((resolve, reject) => {

        const salario = salarios.find( e => e.id === id )

        if(salario){
            resolve(salario);
        }else{
            reject(`No existe salario con id ${id}`)
        }
    });
}


const id = 3; 

const getInfoUsuario = async(id) => {


    try {
        const empleado = await getEmpleado(id)
        const salario = await getSalario(id)

        return {
            empleado : empleado,
            salario : salario
        }    

    } catch (error) {
        throw error;
    }

    

}

getInfoUsuario(id)
.then(msj => console.log(msj));

