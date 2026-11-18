
export const hero = {
  titulo: "Todo el mundo cabe en una mesa",
  texto: "Documentación, videos y equipo del proyecto Mundo a la Carta.",
};

export const proposito = {
  titulo: "Diseñar el sistema detrás de la experiencia",
  intro:
    "El presente sitio reúne la documentación, los diagramas y el prototipo de Mundo a la Carta. Su propósito es mostrar cómo se modeló, paso a paso, un restaurante que convierte la cena en un viaje del modelado de negocio al modelado del sistema que lo hace posible.",
  puntos: [
    { titulo: "Qué buscamos", texto: "Diseñar el sistema que sostiene la experiencia: reservación, recepción e inmersión del cliente, además de la gestión de clientes, platillos, empleados y souvenirs." },
    { titulo: "Cómo lo hicimos", texto: "Con UML, Design Thinking, Visual Studio Code, GitHub, React + Vite, JavaScript: un modelado de negocio de seis casos de uso que maduró en un modelado de sistema de 16 Casos de Uso." },
    { titulo: "Qué mostramos", texto: "Los documentos de Modelado de Negocio, Modelado de Sistema y tres videos muestran el funcionamiento del programa, los diagramas de actividades y el prototipo, culminando con el software programado y funcional al 100%" },
  ],
};

// youtubeId: lo que va después de v= en el link  |  archivo: video en public/videos  |  miniatura: imagen opcional 
export const videos = [
  { titulo: "Funcionamiento del Programa", descripcion: "Recorrido por el programa en uso.", youtubeId: "", driveId: "1QjV5e-rDEuK0vueTOifdTQYXl3dVe2bu", archivo: "", miniatura: "" },
  { titulo: "Prototipo", descripcion: "Demostración del prototipo.", youtubeId: "", driveId: "1ogsH3H3YB7F78OXlEcTYVC9URMkbjEIE", archivo: "", miniatura: "" },
  { titulo: "Diagramas", descripcion: "Explicación de los diagramas del sistema.", youtubeId: "", driveId: "1PcS7BUnzS9rlsi0FJX64xcvLj7-L8eCG", archivo: "", miniatura: "" }
];

// archivo: PDF dentro de public/docs  |  vista: imagen opcional dentro de public/docs
export const documentos = [
  { titulo: "Modelado de negocio", descripcion: "Documento Realizado en Segundo Semestre.", archivo: "/docs/ModeladoNegocio.pdf", vista: "/docs/ModeladoNegocio.pdf" },
  { titulo: "Modelado de sistema", descripcion: "Requerimientos, casos de uso y arquitectura del programa.", archivo: "/docs/ModeladoSistema.pdf", vista: "/docs/ModeladoSistema.pdf " },
];

// foto: ruta dentro de public (ej. "/equipo/ana.jpg")
// foto: imagen grupal dentro de public/equipo (si la dejas vacía "", no se muestra)
// integrantes: un nombre entre comillas por línea, separados por coma
export const equipo = {
  foto: "/equipo/grupo.jpeg",
  integrantes: [
    "Lider de proyecto: Maria Jose Espinosa Minjares",
    "Doctora: Martha Patricia Hernandez Zamora",
    "Armando Imanol Aguilar Espiricueto",
    "Erick Samuel Cabrera Rodriguez",
    "Uriel Axel Calyeca Perez",
    "Josue de la Cruz Berruecos",
    "Angel Eduardo Fong Estrada",
    "Jesus Elias Guerrero Coral",
    "Maximiliano Gutierrez Hernandez",
    "Carlos Lopez Xochitecatl",
    "Yerik Ian Lugo Vazquez",
    "Amauri Mendez Montejo",
    "Christian Morales Sampedro",
    "Joe Enrique Panday Barreto",
    "Samuel Ramirez Bueno",
    "Nicole Shecid Reyes Gonzalez",
    "Adolfo Salinas Bautista",
    "Yeymar Jassyel Sanchez Herrera",
    "Zahid Serna Cebrero",
    "Lilia Juncal Serrano Duran",
    "Victor Uriel Torres Fajardo",
    "Tiffany Yusani Toxtle Garcia",
    "Daniel Trejo Galindo",
    "Guillermo Zeguer Montini"
  ],
};
