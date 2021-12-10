export const TiposBasicos = () => {
  const nombre: string = "Mariana";
  const edad: number = 21;
  const estaActivo: boolean = true;

  const poderes: string[] = ["Velocidad", "Volar", "Respirar en el agua"];

  return (
    <>
      <h3>Tipos básicos</h3>
      {nombre}, {edad}, {{ estaActivo } ? "activo" : "inactivo"}
      {poderes.join(", ")}
    </>
  );
};
