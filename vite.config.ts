import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permite todas las conexiones
    port: 3000,
    allowedHosts: ['trazas.wisensor.cl'], // Agrega esta línea si una extensión personalizada lo requiere
  },
});