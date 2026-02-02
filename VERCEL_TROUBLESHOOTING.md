# 🔧 Troubleshooting: Vercel Root Directory Issue

## Problema Actual

Vercel está ejecutando `cd frontend && npm install` incluso cuando Root Directory está configurado como `frontend`. Esto indica que hay configuración guardada que está sobrescribiendo el Root Directory.

## Diagnóstico

El log muestra:
```
Running "install" command: `cd frontend && npm install --legacy-peer-deps`...
```

Esto NO debería aparecer si Root Directory está configurado correctamente. Debería mostrar:
```
Running "install" command: `npm install --legacy-peer-deps`...
```

## Solución: Limpiar Configuración en Vercel Dashboard

### Paso 1: Verificar Build & Development Settings

1. Ve a: https://vercel.com/edgadafis-projects/lana-celo/settings
2. Ve a la sección **General** → **Build & Development Settings**
3. Verifica estos campos:

**Install Command:**
- Debe estar **VACÍO** (dejar que Vercel auto-detecte)
- O debe ser: `npm install --legacy-peer-deps` (SIN `cd frontend`)
- Si dice `cd frontend && npm install...`, **BÓRRALO** y déjalo vacío

**Build Command:**
- Debe estar **VACÍO** (dejar que Vercel auto-detecte)
- O debe ser: `npm run build` (SIN `cd frontend`)
- Si dice `cd frontend && npm run build...`, **BÓRRALO** y déjalo vacío

**Output Directory:**
- Debe estar **VACÍO** (dejar que Vercel auto-detecte)
- O debe ser: `.next` (SIN `frontend/`)
- Si dice `frontend/.next`, **CÁMBIALO** a `.next` o déjalo vacío

**Development Command:**
- Puede estar vacío o ser: `npm run dev`

### Paso 2: Verificar Root Directory

1. En la misma sección **General**
2. **Root Directory** debe decir exactamente: `frontend`
3. Si no está configurado, configúralo como `frontend`

### Paso 3: Guardar y Redesplegar

1. Haz clic en **Save** para guardar todos los cambios
2. Ve a **Deployments**
3. Haz clic en los tres puntos (⋯) del último deployment
4. Selecciona **Redeploy**

## Configuración Correcta Final

### En Vercel Dashboard → Settings → General:

**Root Directory:**
```
frontend
```

**Build & Development Settings:**
- **Framework Preset:** Next.js (auto-detectado)
- **Root Directory:** `frontend`
- **Build Command:** (vacío - auto-detect)
- **Output Directory:** (vacío - auto-detect)
- **Install Command:** (vacío - auto-detect)
- **Development Command:** (vacío o `npm run dev`)

### En el Repositorio:

- ✅ NO debe haber `vercel.json` en la raíz
- ✅ NO debe haber `vercel.json` en `frontend/`
- ✅ Estructura del proyecto:
  ```
  enerpay/
  ├── frontend/
  │   ├── package.json
  │   ├── next.config.mjs
  │   └── src/
  └── .vercel/  (configuración de Vercel)
  ```

## Verificación

Después de limpiar la configuración y redesplegar, los logs deberían mostrar:

✅ **Correcto:**
```
Running "install" command: `npm install --legacy-peer-deps`...
Detected Next.js version: 14.2.5
Running "build" command: `npm run build`...
```

❌ **Incorrecto (lo que está pasando ahora):**
```
Running "install" command: `cd frontend && npm install --legacy-peer-deps`...
Error: No Next.js version detected
```

## Si el Problema Persiste

1. **Elimina el proyecto y créalo de nuevo:**
   - Ve a Vercel Dashboard
   - Elimina el proyecto `lana-celo` (o el nombre que tenga)
   - Crea un nuevo proyecto
   - **Configura Root Directory como `frontend` desde el inicio**
   - NO configures Build Command, Install Command, o Output Directory manualmente
   - Deja que Vercel auto-detecte todo

2. **Verifica que no haya archivos de configuración:**
   ```bash
   cd /home/edgadafi/enerpay
   find . -name "vercel.json" -o -name ".vercelignore"
   ```

3. **Limpia la caché de Vercel:**
   - En el deployment, haz clic en **Redeploy** con la opción de limpiar caché

## Resumen

El problema es que hay comandos guardados en Vercel Dashboard que incluyen `cd frontend`, lo cual sobrescribe el Root Directory. La solución es:

1. ✅ Root Directory = `frontend`
2. ✅ Build Command = VACÍO (auto-detect)
3. ✅ Install Command = VACÍO (auto-detect)
4. ✅ Output Directory = VACÍO (auto-detect)

Con esta configuración, Vercel ejecutará todo desde `frontend/` automáticamente.

