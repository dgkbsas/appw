"use client";
import { useEffect, useState, useContext } from "react";

//components
import Contexto from "@/app/context/Contexto";
import ItemEspera01 from "./componentsEspera/ItemEspera01";

//JSON
import dxiRM from "@/app/JSON/dxi-rm.json";
import dxiTC from "@/app/JSON/dxi-tc.json";

//styles
import "./ver-mas-item.css";

export default function VerMasEspera({ ubicacion }) {
  // //get Context values and functions
  // const { modalidadDxI } = useContext(Contexto);

  // const [datosSegunModalidad, setDatosSegunModalidad] = useState("");
  // const [datosVerMas, setDatosVerMas] = useState("");

  // useEffect(() => {
  //   if (modalidadDxI === "tc") {
  //     setDatosSegunModalidad(dxiTC[ubicacion]);
  //     setDatosVerMas(dxiTC[ubicacion].verMas);
  //   } else if (modalidadDxI === "rm") {
  //     setDatosSegunModalidad(dxiRM[ubicacion]);
  //     setDatosVerMas(dxiRM[ubicacion].verMas);
  //   }
  // }, [modalidadDxI]);

  return <>{/* <ItemEspera01 datos={datosVerMas[0]} dataDxI={datosSegunModalidad} /> */}</>;
}
