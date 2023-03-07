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

export default function ItemAgendamiento02({ datos, dataDxI }) {
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
              <div className="containerVolumen03" style={{ display: "flex", marginTop: "8px", alignItems: "center" }}>
                <div className="containerVolumen02" style={{ position: "relative" }}>
                  <Plot data={datos.data} layout={datos.layout} config={datos.config} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
