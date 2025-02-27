# Proyecto construido con NestJS

Este proyecto ha sido desarrollado utilizando la tecnología de **NestJS**. A continuación, se detallan los pasos y requisitos necesarios para ejecutar y desplegar el proyecto correctamente.

## Requisitos principales

- **Node.js**  
- **NPM**

## Pasos para ejecutar el proyecto

1. **Iniciar el proyecto en desarrollo**  
   Para ejecutar el proyecto en modo desarrollo, utiliza el siguiente comando:
   ```bash
   npm run start:dev
   ```

2. **Construir el proyecto para producción**  
   Para construir el proyecto y desplegarlo en un ambiente de producción local, utiliza:
   ```bash
   npm run build
   ```

3. **Desplegar en un servidor**  
   Para desplegar el proyecto en un servidor, sigue estos pasos:
   - Primero, ejecuta el comando de construcción:
     ```bash
     npm run build
     ```

   - Después, comprime la carpeta `dist` generada.
   
   - Sube la carpeta comprimida a la máquina en el servidor.
   
   - Es importante tener las dependencias  dentro del servidor del ambiente de  `despliegue`, ya que dentro del servidor necesitaremos ejecutar un `npm i` para instalar las dependencias.
   
4. **Construir y ejecutar el proyecto en el servidor**  
   Una vez que las dependencias se han instalado, ejecuta el siguiente comando para iniciar el servidor:
   ```bash
   node dist/main.js --host=<IP_del_servidor> --port=<puerto>
   ```

¡Y eso es todo! Con estos pasos deberías poder ejecutar y desplegar el proyecto sin inconvenientes.
