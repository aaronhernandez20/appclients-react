import { IonContent, IonHeader, IonPage, useIonViewWillEnter } from '@ionic/react';
import { useState } from 'react';

import Navbar from '../components/Navbar';
import type { Client } from '../interfaces/Client';
import { ClientsService } from '../services/ClientsService';

const ClientsPage: React.FC = () => {
  const [clientes, setClientes] = useState<Client[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  const cargarClientes = async () => {
    setCargando(true);
    setError('');
    try {
      const datos = await ClientsService.getAll();
      setClientes(datos);
    } catch {
      setError('No se pudieron cargar los clientes.');
    }
    setCargando(false);
  };

  useIonViewWillEnter(() => {
    cargarClientes();
  });

  return (
    <IonPage>
      <IonHeader>
        <Navbar />
      </IonHeader>
      <IonContent>
        <div className="container py-4">
          <h1 className="h3 mb-4">Clientes</h1>

          {cargando && <div className="spinner-border text-primary" role="status"></div>}

          {error && <div className="alert alert-danger">{error}</div>}

          {!cargando && !error && clientes.length === 0 && (
            <div className="alert alert-info">Todavía no hay clientes.</div>
          )}

          {!cargando && clientes.length > 0 && (
            <div className="table-responsive">
              <table className="table table-striped table-hover align-middle">
                <thead className="table-primary">
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Teléfono</th>
                  </tr>
                </thead>
                <tbody>
                  {clientes.map((cliente) => (
                    <tr key={cliente.id}>
                      <td>{cliente.id}</td>
                      <td>{cliente.nombre}</td>
                      <td>{cliente.email}</td>
                      <td>{cliente.telefono}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ClientsPage;
