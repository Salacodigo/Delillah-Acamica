const { request , response } = require('express');

const tieneRole = ( ...roles ) => {

   return (req = request, res = response, next) => {

      if( !req.user) {
         return res.status(500).json({
            msg: 'Se quiere verificar el rol sin validar el token primero'
         })
      }
      const requestRole = req.user.role.dataValues.role;
      console.log({ requestRole })
      if( !roles.includes( requestRole )){
         return res.status(401).json({
            msg: `El servicio requiere uno de estos ${roles}`
         })
      }

      next();
   }
}

const propietarioDatos = async (req = request, res = response,    next) => {

   const { id } = req.params;
   const idSolicitante = req.user.id;
   const requestRole = req.user.role.dataValues.role;
   
   const idsIguales = (id == idSolicitante);
   
   const esAdmin = (requestRole == 'ADMIN_ROLE');

   if (!esAdmin){

      if( !idsIguales){
         return res.status(400).json({
            msg: `No es el propietario de los datos`,
            requestRole
         })
      } 
      
   }
   

   next();
}

module.exports = {
   tieneRole,
   propietarioDatos
}