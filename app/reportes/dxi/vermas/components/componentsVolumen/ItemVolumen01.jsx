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
                <span className="inforValor02evolucion" style={{ marginLeft: "8px" }}>
                  {datos.inforValor02evolucion}
                </span>
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
            <div className="containerVolumen03" style={{ display: "flex", marginTop: "8px", alignItems: "center" }}>
              <div style={{ fontSize: "12px", minWidth: "150px" }}>
                <p style={{ margin: 0 }}>
                  <strong>Todos los equipos</strong>
                </p>
                <p style={{ margin: 0 }}>Distribución semanal</p>
                <p style={{ margin: 0, marginTop: "8px" }}>
                  <strong>PROMEDIO</strong> - Estudios/día
                </p>
                <p style={{ margin: 0, marginTop: "8px" }}>
                  Total días promerdiados: <strong>30</strong>
                </p>
                <p style={{ margin: 0 }}>
                  Total de estudios: <strong>{SumarDatos(datos.data)}</strong>
                </p>
                <p style={{ margin: 0 }}>
                  Total de equipos: <strong>{datos.data.length}</strong>
                </p>
              </div>
              <div className="containerVolumen02" style={{ marginLeft: "32px" }}>
                <Plot data={datos.data} layout={datos.layout} config={datos.config} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}