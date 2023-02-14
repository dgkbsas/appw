import Image from "next/image";

//styles
//styles
import "../../ver-mas.css";
import "../../../components/dxi-steps.css";
import "@/app/globals.css";

//images
import iconEvoBuena from "@/app/assets/statics/icons/tipoEvolucionBuena.svg";
import iconEvoMala from "@/app/assets/statics/icons/tipoEvolucionMala.svg";

export default function ItemVolumen01({ datos, dataDxI }) {
  function SumarDatos(array) {
    let sumaTotal = [];
    let cantidadEquipos = array.length;
    for (let i = 0; i < cantidadEquipos; i++) {
      let suma = array[i].y.reduce((a, b) => a + b);
      sumaTotal.push(suma);
    }
    let sumafinal = sumaTotal.reduce((a, b) => a + b);
    return sumafinal;
  }
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
              <div
                className="containerSuperiorVolumen01"
                style={{ display: "flex", alignItems: "center", borderRight: "solid 1px #d9d9d9", width: "550px" }}
              >
                {datos.tipoEvolucion01 === "buena" && (
                  <div className="containerDato01 verde">
                    <span className="valor01" style={{ fontSize: "70px" }}>
                      {SumarDatos(dataDxI.verMas[0].data)}
                    </span>
                  </div>
                )}
                {datos.tipoEvolucion01 === "mala" && (
                  <div className="containerDato01 roja">
                    <span className="valor01" style={{ fontSize: "70px" }}>
                      {SumarDatos(dataDxI.verMas[0].data)}
                    </span>
                  </div>
                )}
                {datos.tipoEvolucion01 === "neutra" && (
                  <div className="containerDato01 neutra">
                    <span className="valor01" style={{ fontSize: "70px" }}>
                      {SumarDatos(dataDxI.verMas[0].data)}
                    </span>
                  </div>
                )}
                <div className="containerInfo01">
                  <span className="infoValor01">{datos.infoValor01}</span>
                  <span className="infoValor02">
                    Total de equipos: <strong>{dataDxI.verMas[0].data.length}</strong>
                  </span>
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
                  backgroundColor: "#49307d70",
                  width: "100%",
                  height: "64px",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  color: "#fdfdfd",
                }}
              >
                <p style={{ fontSize: "12px", fontWeight: "500" }}>BENCHMARK</p>
              </div>
            </div>
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
                TOP <strong>5</strong> DE PROCEDIMIENTOS
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
                  gridTemplateColumns: "1.3fr .3fr .6fr .4fr .4fr .2fr",
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
                  PROCEDIMIENTO
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
                  VOLUMEN
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
                  DURACIÓN PLANIFICADA (min)
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
                  DURACIÓN REAL (min)
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
                  % SOBRESTIMADO
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
                  DESVIO
                </p>
              </div>
              {datos.data != "" ? (
                <>
                  {datos.data.map((item) => (
                    <div
                      style={{
                        display: "grid",
                        alignItems: "center",
                        gridTemplateColumns: "1.3fr .3fr .6fr .4fr .4fr .2fr",
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
                        {item.volumen}
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
                        {item.duracionPlanificada}
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
                        {item.duracionReal}
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
                        {item.sobrestimado}
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
                        {item.desvio}
                      </p>
                    </div>
                  ))}
                </>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
