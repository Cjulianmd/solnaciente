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
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);

  const handleSubmit = (values, actions) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 1000);
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Name is required';
    }

    if (!values.phone) {
      errors.phone = 'Phone is required';
    }

    return errors;
  };

  return (
    <>
      <Formik initialValues={{ name: '', phone: '', country: '', email: '', city: '', message: '' }}
        onSubmit={handleSubmit}
        validate={validateForm}>
        {(props) => (
          <Form>
            <Heading as="h4" size="sm" mb={1} color="black">
              ¿Te interesa? Completa este formulario y pronto nos comunicaremos contigo.
            </Heading>

            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input
                type="text"
                name="name"
                value={props.values.name}
                onChange={handleNameChange}
              />
              <FormErrorMessage>{props.errors.name}</FormErrorMessage>

              <FormLabel>País</FormLabel>
              <Select name="country" placeholder="Selecciona un país" value={props.values.country} onChange={props.handleChange}>
                <option value="colombia">Colombia</option>
                <option value="other">Otro</option>
              </Select>
              <FormHelperText>
                Ingresa tu pais de origen.
              </FormHelperText>
              
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" value={props.values.email} onChange={props.handleChange} />


              <FormLabel>Teléfono</FormLabel>
              <Input
                type="tel"
                name="phone"
                value={props.values.phone}
                onChange={handlePhoneChange}
              />
              <FormErrorMessage>{props.errors.phone}</FormErrorMessage>

              <FormLabel>Ciudad</FormLabel>
              <Input type="text" name="city" value={props.values.city} onChange={props.handleChange} />

              <FormLabel>Mensaje</FormLabel>
              <Textarea name="message" value={props.values.message} onChange={props.handleChange} />

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
