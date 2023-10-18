// components/Carousel.js

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaCircle } from "react-icons/fa";

import { Box, Button, HStack, Icon, VStack } from "@chakra-ui/react";
import Imagem1 from "../assets/carousel/imagem1.jpg";
import Imagem2 from "../assets/carousel/imagem2.jpg";
import Imagem3 from "../assets/carousel/imagem3.jpg";

const images = [Imagem1, Imagem2, Imagem3];

export default function Carousel2() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // Troca de imagem a cada 5 segundos (ajuste conforme necessário)

    return () => {
      clearInterval(interval);
    };
  }, [currentImage]);

  return (
    <Box position="relative" width="100%" height="300px">
      <Image
        src={images[currentImage]}
        alt={`Image ${currentImage + 1}`}
        layout="fill"
        objectFit="cover"
      />
      <VStack position="absolute" top="50%" transform="translateY(-50%)" left="10px" spacing={4}>
        <Button onClick={prevImage} disabled={currentImage === 0}>
          <Icon as={FaArrowLeft} boxSize={6} />
        </Button>
      </VStack>
      <VStack position="absolute" top="50%" transform="translateY(-50%)" right="10px" spacing={4}>
        <Button onClick={nextImage} disabled={currentImage === images.length - 1}>
          <Icon as={FaArrowRight} boxSize={6} />
        </Button>
      </VStack>
      <HStack position="absolute" bottom="10px" left="50%" transform="translateX(-50%)" spacing={2}>
        {images.map((_, index) => (
          <Box
            key={index}
            p={3}
            boxSize={1} // Tamanho do indicador
            onClick={() => setCurrentImage(index)}
            cursor={"pointer"}
          >
            <Icon as={FaCircle} color={currentImage === index ? "white" : "gray.500"} size={1} />
          </Box>
        ))}
      </HStack>
    </Box>
  );
}
