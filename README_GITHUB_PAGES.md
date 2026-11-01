# Kaiser.py — GitHub Pages

Sitio estático en español para publicar los desafíos de Kaiser.py.

## Contenido
- `index.html`: portada y catálogo de desafíos.
- `reto-001.html`: página del desafío Base64.
- `styles.css`: diseño responsive.
- `script.js`: navegación móvil y pistas.
- `reto.js`: validación local de la respuesta.
- `assets/reto-001/senal_base64.txt`: cadena Base64 real del reto.

## Publicar en GitHub Pages
1. Crea un repositorio público llamado `kaiser-py` (o el nombre que prefieras).
2. Sube todos los archivos y carpetas de este paquete manteniendo la estructura.
3. En GitHub abre **Settings → Pages**.
4. En **Build and deployment**, elige **Deploy from a branch**.
5. Selecciona la rama `main` y la carpeta `/ (root)`, y guarda.
6. Espera a que GitHub publique el sitio. La URL suele ser:
   `https://TU-USUARIO.github.io/kaiser-py/`

Si el repositorio se llama `TU-USUARIO.github.io`, la URL será:
`https://TU-USUARIO.github.io/`

## Importante sobre la respuesta
La validación de `ORIGEN` ocurre en `reto.js`, en el navegador. Esto permite que el reto funcione sin backend ni costos, pero una persona con conocimientos de desarrollo puede inspeccionar el código y encontrar la respuesta. Es apropiado para una primera experiencia comunitaria, no para un concurso con premio o validación confidencial. Para eso, conecta un backend o una función serverless y mueve allí la verificación.

## Comprobación local
Abre `index.html` en el navegador para revisar el diseño. Para probar el flujo completo, entra a **Abrir archivo 001**, descarga el TXT, resuelve el reto y escribe `ORIGEN`.
