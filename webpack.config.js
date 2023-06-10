const path = require('path');

module.exports = {
  entry: './src/index.js', // Archivo de entrada de tu aplicación
  output: {
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida para los archivos generados
    filename: 'bundle.js', // Nombre del archivo generado
  },
  resolve: {
    fallback: {
      stream: require.resolve('stream-browserify'), // Configuración del polyfill para el módulo 'stream'
    },
  },
  // Otras configuraciones de Webpack
};
