# Guía de despliegue — Albergue de Mascotas "Segundo Hogar"

Guía paso a paso para compilar la aplicación y desplegarla manualmente en GitHub Pages utilizando una rama huérfana (orphan branch).

> ⚠️ **Nota previa:** Es obligatorio haber completado primero la configuración local detallada en `docs/guia-de-desarrollo.md` (o el documento de prerrequisitos correspondiente) antes de iniciar este proceso.

---

## 1. Construir la versión de producción

Primero, genera los archivos optimizados y minificados para el entorno web. En la raíz de tu proyecto original, ejecuta:

```powershell
npm run build
```

Esto creará una carpeta llamada `dist/` en la raíz de tu proyecto, la cual contiene el HTML, CSS y JavaScript listos para producción.

## 2. Preparar el directorio de despliegue

Para evitar conflictos de historial, el despliegue se realizará desde una carpeta limpia e independiente.

1. Abre tu terminal y navega a tu directorio de usuario (o donde guardes tus proyectos).
2. Clona el repositorio en una nueva carpeta llamada `cibertec-efsrt2-build`:

```powershell
cd ~
git clone <URL_DEL_REPOSITORIO> cibertec-efsrt2-build
cd cibertec-efsrt2-build
```

## 3. Crear la rama limpia (`gh-pages`)

Dentro de la nueva carpeta `cibertec-efsrt2-build`, crearemos una rama huérfana (sin historial previo) dedicada exclusivamente a los archivos de producción:

```powershell
# 1. Crear la rama huérfana
git checkout --orphan gh-pages

# 2. Vaciar el área de preparación para asegurar que empiece desde cero
git rm -rf .
```

## 4. Transferir los archivos compilados

Ahora debes copiar el contenido de la carpeta `dist/` de tu proyecto original hacia esta nueva carpeta de compilación.

Ajusta las rutas en el comando según dónde se encuentren tus carpetas:

```powershell
# Reemplaza '../albergue-mascotas' por la ruta real de tu proyecto original si es distinta
cp -r ../albergue-mascotas/dist/* .
```

## 5. Registrar cambios y confirmar el despliegue

Indexa los nuevos archivos e incluye automáticamente la fecha y hora de tu PC en el mensaje del commit:

```powershell
# 1. Agregar todos los archivos (incluyendo cualquier cambio o eliminación)
git add .

# 2. Confirmar con la fecha automatizada del sistema
git commit -m "Despliegue realizado el $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
```

## 6. Publicar en GitHub

Envía los cambios a GitHub para activar el despliegue de GitHub Pages:

```
git push origin gh-pages --force
```

💡 Nota: Usamos --force porque al ser una rama huérfana, el historial se sobrescribirá deliberadamente con la última versión limpia de la carpeta dist/.

Al finalizar la subida, tu proyecto estará disponible públicamente en unos minutos en:

https://<tu-usuario>.github.io/<nombre-del-repositorio>/