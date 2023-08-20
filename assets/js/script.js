const propiedadesJSON = [
{
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "./assets/imgs/01.jpg",
    rooms:2,
    m:170
},
{
    name: "Casa de playa",
    description: "Despierta tus dias oyendo el oceano",
    src: "./assets/imgs/02.jpg",
    rooms: 2,
    m: 130
    
},
{
    name:"Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src:"./assets/imgs/03.jpg",
    rooms: 1,
    m: 80
},
{
    name: "Casa rodante",
    description: "Conviertete en un nomada del mundo sin salir de tu casa",
    src: "./assets/imgs/04.jpg",
    rooms: 1,
    m:6
},
{
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src:"./assets/imgs/05.jpg",
    rooms: 3,
    m: 200
},
{
    name: "Mansion",
    description: "Vive una vida lujosa en la mansion de tus sueños",
    src:  "./assets/imgs/06.jpg",
    rooms: 5,
    m:500
}
];

  const inputs = Array.from(document.querySelectorAll("nav input"));
  const btn = document.querySelector("nav button");
  const propiedadesSection = document.querySelector(".propiedades");
  const totalSpan = document.querySelector("#Propiedades span");
  
  btn.addEventListener("click", () => {
    const [
      { value: cuartos },
      { value: metrosMin },
      { value: metrosMax }
    ] = inputs;
    if (inputs.filter(({ value }) => !value).length) {
      alert("Faltan campos por llenar");
      return false;
    }
    const propiedades = propiedadesJSON.filter(
      ({ rooms, m }) => rooms >= cuartos && m >= metrosMin && m <= metrosMax
    );
    fillPropiedades(propiedades);
  });
  
  const fillPropiedades = (propiedades = propiedadesJSON) => {
    clearPropiedades();
    totalSpan.innerHTML = propiedades.length;
    propiedades.forEach((propiedad) => {
      const propiedadTemplate = prepareTemplatePropiedad(propiedad);
      propiedadesSection.innerHTML += propiedadTemplate;
    });
  };
  
  const prepareTemplatePropiedad = ({ name, description, src, rooms, m }) => {
    return `
    <div class="propiedad">
        <div class="img" style="background-image: url('${src}')"></div>
        <section>
            <h5>${name}</h5>
            <div class="d-flex justify-content-between">
                <p>Cuartos: ${rooms}</p>
                <p>Metros: ${m}</p>
            </div>
            <p class="my-3">${description}</p>
            <button class="btn btn-info ">Ver más</button>
        </section>
    </div>
            `;
  };
  
  const clearPropiedades = () => (propiedadesSection.innerHTML = "");
  
  fillPropiedades();
  