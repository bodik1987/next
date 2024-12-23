import Menu from "./components/ui/menu";
import ZoomImage from "./components/zoom-image";

export default function Home() {
  return (
    <>
      <Menu />
      <div className="h-[100vh] p-4">Home</div>
      <ZoomImage />
      <div className="h-[50vh] p-4">Next section</div>
    </>
  );
}
