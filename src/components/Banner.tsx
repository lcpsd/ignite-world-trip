import { Flex, Img, Text } from "@chakra-ui/react";

interface BannerProps{
    bgImgUrl: string;
    title: string;
    subTitle: string;
    imageUrl: string;
}

export function Banner({bgImgUrl, title, subTitle, imageUrl}: BannerProps){
    return(
        <Flex h="335" w="100%" align="center" justify="center" bgImage={bgImgUrl} p="10">

            <Flex height="335">
            <Flex flex="1"  direction="column" justify="center">
                <Text color="white" fontSize="36" maxW="426px">
                {title}
                </Text>
                <Text color="white" size="20" maxW="524px">
                {subTitle}
                </Text>
            </Flex>
            </Flex>

            <Flex flex="1" align="flex-start" justify="center" position="relative">
                <Img src={imageUrl} position="absolute" top="-80px"/>
            </Flex>

        </Flex>
    )
}