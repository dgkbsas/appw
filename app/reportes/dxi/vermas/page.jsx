"use client";
import { useContext } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

//styles
import "../vermas/ver-mas.css";
import "@/app/globals.css";

//components
import Contexto from "@/app/context/Contexto";
import VerMasItem from "./components/VerMasItem";

//images
import goBackLogo from "@/app/assets/statics/icons/arrow_back_FILL0_wght400_GRAD0_opsz48.svg";

export default function verMasPage() {
  //get Context values and functions
  const { dataItemsDxI } = useContext(Contexto);

  const searchParams = useSearchParams();
  const title = searchParams.get("titulo");
  const seccion = searchParams.get("seccion");
  const step = searchParams.get("step");
  const itemIndex = searchParams.get("index");

  console.log(dataItemsDxI[itemIndex].verMas);

  return (
    <>
      <div className="containerStepCard">
        {dataItemsDxI[0].modalidad === "rm" && (
          <p className="tituloModalidad itemsTituloVermas" id="titulo-modalidad-mobile" style={{ marginBottom: "8px" }}>
            <Link
              title="Volver Atras"
              className="btnVolver"
              href={{
                pathname: "/reportes/dxi",
                query: { titulo: title, seccion: seccion },
              }}
            >
              <Image className="goBackLogo" src={goBackLogo} alt="Volver Atras"></Image>
              <span id="display-none-mobile">RESONANCIA MAGNÉTICA</span>
              <span className="tituloModalidad-mobile" id="display-flex-mobile">
                RM
              </span>
            </Link>
            <span className="tituloStep">⏐ {step}</span>
          </p>
        )}
        {dataItemsDxI[0].modalidad === "tc" && (
          <p className="tituloModalidad itemsTituloVermas" id="titulo-modalidad-mobile" style={{ marginBottom: "8px" }}>
            <Link
              title="Volver Atras"
              className="btnVolver"
              href={{
                pathname: "/reportes/dxi",
                query: { titulo: title, seccion: seccion },
              }}
            >
              <Image className="goBackLogo" src={goBackLogo} alt="Volver Atras"></Image>
              <span id="display-none-mobile">TOMOGRAFÍA COMPUTADA</span>
              <span className="tituloModalidad-mobile" id="display-flex-mobile">
                TC
              </span>
            </Link>
            <span className="tituloStep">⏐ {step}</span>
          </p>
        )}
        {dataItemsDxI[itemIndex].verMas ? <VerMasItem data={dataItemsDxI[itemIndex].verMas} /> : null}
      </div>
    </>
  );
}
