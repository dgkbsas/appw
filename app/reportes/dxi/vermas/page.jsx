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
import VerMasVolumen from "../vermas/components/VerMasVolumen";
import VerMasEspera from "../vermas/components/VerMasEspera";
import VerMasAgendamiento from "../vermas/components/VerMasAgendamiento";
import VerMasInformes from "../vermas/components/VerMasInformes";

//images
import goBackLogo from "@/app/assets/statics/icons/arrow_back_FILL0_wght400_GRAD0_opsz48.svg";

export default function verMasPage() {
  //get Context values and functions
  const { dataItemsDxI } = useContext(Contexto);

  const searchParams = useSearchParams();
  const title = searchParams.get("titulo");
  const seccion = searchParams.get("seccion");
  const step = searchParams.get("step");
  const ubicacion = searchParams.get("index");

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
        <div className="containerVerMas">
          {ubicacion === "1" && <VerMasAgendamiento ubicacion={ubicacion} />}
          {ubicacion === "2" && <VerMasEspera ubicacion={ubicacion} />}
          {ubicacion === "3" && <VerMasVolumen ubicacion={ubicacion} />}
          {ubicacion === "5" && <VerMasInformes ubicacion={ubicacion} />}
        </div>
      </div>
    </>
  );
}
