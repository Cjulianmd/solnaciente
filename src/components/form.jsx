import {
  FormLabel,
  Button,
  FormHelperText,
  Select,
  FormErrorMessage,
  FormControl,
  Input,
  Heading,
  Textarea,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';

function Formik1() {
  function validateName(value) {
    let error;
    if (!value) {
      error = 'Name is required';
    } else if (value.toLowerCase() !== '') {
      error = 'Name is required 😱';
    }
    return error;
  }

  const [input, setInput] = useState('');

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === '';

  return (
    <>
      <Formik
        initialValues={{ name: '' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <Form>
            <Heading as="h4" size="sm" mb={1} color="black">
              ¿Te interesa? Completa este formulario y pronto nos comunicaremos contigo.
            </Heading>

            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input type="text" value={input} onChange={handleInputChange} />

              <FormLabel>País</FormLabel>
              <Select placeholder="Selecciona un país">
                <option>Colombia</option>
                <option>Otro</option>
              </Select>

              <FormLabel>Email</FormLabel>
              <Input type="email" value={input} onChange={handleInputChange} />
              {!isError ? (
                <FormHelperText>
                  Ingresa el correo electrónico donde deseas recibir el boletín.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}

              <FormLabel>Teléfono</FormLabel>
              <Input type="number" value={input} onChange={handleInputChange} />

              <FormLabel>Ciudad</FormLabel>
              <Input type="text" value={input} onChange={handleInputChange} />

              <FormLabel>Mensaje</FormLabel>
              <Textarea name="message" />

              <Button mt={4} colorScheme="teal" isLoading={props.isSubmitting} type="submit">
                Enviar
              </Button>
            </FormControl>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Formik1;
