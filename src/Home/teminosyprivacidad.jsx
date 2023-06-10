import { useState } from 'react';

const TermsAndPrivacyPage = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    // Aquí puedes realizar cualquier acción adicional después de que el cliente haya aceptado los términos y la privacidad
  };

  return (
    <div>
      <h1>Términos y Privacidad</h1>
      <h2>Términos y Condiciones</h2>
      <p>
      Términos y Privacidad

Al acceder y utilizar el sitio web de Sol Naciente, aceptas los siguientes términos y condiciones, así como nuestra política de privacidad:

1. Uso del sitio web

1.1. Contenido
El contenido de este sitio web es propiedad de Sol Naciente y está protegido por derechos de autor y otras leyes de propiedad intelectual. No está permitido copiar, reproducir, distribuir o modificar el contenido sin autorización previa.

1.2. Uso adecuado
Al utilizar este sitio web, te comprometes a no realizar ninguna actividad que pueda afectar la seguridad o el funcionamiento del sitio, incluyendo la introducción de virus, malware o cualquier otro código dañino.

2. Privacidad

2.1. Información recopilada
Sol Naciente recopila y utiliza información personal de acuerdo con nuestra política de tratamiento de datos. Al utilizar nuestro sitio web, aceptas que recopilemos, almacenemos y procesemos tu información personal de acuerdo con los fines establecidos en nuestra política de privacidad.

2.2. Cookies
Utilizamos cookies y otras tecnologías similares para mejorar tu experiencia en nuestro sitio web. Estas tecnologías nos permiten recopilar información sobre tu navegación y preferencias. Puedes ajustar la configuración de cookies en tu navegador para gestionar su uso.

3. Enlaces externos

Nuestro sitio web puede contener enlaces a sitios de terceros. No somos responsables de la privacidad ni del contenido de dichos sitios. Te recomendamos revisar las políticas de privacidad de esos sitios antes de proporcionar cualquier información personal.

4. Cambios en los términos y privacidad

Nos reservamos el derecho de modificar estos términos y nuestra política de privacidad en cualquier momento. Te recomendamos revisar regularmente estos documentos para estar al tanto de cualquier cambio. El uso continuado de nuestro sitio web después de la modificación constituirá tu aceptación de los nuevos términos y privacidad.

5. Contacto

Si tienes alguna pregunta o inquietud sobre nuestros términos y privacidad, puedes contactarnos a través de la información de contacto proporcionada en nuestro sitio web.

Al utilizar nuestro sitio web, confirmas que has leído, comprendido y aceptado estos términos y nuestra política de privacidad.

Última actualización: [Fecha]

      </p>

      <h2>Política de Privacidad</h2>
      <p>
        Esta Política de Privacidad describe cómo se recopila, utiliza y comparte tu información personal cuando utilizas nuestro sitio web. Al utilizar este sitio web, aceptas nuestra Política de Privacidad:
        Política de Tratamiento de Datos

La presente Política de Tratamiento de Datos describe cómo Sol Naciente recopila, utiliza, almacena y protege la información personal de los usuarios que utilizan nuestros servicios y visitan nuestro sitio web. Nos comprometemos a cumplir con las leyes y regulaciones aplicables en materia de protección de datos personales.

1. Recopilación de datos

1.1. Información personal recopilada
Sol Naciente recopila información personal de los usuarios cuando se registran en nuestro sitio web, completan formularios, realizan compras o nos proporcionan información de contacto. Esta información puede incluir, entre otros datos, nombre, dirección, número de teléfono, dirección de correo electrónico y datos de pago.

1.2. Datos de uso del sitio web
Recopilamos información sobre la forma en que los usuarios interactúan con nuestro sitio web, incluyendo páginas visitadas, tiempo de navegación, dirección IP y otros datos de navegación. Estos datos se recopilan de forma automática utilizando tecnologías como cookies y registros de servidores.

2. Uso de los datos

2.1. Utilización de la información personal
Utilizamos la información personal recopilada para brindar y mejorar nuestros servicios, procesar transacciones, responder a consultas y proporcionar soporte al cliente. También podemos utilizar esta información para enviar comunicaciones comerciales, como boletines informativos y promociones, siempre y cuando el usuario haya dado su consentimiento previo.

2.2. Datos de uso del sitio web
Utilizamos los datos de uso del sitio web para analizar tendencias, administrar el sitio web, realizar mejoras y personalizar la experiencia del usuario. Estos datos nos ayudan a comprender cómo los usuarios interactúan con nuestro sitio y nos permiten mejorar nuestros servicios y contenido.

3. Protección de datos

3.1. Seguridad de la información
Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger la información personal de los usuarios contra el acceso no autorizado, la divulgación o la destrucción. Sin embargo, no podemos garantizar la seguridad absoluta de la información transmitida a través de Internet o almacenada en nuestros sistemas.

3.2. Conservación de datos
Conservamos la información personal de los usuarios durante el tiempo necesario para cumplir con los fines descritos en esta política, a menos que la ley requiera o permita un período de retención más prolongado. Una vez cumplido el propósito de la recopilación de datos, procedemos a su eliminación segura.

4. Compartir información

4.1. Proveedores de servicios
Podemos compartir información personal con terceros proveedores de servicios que nos ayudan a brindar nuestros servicios y operar nuestro negocio. Estos proveedores de servicios están sujetos a acuerdos de confidencialidad y solo pueden utilizar la información personal de acuerdo con nuestras instrucciones.

4.2. Requerimientos legales
Podemos divulgar información personal cuando creamos de buena fe que dicha divulgación es necesaria para cumplir con la ley, responder a solicitudes legales o proteger nuestros derechos, propiedad o seguridad, así como los derechos, propiedad o seguridad de terceros.

5. Derechos del usuario

5.1. Acceso y corrección
Los usuarios tienen derecho a acceder, corregir o eliminar su información personal. Si

      </p>

      {!accepted && (
        <button onClick={handleAccept}>Acepto los Términos y la Privacidad</button>
      )}
    </div>
  );
};

export default TermsAndPrivacyPage;
