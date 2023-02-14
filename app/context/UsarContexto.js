"use client";
import Contexto from "./Contexto";
import { useState, useEffect } from "react";

//json
import institucionGeneral from "../JSON/institucion-general.json";
import dxiTC from "../JSON/dxi-tc.json";
import dxiRM from "../JSON/dxi-rm.json";

export default function UsarContexto(props) {
  const { children } = props;

  const [sitioSelected, setSitioSelected] = useState("sitio01");
  const [dataInstitucion, setDataInstitucion] = useState(institucionGeneral);
  const [dataItemsDxI, setDataItemsDxI] = useState();
  const [modalidadDxI, setModalidadDxI] = useState("rm");

  //Verify Sitio from LocalStorage on reload
  useEffect(() => {
    let sitio = localStorage.getItem("sitio");
    setDataItemsDxI(dxiRM);
    setSitioSelected(sitio);
  }, []);

  return (
    <Contexto.Provider
      value={{
        dataItemsDxI,
        dataInstitucion,
        sitioSelected,
        modalidadDxI,
        links: dataInstitucion.links,
        sitios: dataInstitucion.sitios,
        setDataItemsDxI,
        setSitioSelected,
        setDataInstitucion,
        setModalidadDxI,
      }}
    >
      {children}
    </Contexto.Provider>
  );
}
