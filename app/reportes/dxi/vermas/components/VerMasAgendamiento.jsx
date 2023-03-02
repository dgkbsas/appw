"use client";
import { useEffect, useState, useContext } from "react";

//components
import Contexto from "@/app/context/Contexto";
import ItemAgendamiento01 from "./componentsAgendamiento/ItemAgendamiento01";
import ItemAgendamiento02 from "./componentsAgendamiento/ItemAgendamiento02";
import ItemAgendamiento03 from "./componentsAgendamiento/ItemAgendamiento03";

//JSON
import dxiRM from "@/app/JSON/dxi-rm.json";
import dxiTC from "@/app/JSON/dxi-tc.json";

export default function VerMasEspera({ ubicacion }) {
  //get Context values and functions
  const { modalidadDxI } = useContext(Contexto);

  const [datosSegunModalidad, setDatosSegunModalidad] = useState("");
  const [datosVerMas, setDatosVerMas] = useState("");

  useEffect(() => {
    if (modalidadDxI === "tc") {
      setDatosSegunModalidad(dxiTC[ubicacion]);
      setDatosVerMas(dxiTC[ubicacion].verMas);
    } else if (modalidadDxI === "rm") {
      setDatosSegunModalidad(dxiRM[ubicacion]);
      setDatosVerMas(dxiRM[ubicacion].verMas);
    }
  }, [modalidadDxI]);

  return (
    <>
      <ItemAgendamiento01 datos={datosVerMas[0]} dataDxI={datosSegunModalidad} />
      <ItemAgendamiento02 datos={datosVerMas[1]} dataDxI={datosSegunModalidad} />
      <ItemAgendamiento03 datos={datosVerMas[2]} dataDxI={datosSegunModalidad} />
    </>
  );
}
