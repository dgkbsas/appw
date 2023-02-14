"use client";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState, useContext } from "react";

//components
import Contexto from "../context/Contexto";

// styles
import "./nav-menu-mobile.css";

// images
import logoMenu from "@/app/assets/statics/icons/menu_FILL0_wght400_GRAD0_opsz48.svg";
import locoClose from "@/app/assets/statics/icons/close_FILL0_wght200_GRAD0_opsz48.svg";
import logoWuru from "@/app/assets/statics/logo.svg";

export default function NavegationBar() {
  const { links, sitios, dataInstitucion, sitioSelected, setSitioSelected } = useContext(Contexto);

  //Menu Sandwich
  const [menuVisible, setMenuVisble] = useState(false);

  // search url params to get title and section
  const searchParams = useSearchParams();
  const title = searchParams.get("titulo");
  const section = searchParams.get("seccion");

  // Print and Share functions
  function functionPrint(event) {
    alert("print " + event.target.name);
  }
  function functionShare(event) {
    alert("share " + event.target.name);
  }

  //show or hide menu mobile
  function handleShowMenu() {
    {
      !menuVisible ? setMenuVisble(true) : setMenuVisble(false);
    }
  }

  function checkSitio(value) {
    if (value === sitioSelected) {
      return true;
    }
  }

  // get selection and store it on localStorage
  function handleClickSitioSelector(event) {
    localStorage.setItem("sitio", event.target.value);
    setSitioSelected(event.target.value);
  }

  return (
    <>
      <div className="containerSettingsMobile" id="container-settings-mobile-mobile">
        <div className="containerHeader margenesLaterales">
          <Image className="logoWuruMobile" src={logoWuru} alt="logo Wúru" />
        </div>
        <div className="containerInstitucion margenesLaterales">
          <p className="tituloIntitucion">INTITUCIÓN</p>
          <p className="nombreInstitucion">{dataInstitucion.institucion}</p>
        </div>
        {section ? <h5 className="tituloTab margenesLaterales">{section}</h5> : <h5 className="tituloTab margenesLaterales">INICIO</h5>}
        {title ? <p className="tituloSeccion margenesLaterales">{title}</p> : <p className="tituloSeccion margenesLaterales">Página de Inicio</p>}
        <select name="sitios" id="sitiosSelector" className="selectorSitioMobile" onChange={handleClickSitioSelector}>
          {sitios.map((item) => (
            <option key={item.index} type="radio" name="sitios" value={item.value} id={item.id} selected={checkSitio(item.value)}>
              {item.titleSitio}
            </option>
          ))}
        </select>
        {!menuVisible && <Image className="logoMenuMobile" src={logoMenu} alt="logo menu" onClick={handleShowMenu} />}
        {menuVisible && (
          <div className="containerNavMenuMobile">
            <Image src={locoClose} className="btnCerrarMenuMobile" onClick={handleShowMenu} alt="boton cerrar" />
            <ul className="navigationMenu">
              {links.map((item) => (
                <li className="itemMenuMobile" key={item.index}>
                  <Link onClick={handleShowMenu} href={{ pathname: item.route, query: { titulo: item.title, seccion: item.section } }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
