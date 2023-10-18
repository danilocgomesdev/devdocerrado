import { Box, Container } from "@chakra-ui/react";
import Image from "next/image";
import { Carousel as Carrosel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Imagem1 from "../assets/carousel/imagem1.jpg";
import Imagem2 from "../assets/carousel/imagem2.jpg";
import Imagem3 from "../assets/carousel/imagem3.jpg";

export default function Carousel() {
  return (
    <Container w={"7xl"}>
      <Carrosel autoPlay infiniteLoop>
        <Box>
          <Image src={Imagem1} alt="Picture of the author" />
        </Box>
        <Box>
          <Image src={Imagem2} alt="Picture of the author" />
        </Box>
        <Box>
          <Image src={Imagem3} alt="Picture of the author" />
        </Box>
      </Carrosel>
    </Container>
  );
}
