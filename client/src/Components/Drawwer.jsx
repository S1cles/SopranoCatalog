import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import { useFetch } from "../Hook/useFetch";

const Drawwer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [dresses, setDresses] = useState([]);

  // вызов хука useFetch
  const { isLoading, data, errors } = useFetch("dresses?populate=*");

  useEffect(() => {
    if (data) {
      setDresses(data.data);
    }
  }, [data]);

  return (
    <Box>
      <Button
        onClick={() => onOpen()}
        // onClick={()=>      console.log(dresses)}
        style={isOpen ? { display: "none" } : { display: "initial" }}
        key={"full"}
        m={20}
        color={"black"}
        fontSize={20}
        fontFamily={"Roboto"}
        // fontWeight={'bold'}
        size="md"
        height="58px"
        width="200px"
        border="2px"
        borderColor="white"
        background={"#D6C5B7"}
      >
        Menu
      </Button>

      <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
        <DrawerOverlay />
        <DrawerContent background={""}>
          <DrawerCloseButton color={"white"} />
          <DrawerHeader
            background={"#D6C5B7"}
            color={"black"}
            textAlign={"center"}
          >
            Content
          </DrawerHeader>
          <DrawerBody className="content_bg">
            <SimpleGrid columns={3} spacing={10} textAlign={"center"}>
              {dresses.map((item) => (

                  <Box bg={"black"}>
                    <Box color={"white"} m={5}>{item.attributes.name}</Box>
                    <Box color={"white"}>{item.attributes.article}</Box>
                  </Box>

              ))}

            </SimpleGrid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Drawwer;
