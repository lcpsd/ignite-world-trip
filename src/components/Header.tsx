import { Flex, Img } from "@chakra-ui/react";

export function Header(){

    return(
    <Flex bg="black" h="100" w="100%" align="center" justify="center" p="10">
        <Img src="/logo.svg" h="45"/>
    </Flex>
    )
}