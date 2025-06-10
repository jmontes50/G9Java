const Features = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-8 px-4 text-center">
      <div className="flex flex-col items-center">
        <i className="fas fa-box-open text-3xl text-primary mb-2"></i>
        <h4 className="font-bold">Descuentos</h4>
        <p className="text-sm text-gray-500">Nuevas ofertas cada semana</p>
      </div>
      <div className="flex flex-col items-center">
        <i className="fas fa-shipping-fast text-3xl text-primary mb-2"></i>
        <h4 className="font-bold">Envío Gratis</h4>
        <p className="text-sm text-gray-500">
          100% gratis para todos los pedidos
        </p>
      </div>
      <div className="flex flex-col items-center">
        <i className="fas fa-headset text-3xl text-primary mb-2"></i>
        <h4 className="font-bold">Soporte 24/7</h4>
        <p className="text-sm text-gray-500">
          Nos preocupamos por tu experiencia
        </p>
      </div>
      <div className="flex flex-col items-center">
        <i className="fas fa-shield-alt text-3xl text-primary mb-2"></i>
        <h4 className="font-bold">Pago Seguro</h4>
        <p className="text-sm text-gray-500">Método de pago 100% seguro</p>
      </div>
    </div>
  );
};

export default Features;
