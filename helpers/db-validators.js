const {Role} = require('../models/rol');
const {User} = require('../models/user');


const esRoleValido = async (rol = '') => {

   const existeRol = await Role.findOne({ rol });
   if (!existeRol) {
      throw new Error(`El rol ${rol} no está registrado en la BD`)
   }
};

//Verificar si el correo existe
const emailExiste = async ( correo = '') => {

   const existeEmail = await User.findOne({ correo: correo }); 

   if (existeEmail) {
      throw new Error(`El correo ${correo} ya está registrado en la BD`)
   }
}


//Verificar si el usuario ID existe
const existeUsuarioPorId = async ( id ) => {

   //Verificar si el ID existe
   const user = await User.findById(id);
   if (!user) {
      throw new Error(`El id: ${id} no existe`)
   }
}


module.exports = {
   esRoleValido,
   emailExiste,
   existeUsuarioPorId
}