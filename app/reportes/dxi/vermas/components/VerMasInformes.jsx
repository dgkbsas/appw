"use client";
import { useEffect, useState, useContext } from "react";

//components
import Contexto from "@/app/context/Contexto";
import ItemInformes01 from "./componentsInformes/ItemInformes01";
import ItemInformes02 from "./componentsInformes/ItemInformes02";
import ItemInformes03 from "./componentsInformes/ItemInformes03";

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
      <ItemInformes01 datos={datosVerMas[0]} dataDxI={datosSegunModalidad} />
      <ItemInformes02 datos={datosVerMas[1]} dataDxI={datosSegunModalidad} />
      <ItemInformes03 datos={datosVerMas[2]} dataDxI={datosSegunModalidad} />
    </>
  );
}
