import { useSearchParams } from "next/navigation";

//components
import VerMasVolumen from "./VerMasVolumen";
import VerMasEspera from "./VerMasEspera";

//styles
import "./ver-mas-item.css";

export default function VerMasItem({ data }) {
  const searchParams = useSearchParams();
  const step = searchParams.get("step");
  const ubicacion = searchParams.get("index");

  return (
    <div className="containerVerMas">
      {ubicacion === "1" && null}
      {ubicacion === "2" && <VerMasEspera ubicacion={ubicacion} />}
      {ubicacion === "3" && <VerMasVolumen ubicacion={ubicacion} />}
      {ubicacion === "5" && null}
    </div>
  );
}
