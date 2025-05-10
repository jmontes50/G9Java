const validarPermisos = (rol = "Persona", nombre = "Juan") => {
  if (rol === "admin") {
    console.log(rol + " Tiene todos los permisos");
  } else if (rol === "user") {
    console.log(rol + " Puede ver su informacion");
  } else {
    console.log(rol + " No tiene acceso");
  }
};

validarPermisos();
validarPermisos("admin");