# Frontend

## Mockup Figma v 0.0.4      27oct2024
#### Funcionalidades Agregadas 
#### Se realizó el formato correspondiente para que los profesores puedan:

- Registrase
- Crear un parcial
- Crear un enunciado
- Ver los resultados
- Ver calendario de parciales


#### Se realizó el formato correspondiente para que los estudiantes puedan:
- Registrase
- Realizar un parcial
- Ver los resultados
- Ver calendario de parciales

#### Control de cambios
- 27oct2024 Ajuste en la pantalla de examenes pendientes
- 27oct2024 Ajuste en la pantalla de creación de parcial
- 27oct2024 Ajuste en las opciones de menú



##### Observaciones
Ajuste a los campos de registros


### ver [figma]

## Configuración de Variables de Entorno

Este proyecto usa variables de entorno para manejar configuraciones sensibles. Asegúrate de configurar un archivo .env en la raíz del proyecto con las siguientes variables:

### Paso a Paso

1. **Crea el archivo .env en la raíz del proyecto**.
2. *Agrega las siguientes variables al archivo*:

   plaintext
   VITE_MINIO_SECRET_KEY=tu_secreto_aqui
   VITE_MINIO_ACCESS_KEY=tu_acceso_aqui
   

   - VITE_MINIO_SECRET_KEY: Clave secreta para el acceso a MinIO.
   - VITE_MINIO_ACCESS_KEY: Clave de acceso para el usuario de MinIO.

3. *Ejecuta el servidor de desarrollo*: Una vez configuradas las variables, inicia el proyecto usando:

   bash
   npm run dev
   

4. *Verifica que las variables se carguen correctamente*: Puedes abrir la consola del navegador y buscar mensajes de console.log para confirmar que los valores se están cargando desde el archivo .env.

### Notas

- **Prefijo VITE_**: Todas las variables de entorno en Vite deben empezar con VITE_ para ser accesibles en el cliente.
- *Seguridad: Asegúrate de no compartir* el archivo .env, ya que contiene información sensible. En este proyecto, .env está en el archivo .gitignore para evitar que se suba al repositorio.



[figma]: https://www.figma.com/design/i9OI9likdsh0tkyh3Sa2eo/Material-UI-for-Figma-(and-MUI-X)-(Community)?node-id=7606-2006&node-type=canvas&t=donur17XkPCspXbI-0
