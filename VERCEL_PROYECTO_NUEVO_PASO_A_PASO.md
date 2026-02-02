# 🚀 LANA Celo: Nuevo proyecto en Vercel (paso a paso)

Guía para crear **un proyecto Vercel nuevo desde cero**, sin heredar configuración del proyecto anterior. Evita errores de versiones y configuraciones viejas.

---

## Antes de empezar

- [ ] Tienes el código en GitHub (repositorio **LANA-Celo** o **enerpay**).
- [ ] Tienes cuenta en [Vercel](https://vercel.com) (login con GitHub).
- [ ] Tienes un **WalletConnect Project ID** (gratis en [cloud.walletconnect.com](https://cloud.walletconnect.com)).

---

## Paso 1: Limpiar vínculo con el proyecto viejo (opcional)

Si en tu máquina tienes la carpeta `.vercel` en la raíz del repo, elimínala para que no se reutilice el proyecto anterior:

```bash
cd /home/edgadafi/enerpay   # o la ruta de tu repo
rm -rf .vercel
```

Así el próximo `vercel` que ejecutes (si usas CLI) creará un proyecto nuevo. Para esta guía usaremos solo el **Dashboard de Vercel**.

---

## Paso 2: Crear el proyecto en Vercel

### 2.1 Entrar a Vercel

1. Abre **https://vercel.com** e inicia sesión.
2. En la esquina superior derecha, haz clic en **Add New...** → **Project**.

### 2.2 Importar el repositorio

1. En **Import Git Repository**, busca tu repo:
   - **LANA-Celo** o **enerpay** (el que uses).
2. Si no aparece:
   - Clic en **Adjust GitHub App Permissions**.
   - Marca el repositorio correcto y **Install** / **Save**.
3. Cuando veas el repo, haz clic en **Import**.

---

## Paso 3: Configurar el proyecto (importante)

En la pantalla **Configure Project** no hagas clic en Deploy todavía. Ajusta lo siguiente:

### 3.1 Nombre del proyecto

- **Project Name**: `lana-celo` (o el que prefieras; Vercel lo pondrá en minúsculas).
- Así la URL será: `https://lana-celo.vercel.app` (o similar).

### 3.2 Root Directory

- Junto a **Root Directory** haz clic en **Edit**.
- Escribe exactamente: **`frontend`** (sin `/` al inicio o final).
- Confirma.

Esto es obligatorio: el Next.js está dentro de `frontend/`, no en la raíz del repo.

### 3.3 Framework

- **Framework Preset**: debe aparecer **Next.js**. Si no, selecciónalo a mano.

### 3.4 Build and Output Settings

Deja que Vercel detecte por defecto **o** configura explícitamente:

| Campo              | Valor |
|--------------------|--------|
| Build Command      | `npm run build` |
| Output Directory   | `.next` |
| Install Command    | `npm install --legacy-peer-deps` |

El **Install Command** con `--legacy-peer-deps` suele evitar errores de dependencias (RainbowKit, etc.).

### 3.5 Variables de entorno (primera vez)

Puedes saltar por ahora y agregarlas después (Paso 5), o añadir ya la obligatoria:

- **Name**: `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`
- **Value**: tu Project ID de [WalletConnect Cloud](https://cloud.walletconnect.com)
- Marca: Production, Preview, Development

Luego haz clic en **Deploy**.

---

## Paso 4: Esperar el primer build

1. Vercel clonará el repo y ejecutará `npm install --legacy-peer-deps` y `npm run build`.
2. Si el **build falla**, anota el mensaje de error (por ejemplo: "Cannot find module...", "Module not found...") y pasa al **Paso 6 (Solución de errores)**.
3. Si el build **termina en verde**, pasa al Paso 5 para añadir el resto de variables y redesplegar.

---

## Paso 5: Variables de entorno y redespliegue

1. En el proyecto, ve a **Settings** → **Environment Variables**.
2. Añade estas variables (**Add New** para cada una). En **Environments** marca las tres: Production, Preview, Development.

| Name | Value |
|------|--------|
| `NEXT_PUBLIC_APP_NAME` | `LANA.celo` |
| `NEXT_PUBLIC_CELO_RPC_URL` | `https://forno.celo.org` |
| `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` | *(tu Project ID de WalletConnect)* |
| `NEXT_PUBLIC_REMITTANCE_CONTRACT_ADDRESS` | `0xB35aB84408E28D0B81205293Dd2ed1d6E8566f1e` |
| `NEXT_PUBLIC_MICROFINANCE_CONTRACT_ADDRESS` | `0xc19C1A8bb735288e753fD737aF88bf559063D617` |

3. Guarda.
4. Ve a **Deployments** → en el último deployment, clic en **⋯** → **Redeploy** (para que el build use las nuevas variables).

---

## Paso 6: Si el build dio error

### Error tipo: "Cannot find module" / "Module not found"

- Confirma que **Root Directory** es exactamente **`frontend`** (Settings → General → Root Directory).
- Confirma que **Install Command** es `npm install --legacy-peer-deps` (Settings → General → Build & Development Settings).

### Error tipo: "No such file or directory" en `package.json`

- El root del proyecto debe ser `frontend`. Vercel tiene que ver `frontend/package.json`. Revisa de nuevo Root Directory.

### Error en dependencias (peer dependencies, React, etc.)

- En **Settings** → **General** → **Build & Development Settings**:
  - **Install Command**: `npm install --legacy-peer-deps`
- Guarda y **Redeploy**.

### La web carga pero la wallet no conecta

- Revisa que `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` esté definida en Production (y opcionalmente Preview/Development) y que hayas hecho **Redeploy** después de añadirla.

---

## Paso 7: Verificar

1. Abre la URL que te dio Vercel (ej. `https://lana-celo.vercel.app`).
2. Deberías ver la landing de LANA Celo.
3. Prueba **Conectar wallet** / **Inicia cobrando** y que MetaMask (o tu wallet) se conecte a Celo.

---

## Resumen de comprobaciones

| Qué | Dónde | Valor correcto |
|-----|--------|-----------------|
| Root Directory | Settings → General | `frontend` |
| Install Command | Settings → Build & Development | `npm install --legacy-peer-deps` |
| Build Command | (opcional) | `npm run build` |
| NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID | Settings → Environment Variables | Tu Project ID |

---

## Opcional: Dominio propio

En **Settings** → **Domains** puedes añadir un dominio (ej. `lana.tudominio.com`) y seguir las instrucciones de DNS que muestra Vercel.

---

Si un paso concreto falla, copia el mensaje de error exacto y la captura de **Root Directory** y **Build & Development Settings** para depurar más rápido.
