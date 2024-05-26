import { Box, Button, ButtonGroup, Card, Container, FormControl, FormHelperText, FormLabel, Heading, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { env } from "~/env";
import swal from "sweetalert2"


interface TypeBody{
    email: string
    code: string
}

const Login: NextPage = () => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm<TypeBody>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const onSubmit = async ({ email, code } : TypeBody) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post(`${env.NEXT_PUBLIC_BACKEND_BASE_URL}/auth/login/${email}/`, { code });
            router.push("/");
        } catch (err) {
            setError("Error al iniciar sesión. Por favor, verifica tus credenciales.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const requestCode = async () => {
        const email = getValues('email');
        setLoading(true);
        setError(null);
        try {
            await axios.post(`${env.NEXT_PUBLIC_BACKEND_BASE_URL}/auth/login/${email}/code`);
            swal.fire("Código enviado a tu correo electrónico.");
        } catch (err) {
            setError("Error al solicitar el código. Por favor, intenta nuevamente.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container centerContent>
            <Heading textAlign="center">Iniciar sesión</Heading>
            <Card padding={3} marginTop={5}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl marginBottom={3} isInvalid={!!errors.email || !!errors.code}>
                        <FormLabel>Dirección de email</FormLabel>
                        <Input
                            type='email'
                            marginBottom={3}
                            placeholder="Dirección de email"
                            {...register('email', { required: 'El email es requerido' })}
                        />
                        {errors.email && <FormHelperText color="red.500">{errors.email.message}</FormHelperText>}

                        <FormLabel>Código</FormLabel>
                        <Input
                            type='number'
                            placeholder="Código"
                            {...register('code', { required: 'El código es requerido' })}
                        />
                        {errors.code && <FormHelperText color="red.500">{errors.code.message}</FormHelperText>}

                        {error && <Text color="red.500">{error}</Text>}

                        <ButtonGroup marginTop={3}>
                            <Button
                                colorScheme='teal'
                                variant='solid'
                                type="submit"
                                isLoading={loading}
                                loadingText="Iniciando sesión"
                            >
                                Iniciar sesión
                            </Button>
                            <Button
                                colorScheme='teal'
                                variant='outline'
                                onClick={requestCode}
                                isLoading={loading}
                                loadingText="Solicitando código"
                            >
                                Quiero un código
                            </Button>
                        </ButtonGroup>
                    </FormControl>
                </form>
            </Card>
        </Container>
    );
};

export default Login;