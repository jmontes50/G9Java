const RegisterPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card w-[400px] shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-2xl font-semibold text-center">
            Registrarse
          </h2>
          <form className="mt-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Nombre completo:</legend>
              <input type="text" className="input w-full" placeholder="Juan Perez" />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email:</legend>
              <input type="email" className="input w-full" placeholder="example@domain.com" />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Contraseña:</legend>
              <input type="password" className="input w-full" placeholder="mínimo 6 caracteres" />
            </fieldset>
            <button className="btn btn-accent w-full mt-3">
              Confirmar Registro
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
