import { ChakraProvider, Container, Flex } from "@chakra-ui/react"
import { Table, TableCaption, Tr, Th, Tbody, Thead, Td, Button } from "@chakra-ui/react"

import { ArrowBackIcon } from '@chakra-ui/icons'

function ResultTable({ address, setBack }) {
    return (
        <ChakraProvider>
            <Flex align="center" justify="center" height="100vh">
                <Container>
                    <Button
                        leftIcon={<ArrowBackIcon />}
                        mt={10}
                        colorScheme="red"
                        onClick={() => setBack(true)}
                    >
                        Voltar
                    </Button>
                    <Table variant="simple">
                        <TableCaption>Dados de endereço encontrado pelo CEP</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Descrição</Th>
                                <Th>Dado</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Th>cep</Th>
                                <Td>{address.cep}</Td>
                            </Tr>
                            <Tr>
                                <Th>logradouro</Th>
                                <Td>{address.logradouro}</Td>
                            </Tr>
                            <Tr>
                                <Th>complemento</Th>
                                <Td>{address.complemento}</Td>
                            </Tr>
                            <Tr>
                                <Th>bairro</Th>
                                <Td>{address.bairro}</Td>
                            </Tr>
                            <Tr>
                                <Th>localidade</Th>
                                <Td>{address.localidade}</Td>
                            </Tr>
                            <Tr>
                                <Th>uf</Th>
                                <Td>{address.uf}</Td>
                            </Tr>
                            <Tr>
                                <Th>ibge</Th>
                                <Td>{address.ibge}</Td>
                            </Tr>
                            <Tr>
                                <Th>gia</Th>
                                <Td>{address.gia}</Td>
                            </Tr>
                            <Tr>
                                <Th>ddd</Th>
                                <Td>{address.ddd}</Td>
                            </Tr>
                            <Tr>
                                <Th>siafi</Th>
                                <Td>{address.siafi}</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Container>
            </Flex>
        </ChakraProvider>
    )
}

export default ResultTable;