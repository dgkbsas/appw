"use client";
import { useEffect, useState, useContext } from "react";

//components
import Contexto from "@/app/context/Contexto";
import ItemVolumen01 from "./componentsVolumen/ItemVolumen01";
import ItemVolumen02 from "./componentsVolumen/ItemVolumen02";
import ItemVolumen03 from "./componentsVolumen/ItemVolumen03";

//JSON
import dxiRM from "@/app/JSON/dxi-rm.json";
import dxiTC from "@/app/JSON/dxi-tc.json";

//styles
import "./ver-mas-item.css";

export default function VerMasVolumen({ ubicacion }) {
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
      <ItemVolumen01 datos={datosVerMas[0]} dataDxI={datosSegunModalidad} />
      <ItemVolumen02 datos={datosVerMas[1]} dataDxI={datosSegunModalidad} />
      <ItemVolumen03 datos={datosVerMas[2]} dataDxI={datosSegunModalidad} />
    </>
  );
}
