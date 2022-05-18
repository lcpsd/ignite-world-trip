import { Flex, Img } from "@chakra-ui/react";

interface HeaderProps{
    logoUrl: string;
}

export function Header({logoUrl}: HeaderProps){

    return(
    <Flex bg="black" h="100" w="100%" align="center" justify="center" p="10">
        <Img src={logoUrl} h="45"/>
    </Flex>
    )
}