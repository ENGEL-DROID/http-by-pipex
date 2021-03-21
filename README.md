# Webpack Starter

Este es el proyecto inicial para crear aplicaciones utilizando webpack.

### Notas:
Recuerden reconstruir los módulos de Node

```
npm install
```

Y para construir el build, recueren:

```
npm run build
```

### IMPORTANTE:
El arranque del build suele arrojar errores para ello se recomienda actualizar las dependencias, empezando por las de Babel:

```
npm i -D @babel/core @babel/preset-env babel-loader babel-minify-webpack-plugin babel-preset-minify
```

Después de actualizar volver a ejecutar el npm run build

En caso de seguir fallando: probar a actualizar otras hasta que el npm run build se ejecute sin errores.
