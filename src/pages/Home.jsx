export default function Home() {
  return (
    <div className="bg-black min-h-[60vh]">
      <img src="../../public/bola completo.png" alt="Imagen bola" className=" hidden md:flex " />
      <img src="../../public/sin bola.png" alt="Imagen sin bola" className=" w-auto h-auto md:hidden"/>
    </div>
  );
}
