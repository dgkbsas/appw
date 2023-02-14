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
  console.log(datos);

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
              padding: "16px 16px 16px 16px",
              display: "flex",
              alignItems: "flex-start",
              borderRadius: "5px",
            }}
          >
            <div
              className="containerVolumen01"
              style={{
                height: "500px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                paddingTop: "24px",
                paddingBottom: "24px",
                marginRight: "32px",
                width: "190px",
              }}
            >
              {datos.dataDias.map((item) => (
                <div>
                  <p className="tituloDia" style={{ fontSize: "18px", fontWeight: "700", margin: 0 }}>
                    {item.dia}
                  </p>
                  <p style={{ fontSize: "16px", margin: 0 }}>
                    {item.evaluacionValor === "buena" && (
                      <>
                        <span className="verde">
                          <strong>{item.valorUtilizado}</strong>{" "}
                        </span>
                        <span style={{ fontSize: "10px" }}> {item.textoValor}</span>
                      </>
                    )}
                    {item.evaluacionValor === "mala" && (
                      <>
                        <span className="roja">
                          <strong>{item.valorUtilizado}</strong>{" "}
                        </span>
                        <span style={{ fontSize: "10px" }}> {item.textoValor}</span>
                      </>
                    )}
                  </p>
                  <p style={{ fontSize: "12px", fontWeight: "700", margin: 0 }}>
                    {item.valorCantidadEstudios} <span>{item.textoValorCantidad}</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="containerVolumen02" style={{ marginRight: "8px" }}>
              <Plot data={datos.data01} layout={datos.layout01} config={datos.config} />
            </div>
            <div className="containerVolumen03">
              <Plot data={datos.data02} layout={datos.layout02} config={datos.config} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
