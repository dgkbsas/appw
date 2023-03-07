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

export default function ItemInformes02({ datos, dataDxI }) {
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
                    <span className="infoValor01" style={{ width: " 160px", marginRight: "24px" }}>
                      {datos.infoValor01}
                    </span>{" "}
                    <span className="infoValor02">{datos.infoValor02}</span>
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
              De los procedimientos con mas informes entregados, ¿Que orígen tienen y cuál es el porcentaje de cumpliento?
            </p>
            <div
              className="containerInfoPreguntas-vermas"
              style={{
                backgroundColor: "#f8f8f8",
                display: "flex",
                alignItems: "flex-start",
                borderRadius: "5px",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <p
                style={{
                  margin: 1,
                  fontSize: "14px",
                  fontWeight: "400",
                  marginBottom: "4px",
                  marginTop: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <span>
                  <strong>PRINCIPALES</strong> PROCEDIMIENTOS INFORMADOS
                </span>
                <span style={{ fontSize: "11px", marginLeft: "16px", opacity: "0.5" }}>
                  Datos pertenecientes al {datos.month}/{datos.year}
                </span>
              </p>
              <div
                className="containerVolumen02"
                style={{
                  width: "100%",
                  borderRadius: "5px",
                  overflow: "hidden",
                  marginTop: "4px",
                  marginBottom: "4px",
                  border: "solid 0.5px #1c1c1c20",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    alignItems: "center",
                    gridTemplateColumns: "1.1fr .5fr .5fr .7fr",
                    color: "#1c1c1c",
                    fontSize: "10px",
                    fontWeight: "500",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      border: "solid 0.5px #1c1c1c20",
                      backgroundColor: "#D8D8D8",
                      height: "22px",
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "16px",
                    }}
                  >
                    PROCEDIMIENTOS
                  </p>
                  <p
                    style={{
                      margin: 0,
                      border: "solid 0.5px #1c1c1c20",

                      backgroundColor: "#D8D8D8",
                      height: "22px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    ORÍGEN
                  </p>
                  <p
                    style={{
                      margin: 0,
                      border: "solid 0.5px #1c1c1c20",

                      textAlign: "center",
                      backgroundColor: "#D8D8D8",
                      height: "22px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    % CUMPLIMIENTO
                  </p>
                  <p
                    style={{
                      margin: 0,
                      border: "solid 0.5px #1c1c1c20",

                      textAlign: "center",
                      backgroundColor: "#D8D8D8",
                      height: "22px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    TIEMPO DE ELABORACIÓN (Hs.)
                  </p>
                </div>
                {datos.data != "" ? (
                  <>
                    {datos.data.map((item) => (
                      <div
                        style={{
                          display: "grid",
                          alignItems: "center",
                          gridTemplateColumns: "1.1fr .5fr .5fr .7fr",
                          color: "#1c1c1c",
                          fontSize: "12px",
                          fontWeight: "700",
                        }}
                      >
                        <p
                          style={{
                            margin: 0,
                            border: "solid 0.5px #1c1c1c20",
                            height: "26px",
                            display: "flex",
                            alignItems: "center",
                            paddingLeft: "16px",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                          }}
                        >
                          {item.procedimiento}
                        </p>
                        <p
                          style={{
                            margin: 0,
                            border: "solid 0.5px #1c1c1c20",
                            height: "26px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {item.origen}
                        </p>
                        <p
                          style={{
                            margin: 0,
                            border: "solid 0.5px #1c1c1c20",
                            height: "26px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "16px",
                          }}
                        >
                          {item.cumplimiento}%
                        </p>
                        <p
                          style={{
                            margin: 0,
                            border: "solid 0.5px #1c1c1c20",
                            height: "26px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {item.tiempoElaboracion}
                        </p>
                      </div>
                    ))}
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
