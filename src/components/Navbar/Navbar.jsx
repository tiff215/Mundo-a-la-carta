import "./Navbar.css";

// Links del menú: cada "id" debe existir como id de una sección en pages/inicio.jsx
const links = [
  { id: "inicio", label: "Inicio" },
  { id: "proposito", label: "Propósito" },
  { id: "documentos", label: "Documentos" },
  { id: "videos", label: "Videos" },
  { id: "equipo", label: "Equipo" },
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <h1 className="navbar__brand">Mundo a la Carta</h1>
        <nav className="navbar__nav">
          <ul className="navbar__list">
            {links.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
