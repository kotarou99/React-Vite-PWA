// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
// import { VitePWA } from 'vite-plugin-pwa';

// // https://vite.dev/config/
// export default defineConfig({
//   base: '/React-Vite-PWA/',
//   plugins: [
//     react(),
//     VitePWA({
//       manifest: {
//         name: 'My React App',
//         short_name: 'ReactApp',
//         description: 'A sample React app with PWA support',
//         theme_color: '#ffffff',
//         background_color: '#ffffff',
//         display: 'standalone',
//         start_url: '/React-Vite-PWA/',
//         scope: '/React-Vite-PWA/',
//         icons: [
//           {
//             src: '/React-Vite-PWA//icon-192x192.png',
//             sizes: '192x192',
//             type: 'image/png',
//           },
//           {
//             src: '/React-Vite-PWA//icon-512x512.png',
//             sizes: '512x512',
//             type: 'image/png',
//           },
//         ],
//       },
//       registerType: 'autoUpdate',
//       devOptions: {
//         enabled: true, // 開発中にもPWAを試したい場合
//       },
//     }),
//   ],
// });


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/React-Vite-PWA/', // 必ずプロジェクトのサブディレクトリを指定
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'My React App',
        short_name: 'ReactApp',
        description: 'A sample React app with PWA support',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/React-Vite-PWA/',
        scope: '/React-Vite-PWA/',
        icons: [
          {
            src: '/React-Vite-PWA/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/React-Vite-PWA/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
