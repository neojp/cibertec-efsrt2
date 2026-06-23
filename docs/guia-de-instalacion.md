# Guía de instalación — Albergue de Mascotas "Segundo Hogar"

Guía paso a paso para abrir y ejecutar el proyecto en tu computadora local.

---

## 1. Requisitos previos

### 1.1 Git

Descarga e instala **Git for Windows** desde:

> https://git-scm.com/downloads/win

Durante la instalación deja todas las opciones por defecto. Esto te dará **Git Bash**, que puedes usar como terminal si lo prefieres.

Para verificar que se instaló correctamente, abre una terminal (PowerShell, CMD o Git Bash) y ejecuta:

```powershell
git --version
```

Deberías ver algo como `git version 2.x.x`.

### 1.2 Node.js

El proyecto está configurado con **Node.js v24.14.1** (recomendado), pero cualquier versión **18 o superior** debería funcionar.

#### Opción A — Instalación directa (recomendada para principiantes)

Descarga e instala Node.js desde:

> https://nodejs.org/

Elige la versión **LTS** (la más estable). El instalador incluye **npm**.

Verifica la instalación:

```powershell
node --version
npm --version
```

#### Opción B — Instalación con Volta (avanzado)

[Volta](https://volta.sh/) permite manejar múltiples versiones de Node.js. Si lo usas, una vez instalado, el proyecto usará automáticamente la versión correcta.

### 1.3 VS Code (recomendado)

Descarga e instala **Visual Studio Code** desde:

> https://code.visualstudio.com/

#### Extensiones útiles para este proyecto

- **ESLint** (dbaeumer.vscode-eslint) — resalta errores de código en tiempo real.
- **Prettier** (esbenp.prettier-vscode) — formatea el código automáticamente.
- **vscode-icons** o **Material Icon Theme** — muestra iconos reconocibles en las carpetas.

---

## 2. Descargar el proyecto

### 2.1 Clonar el repositorio

Abre una terminal en la carpeta donde quieras guardar el proyecto y ejecuta:

```powershell
git clone <URL_DEL_REPOSITORIO>
```

Reemplaza `<URL_DEL_REPOSITORIO>` con la URL del repositorio (por ejemplo, `https://github.com/usuario/albergue-mascotas.git`).

Esto creará una carpeta con el nombre del proyecto.

### 2.2 Entrar a la carpeta del proyecto

```powershell
cd albergue-mascotas
```

---

## 3. Abrir el proyecto en VS Code (opcional)

```powershell
code .
```

Este comando abre la carpeta actual en VS Code. Si no funciona, abre VS Code manualmente y ve a **Archivo → Abrir carpeta**.

---

## 4. Instalar dependencias

El proyecto usa librerías externas (React, React Router, Vite, etc.) que deben descargarse antes de ejecutarlo.

Ejecuta en la terminal (asegúrate de estar dentro de la carpeta del proyecto):

```powershell
npm install
```

Este comando lee el archivo `package.json`, descarga todo lo necesario y lo guarda en la carpeta `node_modules`.

> **Nota:** La carpeta `node_modules` no se incluye en Git (está en `.gitignore`). Por eso es obligatorio ejecutar `npm install` después de clonar.

---

## 5. Ejecutar en modo desarrollo

```powershell
npm run dev
```

Esto inicia un servidor local. En la terminal aparecerá algo como:

```
VITE v8.x.x  ready in XXX ms
➜  Local:   http://localhost:5173/
➜  Network: http://192.168.x.x:5173/
```

Abre tu navegador y ve a **http://localhost:5173/** para ver la aplicación.

**Características del modo desarrollo:**

- Recarga automática al guardar cambios (Hot Module Replacement).
- Los errores se muestran en la consola del navegador y en la terminal.

Para detener el servidor, presiona `Ctrl + C` en la terminal y confirma con `S`.

---

## 6. Construir para producción

Cuando termines de hacer cambios y quieras generar una versión optimizada para publicar:

```powershell
npm run build
```

Esto genera una carpeta `dist/` con los archivos listos para subir a un servidor web (HTML, CSS, JS minificados).

---

## 7. Vista previa de la versión de producción

Para probar localmente cómo se ve la versión compilada:

```powershell
npm run preview
```

Esto sirve el contenido de la carpeta `dist/` en un servidor local (normalmente en `http://localhost:5173/`).

---

## 8. Comandos adicionales

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run start` | Alias de `npm run dev` |
| `npm run build` | Compila el proyecto para producción |
| `npm run preview` | Vista previa de la versión compilada |
| `npm run lint` | Ejecuta ESLint para revisar el código |
| `npm run lint:css` | Ejecuta Stylelint para revisar los CSS |

---

## 9. Solución de problemas comunes

### "No se reconoce 'npm' como un comando"

Node.js no está instalado o no está en el PATH. Reinstala Node.js desde nodejs.org y asegúrate de marcar la opción "Add to PATH" durante la instalación.

### "EACCES: permission denied" al instalar dependencias

En Windows ejecuta la terminal como **Administrador**. O usa `npm install --no-optional` para omitir dependencias opcionales.

### El servidor no se abre en `localhost:5173`

Puede que el puerto esté ocupado. Vite usará automáticamente el siguiente disponible (5174, 5175...). Revisa la terminal para ver la URL exacta.

### "Module not found: Can't resolve '...'"

Alguna dependencia no se instaló correctamente. Intenta:

```powershell
npm install
```

Si el problema persiste, borra la carpeta `node_modules` y el archivo `package-lock.json`, y vuelve a instalar:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

### Error con la versión de Node.js

Si usas Volta, asegúrate de tener la versión correcta:

```powershell
volta install node@24.14.1
```

Si no usas Volta, descarga la versión 24.14.1 desde nodejs.org o simplemente usa cualquier versión LTS reciente (18+).

---

## 10. Estructura del proyecto

```
albergue-mascotas/
├── public/                  # Archivos estáticos (favicon, etc.)
├── src/
│   ├── assets/
│   │   ├── css/             # Archivos CSS del proyecto
│   │   ├── icons/           # Iconos SVG
│   │   └── images/          # Imágenes
│   ├── components/          # Componentes reutilizables de React
│   ├── data/                # Datos estáticos (JSON, etc.)
│   ├── pages/               # Páginas de la aplicación
│   ├── App.jsx              # Componente raíz
│   └── main.jsx             # Punto de entrada
├── .editorconfig            # Configuración de formato
├── .gitignore               # Archivos ignorados por Git
├── eslint.config.js         # Configuración de ESLint
├── index.html               # HTML principal
├── package.json             # Dependencias y scripts
├── vite.config.js           # Configuración de Vite
└── README.md                # Información general del proyecto
```

---

## 11. Resumen rápido

Si ya tienes Git y Node.js instalados, estos son los pasos expresos:

```powershell
git clone <URL_DEL_REPOSITORIO>
cd albergue-mascotas
npm install
npm run dev
```

Listo. La aplicación estará disponible en `http://localhost:5173/`.
