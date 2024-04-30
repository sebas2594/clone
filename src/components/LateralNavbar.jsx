import Avatar from "./Avatar";

const LateralNavbar = () => {
  let menu = [
    {
      name: "Inicio",
      enlace: "..",
    },
    {
      name: "Proyectos",
      enlace: "..",
    },
    {
      name: "Planeación",
      enlace: "..",
    },
    {
      name: "Equipo",
      enlace: "..",
    },
    {
      name: "Calendario",
      enlace: "..",
    },
  ];

  let options = [];
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].name === "Inicio") {
      options.push(
        <div className="border-b border-zinc-500 p-2 hover:bg-neutral-300 hover:rounded-t-lg">{`${menu[i].name}`}</div>
      );
    } else {
      options.push(
        <div className="border-b border-zinc-500 p-2 hover:bg-neutral-300 ">{`${menu[i].name}`}</div>
      );
    }
  }

  return (
    <>
      <div className="p-8 flex-col">
        <div className="border-b-2 border-indigo-600 mb-3 pb-4 px-2 flex justify-between">
          <div className="flex-col font-thin">
            <p>Sebastian Acuña Rodriguez</p>
            <p>Administrator</p>
            <p>sebas2594@gmail.com</p>
          </div>
          <div className="flex justify-center items-center">
            <Avatar />
          </div>
        </div>
        <div>{options}</div>
      </div>
    </>
  );
};

export default LateralNavbar;
