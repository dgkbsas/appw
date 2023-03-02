"use client";
import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

//styles
import "./style.css";
import "../../globals.css";

//JSON
import dxiRM from "../../JSON/dxi-rm.json";
import dxiTC from "../../JSON/dxi-tc.json";

//components455
import Contexto from "@/app/context/Contexto";

export default function dxiPage({ children }) {
  const searchParams = useSearchParams();
  const title = searchParams.get("titulo");
  const seccion = searchParams.get("seccion");

  //get Context values and functions
  const { dataItemsDxI, setModalidadDxI, setDataItemsDxI, modalidadDxI, sitioSelected } = useContext(Contexto);

  const [downloaded, setDownloaded] = useState(false);

  //Set data of selected "sitio"
  useEffect(() => {
    funcionSet();
  }, [sitioSelected, modalidadDxI]);

  const funcionSet = () => {
    // let dataFiltrada = dataInstitucion.sitios.filter((item) => item.id === sitioSelected);
    // let filtradodxi = dataFiltrada[0].dxi;
    if (modalidadDxI === "tc") {
      setDataItemsDxI(dxiTC);
      // setDataItemsDxI(filtradodxi.tc);
    } else if (modalidadDxI === "rm") {
      setDataItemsDxI(dxiRM);
      // setDataItemsDxI(filtradodxi.rm);
    }
    setDownloaded(true);
  };

  //Set data to be rendered by item selected
  function handleClickModalidad(event) {
    setModalidadDxI(event.target.value);
  }

  return (
    <>
      <section className="mainSection" id="main-section-mobile">
        {downloaded ? (
          <div className="innerContainerPrincipal">
            <div className="containerSettingsResponsive  margenesLaterales" id="container-settings-responsive-mobile">
              <div className="containerLineaSet">
                <p>Modalidad:</p>
                <label htmlFor="rmmobile">
                  <input
                    type="radio"
                    name="modalidadResp"
                    id="rmmobile"
                    value="rm"
                    className="radioButtonSitio"
                    defaultChecked
                    onClick={handleClickModalidad}
                  />
                  RM
                </label>
                <label htmlFor="tcmobile">
                  <input type="radio" name="modalidadResp" id="tcmobile" value="tc" className="radioButtonSitio" onClick={handleClickModalidad} />
                  TC
                </label>
              </div>
              <div className="containerLineaSet">
                <p>Rango temporal analizado:</p>
                <p className="radioButtonSitio">ÚLTIMO MES</p>
                {/* <label htmlFor="3meses">
              <input type="radio" name="rangos" value="3meses" id="3meses" className="radioButtonSitio" defaultChecked />
              ÚLTIMOS 3 MESES
            </label> */}
              </div>
              <div className="containerLineaSet">
                <p>Última carga de datos: </p>
                {dataItemsDxI[0] ? <p>{dataItemsDxI[0].ultimaCarga}</p> : null}
              </div>
            </div>
            <div className="containerSettings" id="display-none-mobile">
              <div className="containerLineaSet">
                <p>Modalidad:</p>
                <label htmlFor="rm">
                  <input
                    type="radio"
                    name="modalidad"
                    id="rm"
                    value="rm"
                    className="radioButtonSitio"
                    defaultChecked
                    onChange={handleClickModalidad}
                  />
                  RESONANCIA MAGNÉTICA
                </label>
                <label htmlFor="tc">
                  <input type="radio" name="modalidad" id="tc" value="tc" className="radioButtonSitio" onChange={handleClickModalidad} />
                  TOMOGRAFÍA COMPUTADA
                </label>
              </div>
              <div className="containerLineaSet">
                <p>Rango temporal analizado:</p>
                <label htmlFor="3meses">
                  <input type="radio" name="rangos" value="3meses" id="3meses" className="radioButtonSitio" defaultChecked />
                  ÚLTIMO MES
                </label>
              </div>
              <div className="containerLineaSet">
                <p>Última carga de datos: </p>
                {dataItemsDxI[0] ? <p>{dataItemsDxI[0].ultimaCarga}</p> : null}
              </div>
            </div>
            <br />
            {children}
            <br />
          </div>
        ) : null}
      </section>
    </>
  );
}
