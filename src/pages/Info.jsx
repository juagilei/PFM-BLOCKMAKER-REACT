export default function Info() {
  return (
    <section className="flex justify-around p-10">
      <div className="text-gray-400">
        <div>
          <h1 className="text-2xl font-bold text-decoration-line: underline py-5">
            Si quieres darte de alta como cliente:
          </h1>
          <p> Tan solo tienes que ponerte en contacto</p>
          <p> con nosotros a través del siguiente email:</p>
          <a href="clientes@gmail.com" className="text-blue-500">
            clientes@gmail.com
          </a>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-decoration-line: underline py-5">
            {" "}
            Si quieres trabajar con nosotros:
          </h1>
          <p> Tan solo tienes que solicitarlo a</p>
          <p> través del siguiente email:</p>
          <a href="prestamista@gmail.com" className="text-blue-500">
            prestamista@gmail.com
          </a>
        </div>
      </div>
      <img
        src="../../public/mano_blockchain.jpeg"
        alt="imagen mano"
        width={500}
      className="hidden md:flex "/>
    </section>
  );
}
