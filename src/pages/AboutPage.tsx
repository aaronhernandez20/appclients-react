import { IonContent, IonHeader, IonPage } from '@ionic/react';

import Navbar from '../components/Navbar';

const AboutPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Navbar />
      </IonHeader>
      <IonContent>
        <div className="container py-4" style={{ maxWidth: 900 }}>
          <h1 className="h3 mb-3">Sobre el proyecto</h1>
          <p>
            AppClients es una aplicación hecha con Ionic y React para gestionar los clientes de una empresa. Los datos
            se guardan en la tabla <strong>clients</strong> de Supabase, que se consulta desde la página Ver clientes y
            se amplía desde el formulario de Añadir clientes.
          </p>
          <p>
            La interfaz usa Bootstrap para la barra de navegación, la tabla y el formulario, y React Router para moverse
            entre las páginas sin recargar.
          </p>

          <img
            src="/img/about.webp"
            alt="Esquema de AppClients: React conectado a Supabase"
            className="img-fluid rounded shadow-sm my-3"
          />

          <h2 className="h5 mt-4 mb-3">Ronaldinho</h2>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/feRjEy72wvE"
              title="46 Years Old Ronaldinho vs Forli 2026"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AboutPage;
