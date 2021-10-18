import React, { useState } from 'react';
import { ChakraProvider, Container, Flex, FormControl, Input, FormLabel, FormHelperText, Button } from "@chakra-ui/react"

import api from '../../services/api';

function FormSubmit({ setAddress }) {

    const [CEP, setCEP] = useState("");

    async function userCEP(cep) {
        try {
            const response = await api.get(`${cep}/json`);
            setAddress(response);
        } catch (error) {
            console.log("CEP inválido");
        }
    }

    return (
        <ChakraProvider>
            <Flex align="center" justify="center" height="100vh">
                <Container>
                    <FormControl id="cep">
                        <FormLabel>CEP</FormLabel>
                        <Input
                            type="text"
                            value={CEP}
                            onChange={(event) => setCEP(event.target.value)}
                        />
                        <FormHelperText>Informe o CEP da sua residência.</FormHelperText>
                    </FormControl>
                    <Button
                        mt={4}
                        colorScheme="teal"
                        type="submit"
                        onClick={() => userCEP(CEP)}
                        isFullWidth
                    >
                        Pesquisar
                    </Button>
                </Container>
            </Flex>
        </ChakraProvider>
    )
}


export default FormSubmit;