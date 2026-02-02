# 🔧 Fix: Desactivar Botones Override en Vercel

## Problema

Los campos en Build & Development Settings están vacíos, pero los botones **"Override"** están activados. Esto puede hacer que Vercel use valores guardados o por defecto en lugar de auto-detección.

## Solución

### Paso 1: Desactivar Todos los Botones Override

1. Ve a: https://vercel.com/edgadafis-projects/lana-celo/settings
2. Ve a **General** → **Build & Development Settings**
3. Para cada campo, **DESACTIVA el botón "Override"** (toggle switch):

**Build Command:**
- ✅ Campo vacío
- ✅ Botón "Override" **DESACTIVADO** (toggle off)

**Output Directory:**
- ✅ Campo vacío
- ✅ Botón "Override" **DESACTIVADO** (toggle off)

**Install Command:**
- ✅ Campo vacío
- ✅ Botón "Override" **DESACTIVADO** (toggle off)

**Development Command:**
- ✅ Campo vacío o `npm run dev`
- ✅ Botón "Override" **DESACTIVADO** (si está disponible)

**Root Directory:**
- ✅ Debe decir: `frontend`
- ✅ Este campo debe estar configurado (no es override)

### Paso 2: Verificar Framework Preset

Asegúrate de que:
- **Framework Preset:** `Next.js` (auto-detectado o seleccionado manualmente)

### Paso 3: Guardar y Redesplegar

1. Haz clic en **Save** para guardar todos los cambios
2. Ve a **Deployments**
3. Haz clic en los tres puntos (⋯) del último deployment
4. Selecciona **Redeploy**
5. Espera a que el build complete (2-5 minutos)

## Configuración Correcta Final

### Build & Development Settings:

```
Framework Preset: Next.js
Root Directory: frontend
Build Command: (vacío, Override DESACTIVADO)
Output Directory: (vacío, Override DESACTIVADO)
Install Command: (vacío, Override DESACTIVADO)
Development Command: (vacío, Override DESACTIVADO)
```

## Por Qué Esto Funciona

Cuando los botones "Override" están **DESACTIVADOS**:
- ✅ Vercel usa auto-detección completa
- ✅ Detecta Next.js automáticamente
- ✅ Usa los comandos por defecto de Next.js
- ✅ Configura el Output Directory automáticamente
- ✅ Todo funciona desde el Root Directory configurado (`frontend/`)

Cuando los botones "Override" están **ACTIVADOS** (incluso con campos vacíos):
- ⚠️ Vercel puede usar valores guardados anteriormente
- ⚠️ Puede haber conflictos con la auto-detección
- ⚠️ Puede causar problemas con el Output Directory

## Verificación

Después de desactivar los Overrides y redesplegar:

1. **Espera a que el build complete**
2. **Verifica los logs** - deberían mostrar:
   - ✅ `Detected Next.js version: 14.2.5`
   - ✅ `Running "install" command: npm install...` (sin `cd frontend`)
   - ✅ `Running "build" command: npm run build...` (sin `cd frontend`)
   - ✅ Build exitoso

3. **Abre la URL**: `https://lana-celo.vercel.app`
4. **Deberías ver**:
   - ✅ La landing page de LANA Celo
   - ✅ NO 404

## Si el Problema Persiste

Si después de desactivar los Overrides el problema persiste:

1. **Verifica que Root Directory = `frontend`** esté configurado
2. **Verifica que no haya `vercel.json`** en el repositorio
3. **Revisa los logs del build** para ver exactamente qué comandos está ejecutando
4. **Considera eliminar y recrear el proyecto** como último recurso

## Resumen

**La clave es:**
- ✅ Root Directory = `frontend`
- ✅ Todos los campos VACÍOS
- ✅ Todos los botones "Override" **DESACTIVADOS**
- ✅ Vercel auto-detecta todo automáticamente

Con esta configuración, Vercel debería funcionar correctamente y servir la aplicación sin 404.

