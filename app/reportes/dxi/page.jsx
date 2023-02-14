"use client";
import Image from "next/image";
import { useContext } from "react";
import { useSearchParams } from "next/navigation";

//styles
import "./style.css";
import "../../globals.css";

//components455
import DxiSteps from "./components/DxiSteps";
import Contexto from "@/app/context/Contexto";

//images
import dotIcon from "@/app/assets/statics/icons/radio_button_checked_FILL0_wght400_GRAD0_opsz48.svg";

export default function dxiPage() {
  const searchParams = useSearchParams();
  const title = searchParams.get("titulo");
  const seccion = searchParams.get("seccion");

  //get Context values and functions
  const { sitioSelected, dataItemsDxI } = useContext(Contexto);

  return (
    <>
      {dataItemsDxI !== null ? (
        <>
          {dataItemsDxI[0].modalidad === "rm" && (
            <p className="tituloModalidad" id="titulo-modalidad-mobile" style={{ marginBottom: "8px" }}>
              RESONANCIA MAGNÉTICA
            </p>
          )}
          {dataItemsDxI[0].modalidad === "tc" && (
            <p className="tituloModalidad" id="titulo-modalidad-mobile" style={{ marginBottom: "8px" }}>
              TOMOGRAFÍA COMPUTADA
            </p>
          )}
          <div className="containerStepCard">
            <div className="lineVertical" id="line-vertical-mobile"></div>
            <p className="startLine">▼</p>
            <p className="endLine" id="end-line-mobile">
              ▲
            </p>
            <div className="pasosFlecha" id="pasos-flecha-mobile">
              <p className="middleLine">▼</p>
              <p className="middleLine">▼</p>
              <p className="middleLine">▼</p>
              <p className="middleLine">▼</p>
              <p className="middleLine">▼</p>
            </div>
            <div className="stepCard" id="step-card-mobile">
              <DxiSteps
                dataItem={dataItemsDxI[1]}
                itemIndex="1"
                btn={true}
                title={title}
                seccion={seccion}
                modalidad={dataItemsDxI[0].modalidad}
                sitio={sitioSelected}
              />
            </div>
            <div className="stepCard" id="step-card-mobile">
              <Image className="dotIconStep" src={dotIcon} alt="step" />
              <DxiSteps
                dataItem={dataItemsDxI[2]}
                itemIndex="2"
                btn={true}
                title={title}
                seccion={seccion}
                modalidad={dataItemsDxI[0].modalidad}
                sitio={sitioSelected}
              />
            </div>
            <div className="stepCard" id="step-card-mobile">
              <Image className="dotIconStep" src={dotIcon} alt="step" />
              <DxiSteps
                dataItem={dataItemsDxI[3]}
                itemIndex="3"
                btn={true}
                title={title}
                seccion={seccion}
                modalidad={dataItemsDxI[0].modalidad}
                sitio={sitioSelected}
              />
              <br />
              <DxiSteps
                dataItem={dataItemsDxI[4]}
                itemIndex="4"
                btn={false}
                title={title}
                seccion={seccion}
                modalidad={dataItemsDxI[0].modalidad}
                sitio={sitioSelected}
              />
            </div>
            <div className="stepCard" id="step-card-mobile">
              <Image className="dotIconStep" src={dotIcon} alt="step" />
              <DxiSteps
                dataItem={dataItemsDxI[5]}
                itemIndex="5"
                btn={true}
                title={title}
                seccion={seccion}
                modalidad={dataItemsDxI[0].modalidad}
                sitio={sitioSelected}
              />
              <br />
              <DxiSteps
                dataItem={dataItemsDxI[6]}
                itemIndex="6"
                btn={false}
                title={title}
                seccion={seccion}
                modalidad={dataItemsDxI[0].modalidad}
                sitio={sitioSelected}
              />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
