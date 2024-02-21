import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';


export default defineConfig({
    optimizeDeps: {
        include: ['sweetalert2', 'datatables.net-buttons', 'datatables.net-dt'], // Include 'datatables.net-dt'
        exclude: ['some-module'],
      },
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            ssr: 'resources/js/ssr.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        
    ],
    css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import "~datatables.net-dt/css/jquery.dataTables.css";`
          }
        }
      }
      
});
