import { IonContent, IonHeader, IonPage } from '@ionic/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';
import { ClientsService } from '../services/ClientsService';

const NewClientPage: React.FC = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState('');

  const guardar = async (e: React.FormEvent) => {
    e.preventDefault();
    setGuardando(true);
    setError('');
    try {
      await ClientsService.create({ nombre, email, telefono });
      setNombre('');
      setEmail('');
      setTelefono('');
      navigate('/clients');
    } catch {
      setError('No se pudo guardar el cliente.');
    }
    setGuardando(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <Navbar />
      </IonHeader>
      <IonContent>
        <div className="container py-4" style={{ maxWidth: 600 }}>
          <h1 className="h3 mb-4">Añadir cliente</h1>

          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={guardar}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                id="nombre"
                className="form-control"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">
                Teléfono
              </label>
              <input
                id="telefono"
                type="tel"
                className="form-control"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary" disabled={guardando}>
              {guardando ? 'Guardando...' : 'Guardar cliente'}
            </button>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default NewClientPage;
