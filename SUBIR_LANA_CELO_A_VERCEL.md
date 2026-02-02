# Subir LANA Celo a Vercel (que deje de aparecer LatamFi)

## Por qué Vercel sigue mostrando LatamFi

Vercel despliega **lo que está en GitHub**. Tu frontend de LANA Celo (landing nueva, página de inicio, diseño Soft-Tech) está solo en tu PC; no está en el repositorio. Por eso el sitio en Vercel sigue siendo el antiguo (LatamFi).

## Qué hacer

### 1. Subir todo el código al repo que usa Vercel

Desde la **raíz del proyecto** (`~/enerpay`):

```bash
cd /home/edgadafi/enerpay

# Ver qué repo usa Vercel (enerpay-celo o LANA-Celo)
# Luego sube a ESE repo.

# Si Vercel está conectado a GitHub "LANA-Celo":
git add .
git status   # revisa que esté frontend/src/app/page.tsx, landing-lana/, etc.
git commit -m "feat: frontend LANA Celo - landing Soft-Tech, página de inicio, rebrand completo"
git push lana-celo main

# Si Vercel está conectado a "enerpay-celo" (origin):
# git push origin main
```

### 2. Decidir a qué repo apunta Vercel

- Entra a [vercel.com](https://vercel.com) → tu proyecto.
- **Settings** → **Git** → mira **Connected Git Repository**.
- Si dice **Edgadafi/LANA-Celo** → usa `git push lana-celo main`.
- Si dice **Edgadafi/enerpay-celo** → usa `git push origin main`.

### 3. Forzar un despliegue nuevo (opcional)

Después del push, Vercel suele desplegar solo. Si no:

- **Deployments** → **⋯** en el último deployment → **Redeploy**.
- Para evitar caché: **Redeploy** → marca **Clear cache and redeploy**.

### 4. Comprobar

Abre la URL de tu proyecto en Vercel. Deberías ver:

- Logo **LANA.celo**
- Navbar con “Conectar Wallet”
- Hero: “Cobros seguros al instante, a la voz y con comisiones ultra bajas.”
- Secciones Seguridad, 3 pasos, FAQ, footer “Potenciado por Celo”

Si sigue saliendo LatamFi, confirma que el **último commit** del branch que Vercel usa contiene `frontend/src/app/page.tsx` y la carpeta `frontend/src/components/landing-lana/`.
