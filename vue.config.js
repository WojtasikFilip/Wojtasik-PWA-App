const path = require('path');
module.exports = {
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'public/service-worker.js',
    },
    manifestOptions: {
      name: 'virtual Data',
      short_name: 'vData',
      theme_color: '#5e00ff',
      background_color: '#a16aff',
      icons: [
        { src: './img/icons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
        { src: './img/icons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      ],
    },
  },
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer: { proxy: 'http://127.0.0.1:3000' },
  transpileDependencies: ['vuetify'],
  productionSourceMap: false,
};
