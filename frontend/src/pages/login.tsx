import {Box, Button, ButtonGroup, Card, Container, FormControl, FormHelperText, FormLabel, Heading, Input } from "@chakra-ui/react";
import axios from "axios";
import { NextPage } from "next";
import { useForm } from 'react-hook-form'
import { env } from "~/env";

const Login: NextPage = () => {
    const {register,getValues} = useForm()
    
    return(
       <Container centerContent>
            <Heading textAlign="center">Iniciar sesión</Heading>
            <Card padding={3} marginTop={5}>
            <form>
                <FormControl marginBottom={3}>
                    <FormLabel>Dirección de email</FormLabel>
                    <Input type='email' marginBottom={3} placeholder="Dirección de email"
                    {...register('email')}/>
                    <FormLabel>Código</FormLabel>
                    <Input type='number' placeholder="Código"
                     {...register('code')}/> 
                    <ButtonGroup marginTop={3} >
                        <Button colorScheme='teal' variant='solid'
                        onClick={()=>{
                            console.log(getValues())
                        }} 
                        >Iniciar sesión</Button> 
                        <Button colorScheme='teal' variant='outline'
                        onClick={()=>{
                            const email = getValues('email')
                            axios.post(`${env.NEXT_PUBLIC_BACKEND_BASE_URL}/auth/login/${email}`)
                        }}>Quiero un código</Button>
                    </ButtonGroup>
                    
                </FormControl>
            </form>
            </Card>
       </Container>
    )
}

export default Login