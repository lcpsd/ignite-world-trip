import { Box, Divider, Flex, Icon, Img, SimpleGrid, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import {FaCocktail, FaUmbrellaBeach, FaBuilding} from 'react-icons/fa'
import {GiGreekTemple, GiWorld} from 'react-icons/gi'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { TravelType } from '../components/TravelType';
import { SwiperContainer } from '../components/SwiperContainer';
import Link from 'next/link';

const Home: NextPage = () => {

  const slides = [
    {
      title: "Europa",
      subTitle: "O continente mais antigo",
      imageLink: "https://www.10wallpaper.com/wallpaper/1920x1080/1603/Louvre_paris_france-Travel_HD_Desktop_Wallpaper_1920x1080.jpg",
      page: "europe"
    },

    {
      title: "Estados Unidos",
      subTitle: "A terra da liberdade",
      imageLink: "https://images8.alphacoders.com/599/599348.jpg",
      page: "northamerica"
    },
    {
      title: "Brasil",
      subTitle: "Onde o pal quebra todo dia",
      imageLink: "https://jpimg.com.br/uploads/2017/04/1249343439-caua-reymond-em-alemao.jpg",
      page: "southamerica"
    },
  ]

  return (
    <Flex w="100vw" h="100vh" direction="column">

      <Header/>
      
      <Banner 
      bgImgUrl="banner-bg.png" 
      title="5 Continentes, infinitas possibilidades."
      subTitle="Chegou a hora de tirar do papel a viagem que você sempre sonhou."
      imageUrl="airplane.png"
      />

      <Flex flex="1" bg="black" align="center" justify="center" p="8" direction="column">
        <SimpleGrid w="100%" maxW="1116px" minChildWidth="158px" gap="4" h="100%" mt="20">
          <TravelType iconElement={FaCocktail} text="Vida Noturna"/>
          <TravelType iconElement={FaUmbrellaBeach} text="Praia"/>
          <TravelType iconElement={FaBuilding} text="Moderno"/>
          <TravelType iconElement={GiGreekTemple} text="Classico"/>
          <TravelType iconElement={GiWorld} text="E mais ..."/>
        </SimpleGrid>

        <Divider my="8" borderColor="white" w="90px"/>

        <Flex direction="column" align="center" color="white">
          <Text fontSize="35">
            Vamos nessa?
          </Text>

          <Text fontSize="35" textAlign={["center", "left"]}>
            Então escolha seu continente
          </Text>
        </Flex>

        <SwiperContainer>
          {
            slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <Link href={`/continent/${slide.page}`}>
                  <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                    direction="column"
                    bgImg={slide.imageLink}
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    bgPosition="center"
                    color="white"
                    >
                    <Text fontSize="48" fontWeight="bold">{slide.title}</Text>
                    <Text fontSize="24" fontWeight="600">{slide.subTitle}</Text>
                  </Flex>
                </Link>
              </SwiperSlide>
            ))
          }
        </SwiperContainer>
      </Flex>

    </Flex>
  )
}

export default Home
