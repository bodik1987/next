import Article from "./components/article";
import Menu from "./components/ui/menu";
import Section from "./components/ui/section";
import ZoomImage from "./components/zoom-image";

export default function Home() {
  return (
    <>
      <Menu />
      <div className="h-[100vh] p-4">Home</div>
      <ZoomImage />
      <Section content={<Article />} />
      <div className="h-[100vh] p-4">Next section</div>
    </>
  );
}
