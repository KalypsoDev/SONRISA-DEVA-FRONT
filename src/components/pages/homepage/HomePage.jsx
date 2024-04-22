import  Navbar  from "../../molecules/navbar/Navbar";
import  Footer  from "../../molecules/footer/Footer";
import  Carousel  from "../../molecules/carousel/Carousel";


export function HomePage() {
  return (
    <>
        <Navbar></Navbar>
        <Carousel></Carousel>
        <h1 className="font-montserratBold">Ésta es la home page</h1>
        <Footer></Footer>
    </>
  );
}