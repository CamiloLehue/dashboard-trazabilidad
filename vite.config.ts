import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'trazas.wisensor.cl', // Permite este host
    port: 5173, // Cambia el puerto si es necesario
  },
});