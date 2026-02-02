# 🚀 Guía: Crear y Desplegar LANA Celo en Vercel

Esta guía te llevará paso a paso para crear un nuevo proyecto en Vercel con el nombre **LANA Celo** y desplegar la landing page.

## 📋 Paso 1: Preparar el Repositorio

### 1.1 Verificar que el código esté en GitHub

```bash
# Verificar el estado del repositorio
cd /home/edgadafi/enerpay
git status

# Si hay cambios sin commitear, haz commit
git add .
git commit -m "feat: Complete LANA Celo rebranding and landing page"

# Push al repositorio remoto
git push origin main
```

### 1.2 Verificar estructura del proyecto

Asegúrate de que tu repositorio tenga esta estructura:
```
enerpay/
├── frontend/              ← Directorio del proyecto Next.js
│   ├── package.json
│   ├── next.config.js (o .mjs)
│   ├── src/
│   └── ...
├── contracts/             ← Smart contracts (no se despliega)
└── vercel.json           ← Configuración de Vercel
```

---

## 📋 Paso 2: Crear Nuevo Proyecto en Vercel

### 2.1 Acceder a Vercel Dashboard

1. Ve a [vercel.com](https://vercel.com)
2. Inicia sesión con tu cuenta (GitHub, GitLab, o Bitbucket)
3. Si no tienes cuenta, créala con tu proveedor de Git preferido

### 2.2 Crear Nuevo Proyecto

1. En el Dashboard, haz clic en **Add New...** → **Project**
2. Selecciona el repositorio **enerpay** (o el nombre de tu repo)
3. Si no ves el repositorio:
   - Haz clic en **Adjust GitHub App Permissions**
   - Selecciona el repositorio correcto
   - Haz clic en **Install**

### 2.3 Configurar el Proyecto

**Nombre del Proyecto:**
- **Project Name**: `LANA Celo` (o `lana-celo` - Vercel convertirá a minúsculas)

**Framework Preset:**
- Vercel debería detectar automáticamente **Next.js**
- Si no lo detecta, selecciona **Next.js** manualmente

**Root Directory:**
- Haz clic en **Edit** junto a "Root Directory"
- Ingresa: `frontend`
- Esto le dice a Vercel que el proyecto Next.js está en el subdirectorio `frontend`

**Build and Output Settings:**
- **Build Command**: `npm run build` (o dejar vacío para auto-detect)
- **Output Directory**: `.next` (o dejar vacío para auto-detect)
- **Install Command**: `npm install` (o dejar vacío para auto-detect)

**Environment Variables:**
En este paso puedes agregar variables, pero es mejor hacerlo después. Haz clic en **Skip** por ahora.

### 2.4 Crear el Proyecto

1. Revisa la configuración
2. Haz clic en **Deploy**
3. Espera a que Vercel clone el repositorio y haga el build (2-5 minutos)

---

## 📋 Paso 3: Configurar Variables de Entorno

### 3.1 Acceder a Settings

1. Una vez creado el proyecto, ve a **Settings** → **Environment Variables**

### 3.2 Agregar Variables Necesarias

Agrega las siguientes variables (haz clic en **Add New** para cada una):

#### Variable 1: App Name
- **Name**: `NEXT_PUBLIC_APP_NAME`
- **Value**: `LANA Celo`
- **Environments**: ✅ Production, ✅ Preview, ✅ Development

#### Variable 2: Celo RPC URL
- **Name**: `NEXT_PUBLIC_CELO_RPC_URL`
- **Value**: `https://forno.celo.org`
- **Environments**: ✅ Production, ✅ Preview, ✅ Development

#### Variable 3: WalletConnect Project ID
- **Name**: `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`
- **Value**: [Tu Project ID de WalletConnect - ver Paso 4]
- **Environments**: ✅ Production, ✅ Preview, ✅ Development

#### Variable 4: Remittance Contract Address (Opcional)
- **Name**: `NEXT_PUBLIC_REMITTANCE_CONTRACT_ADDRESS`
- **Value**: `0xB35aB84408E28D0B81205293Dd2ed1d6E8566f1e`
- **Environments**: ✅ Production, ✅ Preview, ✅ Development

#### Variable 5: Microfinance Contract Address (Opcional)
- **Name**: `NEXT_PUBLIC_MICROFINANCE_CONTRACT_ADDRESS`
- **Value**: `0xc19C1A8bb735288e753fD737aF88bf559063D617`
- **Environments**: ✅ Production, ✅ Preview, ✅ Development

### 3.3 Guardar Variables

Después de agregar cada variable, haz clic en **Save**. Verás todas las variables listadas.

---

## 📋 Paso 4: Configurar WalletConnect (Si aún no lo tienes)

### 4.1 Crear Proyecto en WalletConnect Cloud

1. Ve a [cloud.walletconnect.com](https://cloud.walletconnect.com)
2. Inicia sesión o crea una cuenta (es gratis)
3. Haz clic en **Create New Project** o **+ New Project**

### 4.2 Configurar el Proyecto

Completa el formulario:
- **Project Name**: `LANA Celo`
- **Homepage URL**: `https://lana-celo.vercel.app` (o el dominio que Vercel te asignó)
- **Allowed Domains**: 
  - `localhost:3000` (para desarrollo local)
  - `*.vercel.app` (para previews de Vercel)
  - `lana-celo.vercel.app` (tu dominio de producción)
  - Agrega cualquier otro dominio que uses

### 4.3 Copiar Project ID

1. Una vez creado, copia el **Project ID** (32 caracteres hexadecimales)
2. Vuelve a Vercel y agrega esta variable como se indicó en el Paso 3.2

---

## 📋 Paso 5: Verificar Configuración

### 5.1 Verificar Root Directory

1. Ve a **Settings** → **General**
2. Verifica que **Root Directory** muestre: `frontend`
3. Si no está configurado, haz clic en **Edit** y cambia a `frontend`

### 5.2 Verificar Build Settings

1. Ve a **Settings** → **General**
2. Verifica **Build & Development Settings**:
   - Framework Preset: Next.js
   - Root Directory: frontend
   - Build Command: (dejar vacío para auto-detect)
   - Output Directory: (dejar vacío para auto-detect)

### 5.3 Verificar Variables de Entorno

1. Ve a **Settings** → **Environment Variables**
2. Deberías ver al menos estas variables:
   - ✅ `NEXT_PUBLIC_APP_NAME`
   - ✅ `NEXT_PUBLIC_CELO_RPC_URL`
   - ✅ `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`

---

## 📋 Paso 6: Redesplegar la Aplicación

Después de configurar las variables de entorno, necesitas redesplegar:

### Opción 1: Desde el Dashboard (Recomendado)

1. Ve a **Deployments**
2. Haz clic en los tres puntos (⋯) del último deployment
3. Selecciona **Redeploy**
4. Confirma el redeploy
5. Espera a que termine el build (2-5 minutos)

### Opción 2: Hacer un Nuevo Push

```bash
cd /home/edgadafi/enerpay
git commit --allow-empty -m "chore: trigger redeploy for LANA Celo"
git push origin main
```

Vercel detectará automáticamente el push y creará un nuevo deployment.

---

## 📋 Paso 7: Verificar el Deployment

### 7.1 Verificar Build

1. Ve a **Deployments**
2. El último deployment debería estar en estado **Ready** (verde)
3. Si hay errores, haz clic en el deployment para ver los logs

### 7.2 Verificar la Aplicación

1. Haz clic en el deployment
2. Haz clic en el dominio (ej: `lana-celo.vercel.app`)
3. Verifica que:
   - La landing page carga correctamente
   - El hero section se ve bien
   - Las secciones se muestran correctamente
   - El botón de conexión funciona

### 7.3 Probar Conexión de Wallet

1. En la aplicación desplegada, haz clic en **Conectar Wallet**
2. Deberías poder conectar tu wallet sin errores
3. Verifica que no aparezcan errores en la consola del navegador

---

## 📋 Paso 8: Configurar Dominio Personalizado (Opcional)

### 8.1 Agregar Dominio

1. Ve a **Settings** → **Domains**
2. Ingresa tu dominio (ej: `lana-celo.com`)
3. Sigue las instrucciones para configurar DNS

### 8.2 Actualizar WalletConnect

1. Ve a [cloud.walletconnect.com](https://cloud.walletconnect.com)
2. Selecciona tu proyecto LANA Celo
3. Agrega el nuevo dominio a **Allowed Domains**
4. Actualiza **Homepage URL** si es necesario

---

## ✅ Checklist Final

Antes de considerar el deployment completo, verifica:

- [ ] Proyecto creado en Vercel con nombre "LANA Celo"
- [ ] Root Directory configurado como `frontend`
- [ ] Variables de entorno agregadas:
  - [ ] `NEXT_PUBLIC_APP_NAME=LANA Celo`
  - [ ] `NEXT_PUBLIC_CELO_RPC_URL`
  - [ ] `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`
- [ ] WalletConnect Project ID obtenido y configurado
- [ ] Dominios permitidos configurados en WalletConnect Cloud
- [ ] Build completado exitosamente
- [ ] Aplicación carga correctamente en producción
- [ ] Landing page se muestra correctamente
- [ ] Conexión de wallet funciona sin errores
- [ ] Todas las secciones de la landing page son visibles

---

## 🐛 Solución de Problemas

### Error: "No Next.js version detected"

**Causa**: Root Directory no está configurado correctamente.

**Solución**:
1. Ve a **Settings** → **General** → **Root Directory**
2. Asegúrate de que sea exactamente `frontend` (sin espacios, sin `/` al inicio)
3. Guarda y redesplega

### Error: "Build failed"

**Causa**: Puede haber errores en el código o dependencias faltantes.

**Solución**:
1. Revisa los logs del build en Vercel Dashboard
2. Verifica que el build funcione localmente:
   ```bash
   cd frontend
   npm install
   npm run build
   ```
3. Corrige cualquier error antes de hacer push

### Error: "WalletConnect 403" o "Origin not found"

**Causa**: El dominio no está en la lista de dominios permitidos.

**Solución**:
1. Ve a [cloud.walletconnect.com](https://cloud.walletconnect.com)
2. Selecciona tu proyecto LANA Celo
3. Ve a **Project Settings** → **Allowed Domains**
4. Agrega todos los dominios necesarios:
   - `localhost:3000`
   - `*.vercel.app`
   - Tu dominio de producción

### Error: Variables de entorno no funcionan

**Causa**: Variables no están configuradas o no se redesplegó después de agregarlas.

**Solución**:
1. Verifica que las variables estén en **Settings** → **Environment Variables**
2. Asegúrate de que estén marcadas para **Production**, **Preview**, y **Development**
3. Redesplega la aplicación después de agregar variables

---

## 📚 Recursos Adicionales

- [Documentación de Vercel](https://vercel.com/docs)
- [Vercel - Root Directory](https://vercel.com/docs/projects/project-configuration#root-directory)
- [Vercel - Environment Variables](https://vercel.com/docs/environment-variables)
- [WalletConnect Cloud Documentation](https://docs.walletconnect.com/cloud)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

---

## 🎉 ¡Listo!

Una vez completados todos los pasos, tu landing page de LANA Celo estará desplegada y accesible en:
- **URL de Producción**: `https://lana-celo.vercel.app` (o tu dominio personalizado)

**¡Felicitaciones! Tu proyecto LANA Celo está listo para el Buildathon 2026! 🚀**

