import { Box, Flex, HStack, Img, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { Banner } from "../../components/Banner";
import { ContinentInfo } from "../../components/ContinentInfo";
import { Header } from "../../components/Header";

export default function Continent(){

    const cities = [
        {
            pictureLink: "https://www.stwintercambio.com.br/wp-content/uploads/2017/09/London-wallpaper-24.jpg",
            name: "Londres",
            country: "Reino Unido",
            flagImgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/255px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
        },
        {
            pictureLink: "https://www.stwintercambio.com.br/wp-content/uploads/2017/09/London-wallpaper-24.jpg",
            name: "Paris",
            country: "França",
            flagImgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/255px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
        },
        {
            pictureLink: "https://www.stwintercambio.com.br/wp-content/uploads/2017/09/London-wallpaper-24.jpg",
            name: "Roma",
            country: "Itália",
            flagImgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/255px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
        },
        {
            pictureLink: "https://www.stwintercambio.com.br/wp-content/uploads/2017/09/London-wallpaper-24.jpg",
            name: "Praga",
            country: "República Tcheca",
            flagImgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/255px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
        },
        {
            pictureLink: "https://www.stwintercambio.com.br/wp-content/uploads/2017/09/London-wallpaper-24.jpg",
            name: "Amsterdã",
            country: "Holanda",
            flagImgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/255px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
        },
    ]

    return(
        <Flex direction="column" bg="black" align="center">
            <Header/>
            <Banner
            bgImgUrl="https://wallpaperaccess.com/full/236182.jpg" 
            title="Europa"
            />
            <Flex bg="black" color="white" p="2rem" align="center" justify="center" direction="column" maxW="1120px">
                    <Flex w="100%" direction={["column", "row"]}>
                        <Text flex="1" fontSize="24" textAlign="justify">
                            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                        </Text>
                        <Stack flex="1" spacing="20" align="center" justify="center" direction={['column', 'row']}>
                            <ContinentInfo title="50" subTitle="Países"/>
                            <ContinentInfo title="60" subTitle="Línguas"/>
                            <ContinentInfo title="27" subTitle="Cidades +100"/>
                        </Stack>
                    </Flex>

                <Flex direction="column" w="100%" mt="10">
                    <Text fontSize="36" mb="20">Cidades +100</Text>
                    <SimpleGrid  spacing={10} flexDirection="row" columns={[1,2,4]} px="10">

                        {/* Card */}
                        {
                            cities.map(city => (
                                <Flex direction="column" bg="gray.900" borderRadius="0.3rem">

                                    <Box bgSize="cover" bgPosition="center" bgRepeat="no-repeat" bgImg={city.pictureLink} flex="2" borderRadius="0.3rem 0.3rem 0 0">
                                        <Box height="100" w="100%"></Box>
                                    </Box>

                                    <Flex flex="1" p="5">
                                        <Flex justify="center" direction="column">
                                            <Text fontSize="20" fontWeight="bold" mb="2">{city.name}</Text>
                                            <Text color="gray">{city.country}</Text>
                                        </Flex>

                                        <Flex justify="flex-end" align="center" flex="1">
                                            <Img clipPath="circle" borderRadius="100%" h="5" w="5" src={city.flagImgLink}/>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            ))
                        }
                    </SimpleGrid>
                </Flex>
            </Flex>
        </Flex>
    )
}