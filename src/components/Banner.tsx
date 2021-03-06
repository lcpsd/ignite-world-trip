import { Box, Flex, Img, Text } from "@chakra-ui/react";

interface BannerProps{
    bgImgUrl: string;
    title: string;
    subTitle?: string;
    imageUrl?: string;
}

export function Banner({bgImgUrl, title, subTitle, imageUrl}: BannerProps){
    return(
        <Flex h="335" w="100%" align="center" justify="center" bgImage={bgImgUrl} bgSize="cover" p="10" bgPosition="center">

            <Flex w="100%" width="1120px">
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

                <Flex flex="1" justify="center" position="relative">
                    <Img src={imageUrl} position="absolute" right="0" bottom="-60px"/>
                </Flex>
            </Flex>

        </Flex>
    )
}