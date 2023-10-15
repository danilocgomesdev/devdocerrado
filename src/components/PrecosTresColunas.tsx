"use client";

import {
  Box,
  Button,
  HStack,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

interface Props {
  children: React.ReactNode;
}

function PriceWrapper(props: Props) {
  const { children } = props;

  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("cinza.200", "cinza.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export default function PrecosTresColunas() {
  return (
    <Box py={12} maxW={"7xl"}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Planos que atendem a sua necessidade
        </Heading>
        <Text fontSize="lg" color={useColorModeValue("cinza.300", "cinza.300")}>
          Comece com um teste gratuito de 14 dias. Não é necessário cartão de crédito. Cancele a
          qualquer momento.
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Básico
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                R$
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                79
              </Text>
              <Text fontSize="3xl" color="cinza.300">
                /mês
              </Text>
            </HStack>
          </Box>
          <VStack bg={useColorModeValue("cinza.50", "cinza.500")} py={4} borderBottomRadius={"xl"}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="verde.600" />
                minutos de construção ilimitados
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="verde.600" />
                Lorem, ipsum dolor.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="verde.600" />
                5TB Lorem, ipsum dolor.
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button
                w="full"
                color="verde.600"
                borderColor="verde.600"
                variant="outline"
                _hover={{
                  color: `${useColorModeValue("verde.700", "verde.500")}`,
                  borderColor: `${useColorModeValue("verde.700", "verde.500")}`,
                  bg: `${useColorModeValue("cinza.100", "cinza.600")}`,
                }}
              >
                Iniciar teste
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: "translate(-50%)" }}
            >
              <Text
                textTransform="uppercase"
                bg="verde.600"
                px={3}
                py={1}
                color="cinza.50"
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                MAIS Popular
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Intermediário
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  R$
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  149
                </Text>
                <Text fontSize="3xl" color="cinza.300">
                  /mês
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue("cinza.50", "cinza.500")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="verde.600" />
                  minutos de construção ilimitados
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="verde.600" />
                  Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="verde.600" />
                  5TB Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="verde.600" />
                  5TB Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="verde.600" />
                  5TB Lorem, ipsum dolor.
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button
                  w="full"
                  bg="verde.600"
                  color="cinza.50"
                  _hover={{
                    bg: "verde.700",
                  }}
                >
                  Iniciar teste
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Avançado
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                R$
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                349
              </Text>
              <Text fontSize="3xl" color="cinza.300">
                /mês
              </Text>
            </HStack>
          </Box>
          <VStack bg={useColorModeValue("cinza.50", "cinza.500")} py={4} borderBottomRadius={"xl"}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="verde.600" />
                minutos de construção ilimitados
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="verde.600" />
                Lorem, ipsum dolor.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="verde.600" />
                5TB Lorem, ipsum dolor.
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button
                w="full"
                color="verde.600"
                borderColor="verde.600"
                variant="outline"
                _hover={{
                  color: `${useColorModeValue("verde.700", "verde.500")}`,
                  borderColor: `${useColorModeValue("verde.700", "verde.500")}`,
                  bg: `${useColorModeValue("cinza.100", "cinza.600")}`,
                }}
              >
                Iniciar teste
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}
