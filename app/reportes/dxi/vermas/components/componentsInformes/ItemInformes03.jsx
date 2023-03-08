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
              display: "flex",
              alignItems: "flex-start",
              borderRadius: "5px",
              flexDirection: "column",
              width: "100%",
              padding: "8px 16px 8px 16px",
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
                <strong>ORIGEN</strong> PROCEDIMIENTOS INFORMADOS
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
                  gridTemplateColumns: "1.1fr .7fr .7fr",
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
                  ORIGEN
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
                  CANTIDAD DE PROCEDIMIENTOS
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
              </div>
              {datos.data != "" ? (
                <>
                  {datos.data.map((item) => (
                    <div
                      style={{
                        display: "grid",
                        alignItems: "center",
                        gridTemplateColumns: "1.1fr .7fr  .7fr",
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
