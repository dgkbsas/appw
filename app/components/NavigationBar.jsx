import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";

//components
import Contexto from "../context/Contexto";

// styles
import "./navigation-bar.css";

// images
import logo from "../assets/statics/logodgk.png";

export default function NavegationBar() {
  const { links } = useContext(Contexto);

  return (
    <div className="navBar " id="display-none-mobile">
      <Link href={{ pathname: "/", query: { titulo: "Página de Incio", seccion: "INICIO" } }}>
        <Image className="logoNav" src={logo} alt="/" />
      </Link>
      <ul className="navigation">
        {links.map(({ label, route, labelChica, title, section, index }) => (
          <li>
            <div className="tooltip">
              <Link href={{ pathname: route, query: { titulo: title, seccion: section } }} key={index}>
                {labelChica}
              </Link>
              <span className="tooltiptext">{label}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
