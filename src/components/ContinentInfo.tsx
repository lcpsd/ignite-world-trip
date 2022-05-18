import { Flex, Text } from "@chakra-ui/react";

interface ContinentInfoProps{
    title: string;
    subTitle: string;
}

export function ContinentInfo({title, subTitle}: ContinentInfoProps){

    return(
        <Flex direction="column">
            <Text fontSize="48" fontWeight="bold" color="yellow.500">
                {title}
            </Text>

            <Text fontSize="24" fontWeight="bold" color="white">
                {subTitle}
            </Text>
        </Flex>
    )
}