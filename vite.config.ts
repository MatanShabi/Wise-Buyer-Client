import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync('../Wise-Buyer-Server/client-key.pem'),
      cert: fs.readFileSync('../Wise-Buyer-Server/client-cert.pem'),
    },
  },
  plugins: [react()],
});
