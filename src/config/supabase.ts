import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function probarConexion(): Promise<void> {
  const { data, error } = await supabase.from('clients2').select('*');

  if (error) {
    console.error('Error de conexión con Supabase:', error.message);
    return;
  }

  console.log('Conexión correcta');
  console.log('Datos de la conexión:', {
    url: supabaseUrl,
    tabla: 'clients2',
    registros: data.length,
  });
  console.table(data);
}
