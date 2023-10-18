import { Container } from "@chakra-ui/react";
import BannerInicio from "../components/BannerInicio";
import CaptionCarousel from "../components/CaptionCarousel";
import Carousel from "../components/Carousel";
import Carousel2 from "../components/Carousel2";
import Footer from "../components/Footer";
import InfoTresColunas from "../components/InfoTresColunas";
import NavBar from "../components/NavBar";
import PrecosTresColunas from "../components/PrecosTresColunas";

export default function Home() {
  return (
    <>
      <NavBar>
        <Container maxW={"7xl"}>
          <BannerInicio />
          <InfoTresColunas />
          <PrecosTresColunas />
          <Carousel />
          <CaptionCarousel />
          <Carousel2 />
        </Container>
      </NavBar>
      <Footer />
    </>
  );
}
