const { request , response } = require('express');

const esAdminRole = (req = request, res = response, next) => {

   if( !req.user) {
      return res.status(500).json({
         msg: 'Se quiere verificar el rol sin validar el token primero'
      })
   }

   const { rol, nombre} = req.user;

   if( rol !== 'ADMIN_ROLE'){
      return res.status(401).json({
         msg: `${ nombre } no es administrador - No puede hacer esto`
      });
   }

   next();
}

const tieneRole = ( ...roles ) => {

   return (req = request, res = response, next) => {

      if( !req.user) {
         return res.status(500).json({
            msg: 'Se quiere verificar el rol sin validar el token primero'
         })
      }

      if( !roles.includes( req.user.rol )){
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
   const rolSolicitante = req.user.rol;
   
   const idsIguales = (id == idSolicitante);
   
   const esAdmin = (rolSolicitante == 'ADMIN_ROLE');

   if (!esAdmin){

      if( !idsIguales){
         return res.status(400).json({
            msg: `No es el propietario de los datos`,
            rolSolicitante
         })
      } 
      
   }
   

   next();
}

module.exports = {
   esAdminRole,
   tieneRole,
   propietarioDatos
}