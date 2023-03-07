import Image from "next/image";
import Plot from "react-plotly.js";

//styles
//styles
import "../../ver-mas.css";
import "../../../components/dxi-steps.css";
import "@/app/globals.css";

//images
import iconEvoBuena from "@/app/assets/statics/icons/tipoEvolucionBuena.svg";
import iconEvoMala from "@/app/assets/statics/icons/tipoEvolucionMala.svg";
import wIcon from "@/app/assets/statics/logo.svg";

export default function ItemAgendamiento01({ datos, diasEvaluados }) {
  return (
    <>
      {datos != undefined && (
        <div className="containerItemVerMas">
          <header>
            <p className="tituloPreguntaVerMas" id="tituloPreguntaVerMas-Mobile">
              {datos.pregunta}
            </p>
          </header>
          <br />
          <div
            className="containerInfoPreguntas-vermas"
            style={{
              backgroundColor: "#f8f8f8",
              padding: "8px 16px 8px 16px",
              display: "flex",
              alignItems: "flex-start",
              borderRadius: "5px",
              flexDirection: "column",
            }}
          >
            <div className="containerVolumen01" style={{ display: "flex", alignItems: "center", width: "100%" }}>
              <div className="containerVolumen01" style={{ display: "flex", alignItems: "center", width: "100%" }}>
                <div className="containerSuperiorVolumen01" style={{ display: "flex", alignItems: "center", borderRight: "solid 1px #d9d9d9" }}>
                  {datos.tipoEvolucion01 === "buena" && (
                    <div className="containerDato01 verde">
                      <span className="valor01">{datos.valor01}</span>
                    </div>
                  )}
                  {datos.tipoEvolucion01 === "mala" && (
                    <div className="containerDato01 roja">
                      <span className="valor01">{datos.valor01}</span>
                    </div>
                  )}
                  {datos.tipoEvolucion01 === "neutra" && (
                    <div className="containerDato01 neutra">
                      <span className="valor01">{datos.valor01}</span>
                    </div>
                  )}
                  <div className="containerInfo01">
                    <span className="infoValor01">{datos.infoValor01}</span> <span className="infoValor02">{datos.infoValor02}</span>
                  </div>
                </div>
                <div
                  className="containerInferiorVolumen01"
                  style={{ display: "flex", alignItems: "flex-start", flexDirection: "column", marginLeft: "16px" }}
                >
                  {datos.tipoEvolucion02 === "buena" && (
                    <div>
                      <span className="valor02evolucion verde">{datos.valor02evolucion}</span>
                      {datos.tipoIcono === "sube" && <Image className="logoEvo" src={iconEvoBuena} alt="buena Evolución" />}
                      {datos.tipoIcono === "baja" && <Image className="logoEvo" src={iconEvoMala} alt="mala Evolución" />}
                    </div>
                  )}
                  {datos.tipoEvolucion02 === "mala" && (
                    <div>
                      <span className="valor02evolucion roja">{datos.valor02evolucion}</span>
                      {datos.tipoIcono === "sube" && <Image className="logoEvo" src={iconEvoBuena} alt="buena Evolución" />}
                      {datos.tipoIcono === "baja" && <Image className="logoEvo" src={iconEvoMala} alt="mala Evolución" />}
                    </div>
                  )}
                  {datos.tipoEvolucion02 === "neutra" && (
                    <div>
                      <span className="valor02evolucion neutra">{datos.valor02evolucion}</span>
                      {datos.tipoIcono === "sube" && <Image className="logoEvo" src={iconEvoBuena} alt="buena Evolución" />}
                      {datos.tipoIcono === "baja" && <Image className="logoEvo" src={iconEvoMala} alt="mala Evolución" />}
                    </div>
                  )}
                  <span className="inforValor02evolucion">{datos.inforValor02evolucion}</span>
                </div>
                <div
                  className="infoBenchmarkVolumen02"
                  style={{
                    marginLeft: "32px",
                    paddingLeft: "32px",
                    paddingRight: "32px",
                    backgroundColor: "#49307d",
                    height: "64px",
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "8px",
                    color: "#fdfdfd",
                  }}
                >
                  <span className="valor03benchmark">{datos.valor03benchmark}</span>
                  <div className="infoBenchmark">
                    <div className="containerSupInfoBench">
                      <Image className="wlogo" src={wIcon} alt="logo W" />
                      <p className="txtBenchmark">BENCHMARK</p>
                    </div>
                    <span className="info01valor03benchmark">{datos.info01valor03benchmark}</span>
                    <span className="info02valor03benchmark">{datos.info02valor03benchmark}</span>
                  </div>{" "}
                </div>
              </div>
            </div>
            <p className="tituloPreguntaVerMas" id="tituloPreguntaVerMas-Mobile" style={{ fontSize: "14px", marginTop: "16px", marginBottom: "8px" }}>
              ¿Cómo se relaciona la cantidad de días de anticipación del turno con la cantidad de ausencias?
            </p>
            <div className="containerVolumen03" style={{ display: "flex", marginTop: "8px", alignItems: "center" }}>
              <div className="containerVolumen02" style={{ position: "relative" }}>
                <Plot data={datos.data} layout={datos.layout} config={datos.config} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
