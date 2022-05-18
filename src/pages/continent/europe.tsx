import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { Banner } from "../../components/Banner";
import { ContinentInfo } from "../../components/ContinentInfo";
import { Header } from "../../components/Header";

export default function Continent(){

    return(
        <Flex direction="column">
            <Header/>
            <Banner
            bgImgUrl="https://wallpaperaccess.com/full/236182.jpg" 
            title="Europa"
            />
            <Flex bg="black" color="white" p="2rem" align="center" justify="center">
                <HStack w="100%" maxW="1120px" spacing="20">
                    <Text flex="1" fontSize="24" textAlign="justify">
                        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                    </Text>
                    <HStack flex="1" spacing="20" align="center" justify="center">
                        <ContinentInfo title="50" subTitle="Países"/>
                        <ContinentInfo title="60" subTitle="Línguas"/>
                        <ContinentInfo title="27" subTitle="Cidades +100"/>
                    </HStack>
                </HStack>

                <Flex direction="column">
                    <Text>Cidades +100</Text>
                    <Flex>
                        <Box></Box>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}