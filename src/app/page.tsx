import ZoomImage from "./components/zoom-image";

type Props = {};

export default function Home({}: Props) {
  return (
    <>
      <div className="h-[100vh] p-4">Home</div>
      <ZoomImage />
      <div className="h-[50vh] p-4">Next section</div>
    </>
  );
}
