import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { probarConexion } from './config/supabase';

probarConexion();

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
