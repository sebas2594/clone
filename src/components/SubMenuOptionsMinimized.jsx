const SubMenuOptionsMinimized = () => {
  let menu = [
    {
      name: "Tasks",
      enlace: "..",
    },
    {
      name: "Milestones",
      enlace: "..",
    },
    {
      name: "Messages",
      enlace: "..",
    },
    {
      name: "Files",
      enlace: "..",
    },
    {
      name: "Time",
      enlace: "..",
    },
    {
      name: "Comments",
      enlace: "..",
    },
  ];
  let options = [];

  for (let i = 0; i < menu.length; i++) {
    options.push(
      <a
        href="#"
        className="block py-1 px-2 text-base hover:bg-neutral-300 "
      >{`${menu[i].name}`}</a>
    );
  }
  return options;
};

export default SubMenuOptionsMinimized;
