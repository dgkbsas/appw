import { useSearchParams } from "next/navigation";

//components
import VerMasVolumen from "./VerMasVolumen";

//styles
import "./ver-mas-item.css";

export default function VerMasItem({ data }) {
  const searchParams = useSearchParams();
  const step = searchParams.get("step");
  const ubicacion = searchParams.get("index");

  return (
    <div className="containerVerMas">
      {ubicacion === "1" && null}
      {ubicacion === "2" && null}
      {ubicacion === "3" && <VerMasVolumen ubicacion={ubicacion} />}
    </div>
  );
}
