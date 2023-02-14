import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useContext } from "react";

//components
import Contexto from "../context/Contexto";

// styles
import "./top-bar-header.css";

// images
import logoPrint from "../assets/statics/icons/print_FILL0_wght400_GRAD0_opsz48.svg";
import logoShare from "../assets/statics/icons/share_FILL0_wght400_GRAD0_opsz48.svg";

export default function TopBarHeader() {
  const { sitios, setSitioSelected, sitioSelected } = useContext(Contexto);

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

  // Function to check which "sitio" its selected on localStorage, and set radioButton as defaultChecked
  function checkSitio(id) {
    if (id === sitioSelected) {
      return true;
    }
  }

  // get selection and store it on localStorage
  function handleClickSitioSelector(event) {
    localStorage.setItem("sitio", event.target.value);
    setSitioSelected(event.target.value);
  }

  return (
    <div className="containerTopBar " id="display-none-mobile">
      <div className="leftHeaderpart">
        {section ? <h5 className="tituloTab">{section}</h5> : <h5 className="tituloTab">INICIO</h5>}
        {title ? <h1 className="tituloSubTab">{title}</h1> : <h1 className="tituloSubTab">Página de Inicio</h1>}
        <div className="selectorSitio">
          {sitios.map((item, index) => (
            <div key={index} className="containerSitio">
              <label htmlFor={item.label}>
                <input
                  onClick={handleClickSitioSelector}
                  type="radio"
                  name="sitiosBar"
                  value={item.value}
                  className="radioButtonSitio"
                  defaultChecked={checkSitio(item.value)}
                  id={item.id}
                />
                {item.titleSitio}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="rightHeaderpart">
        <Image className="logoTopBar" name="Print BTN" src={logoPrint} alt="/" onClick={functionPrint} />
        <Image className="logoTopBar" name="Share BTN" src={logoShare} alt="/" onClick={functionShare} />
      </div>
    </div>
  );
}
