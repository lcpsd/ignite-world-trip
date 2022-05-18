import { Flex, Icon, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface TravelTypeProps{
    iconElement: ElementType;
    text: string;
}

export function TravelType({iconElement, text}: TravelTypeProps){
    return(
        <Flex direction="column" justify="center">
            <Icon as={iconElement} fontSize="85" color="yellow.500" w="100%"/>
            <Text color="white" textAlign="center" fontSize="20" fontWeight="bold">{text}</Text>
        </Flex>
    )
}