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
import { Form, Formik } from 'formik';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { logEvent, getAnalytics } from 'firebase/analytics'; // Importar las funciones de Firebase Analytics

function Formik1() {


  const handleSubmit = async (values, actions) => {
    try {
      // Obtener una instancia de Firestore
      const db = getFirestore();
  
      // Crear un nuevo documento en la colección "messages"
      await addDoc(collection(db, 'messages'), {
        nombre: values.name,
        pais: values.country,
        email: values.email,
        telefono: values.phone,
        ciudad: values.city,
        mensaje: values.message,
        enlace: window.location.href,
        timestamp: new Date()
      });
  
      console.log('Mensaje guardado en Firestore');
      // Lógica adicional después de guardar el mensaje en Firestore
      actions.resetForm();

      // Registrar el evento de formulario enviado en Firebase Analytics
      const analytics = getAnalytics();
      logEvent(analytics, 'form_submit', {
        formName: 'Formik1',
      });
    } catch (error) {
      console.error('Error al guardar el mensaje en Firestore:', error);
      // Manejo del error al guardar el mensaje
    }
  
    actions.setSubmitting(false);
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
                onChange={props.handleChange}
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
                onChange={props.handleChange}
              />
              <FormErrorMessage>{props.errors.phone}</FormErrorMessage>

              <FormLabel>Ciudad</FormLabel>
              <Input type="text" name="city" value={props.values.city} onChange={props.handleChange} />

              <FormLabel>Mensaje</FormLabel>
              <Textarea name="message" value={props.values.message} onChange={props.handleChange} />
              <Button mt={4} colorScheme="teal" isLoading={props.isSubmitting} type="submit">
                Enviar
              </Button>
              <FormHelperText>
                Al hacer clic en "Enviar", aceptas nuestros <Link to="/term">Términos y Privacidad</Link>.
              </FormHelperText>
            </FormControl>
            
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Formik1;
