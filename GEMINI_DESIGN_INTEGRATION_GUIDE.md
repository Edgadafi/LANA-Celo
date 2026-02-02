# 🎨 Guía: Diseñar en Gemini e Integrar al Frontend

## 📋 Estructura del Proyecto Frontend

### Ubicación de Archivos Clave

```
frontend/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Layout principal (metadata, providers)
│   │   ├── page.tsx                  # Página principal (landing)
│   │   ├── globals.css               # Estilos globales
│   │   └── [otras páginas]/
│   ├── components/                   # Componentes React
│   │   ├── Logo.tsx                  # Logo de LANA Celo
│   │   ├── hero/
│   │   │   └── HeroSection.tsx       # Sección hero
│   │   └── landing/                  # Componentes de landing
│   │       ├── FeaturesSection.tsx
│   │       ├── HowItWorksSection.tsx
│   │       ├── BenefitsSection.tsx
│   │       ├── CTASection.tsx
│   │       └── Footer.tsx
│   └── lib/
│       └── utils.ts                  # Utilidades (cn, etc.)
├── tailwind.config.ts                # Configuración de Tailwind
└── package.json                      # Dependencias
```

## 🎯 Paso 1: Diseñar en Gemini

### Prompt Inicial para Gemini

```
Diseña una landing page moderna para LANA Celo, una plataforma de inclusión financiera 
para LATAM en Celo blockchain.

Requisitos:
- Fondo oscuro (azul oscuro #0A1628)
- Acentos en verde Celo (#35D07F)
- Tagline: "¡Envía, Paga, Crece!"
- Descripción: "Remesas, Servicios, Crédito. Comisiones Ultra Bajos."
- Logo: Diseño moderno para LANA Celo (sin rayo)
- Botón CTA: "Conectar Wallet"
- Badge: "Potenciado por Celo"

Proporciona:
1. Diseño visual detallado
2. Paleta de colores exacta
3. Tipografía y tamaños
4. Espaciado y layout
5. Componentes necesarios
```

### Información Específica a Solicitar

1. **Logo Design:**
   - Forma, colores, tamaño
   - SVG path o descripción detallada
   - Variantes (icon only, full, text only)

2. **Hero Section:**
   - Layout exacto (centrado, grid, etc.)
   - Tamaños de texto
   - Espaciado entre elementos
   - Efectos visuales (gradientes, sombras, etc.)

3. **Colores:**
   - Códigos hexadecimales exactos
   - Gradientes (dirección, stops)
   - Opacidades

4. **Tipografía:**
   - Fuentes (Google Fonts preferible)
   - Tamaños (px o rem)
   - Pesos (font-weight)
   - Line-height

## 🔧 Paso 2: Extraer Especificaciones del Diseño

### Checklist de Información a Obtener

- [ ] **Colores:**
  - [ ] Color principal de fondo
  - [ ] Color de texto principal
  - [ ] Color de acento (verde Celo)
  - [ ] Colores secundarios
  - [ ] Gradientes (si los hay)

- [ ] **Tipografía:**
  - [ ] Fuente principal
  - [ ] Fuente secundaria (si aplica)
  - [ ] Tamaños de texto (h1, h2, p, etc.)
  - [ ] Pesos de fuente

- [ ] **Layout:**
  - [ ] Ancho máximo del contenido
  - [ ] Padding/margin de secciones
  - [ ] Espaciado entre elementos
  - [ ] Breakpoints responsive

- [ ] **Componentes:**
  - [ ] Logo (SVG path o descripción)
  - [ ] Botones (estilos, tamaños, estados)
  - [ ] Cards (si aplica)
  - [ ] Badges

- [ ] **Efectos Visuales:**
  - [ ] Sombras
  - [ ] Gradientes
  - [ ] Animaciones
  - [ ] Hover effects

## 📝 Paso 3: Actualizar Tailwind Config

### Archivo: `frontend/tailwind.config.ts`

```typescript
// Ejemplo de cómo agregar colores personalizados
export default {
  theme: {
    extend: {
      colors: {
        lana: {
          dark: "#0A1628",        // Color de fondo oscuro
          darkAlt: "#1a2332",     // Variante de fondo
          green: "#35D07F",       // Verde Celo (Prosperity Green)
          white: "#FFFFFF",
          light: "#FBFFFE",
        },
        // Agregar más colores según el diseño
      },
      fontFamily: {
        // Agregar fuentes personalizadas
      },
      fontSize: {
        // Agregar tamaños personalizados si es necesario
      },
    },
  },
}
```

## 🎨 Paso 4: Crear/Actualizar Componentes

### Estructura de Componente

```tsx
// frontend/src/components/hero/HeroSection.tsx
"use client";

export function HeroSection() {
  return (
    <div className="hero-background min-h-screen flex flex-col items-center justify-center px-4 py-20">
      {/* Contenido según diseño de Gemini */}
    </div>
  );
}
```

### Guía para Cada Componente

1. **Logo (`Logo.tsx`):**
   - Si Gemini proporciona SVG path, reemplazar el SVG actual
   - Si proporciona imagen, guardar en `public/` y usar `<Image>`
   - Asegurar variantes: `iconOnly`, `textOnly`, `full`

2. **Hero Section (`HeroSection.tsx`):**
   - Copiar estructura exacta del diseño
   - Usar clases de Tailwind según especificaciones
   - Aplicar colores del diseño

3. **Otros Componentes:**
   - Seguir misma estructura
   - Mantener consistencia con Hero

## 🎯 Paso 5: Actualizar Estilos Globales

### Archivo: `frontend/src/app/globals.css`

```css
/* Agregar estilos personalizados según diseño */
.hero-background {
  /* Estilos según diseño de Gemini */
}

/* Animaciones personalizadas */
@keyframes custom-animation {
  /* Según diseño */
}
```

## 📋 Paso 6: Checklist de Integración

### Antes de Integrar

- [ ] Revisar diseño completo en Gemini
- [ ] Extraer todos los códigos de color
- [ ] Extraer todas las medidas (espaciado, tamaños)
- [ ] Identificar todos los componentes necesarios
- [ ] Identificar fuentes y tipografía

### Durante la Integración

- [ ] Actualizar `tailwind.config.ts` con colores
- [ ] Crear/actualizar componentes uno por uno
- [ ] Aplicar clases de Tailwind según diseño
- [ ] Agregar estilos personalizados en `globals.css` si es necesario
- [ ] Verificar responsive design

### Después de Integrar

- [ ] Probar en navegador (desarrollo local)
- [ ] Verificar que todos los elementos se ven correctamente
- [ ] Verificar responsive (móvil, tablet, desktop)
- [ ] Verificar contraste y accesibilidad
- [ ] Hacer commit y push

## 🚀 Paso 7: Proceso de Integración Rápida

### Opción A: Diseño Completo de Una Vez

1. **Obtener diseño completo de Gemini**
2. **Extraer todas las especificaciones**
3. **Actualizar `tailwind.config.ts`**
4. **Actualizar `globals.css`**
5. **Actualizar todos los componentes**
6. **Probar y ajustar**

### Opción B: Diseño por Secciones (Recomendado)

1. **Hero Section:**
   - Obtener diseño del hero
   - Extraer especificaciones
   - Actualizar `HeroSection.tsx`
   - Probar y ajustar

2. **Logo:**
   - Obtener diseño del logo
   - Extraer SVG o imagen
   - Actualizar `Logo.tsx`
   - Probar y ajustar

3. **Otras Secciones:**
   - Repetir proceso para cada sección

## 📝 Template de Prompt para Gemini

### Para Diseño Completo

```
Diseña una landing page moderna para LANA Celo con las siguientes especificaciones:

CONTEXTO:
- Plataforma de inclusión financiera para LATAM
- Construida en Celo blockchain
- Enfoque en remesas, servicios y microfinanzas

REQUISITOS TÉCNICOS:
- Framework: Next.js 14 con App Router
- Estilos: Tailwind CSS
- Colores base: Fondo oscuro (#0A1628), Verde Celo (#35D07F)
- Responsive: Mobile-first

ELEMENTOS NECESARIOS:
1. Logo moderno (sin rayo, representando LANA Celo)
2. Hero Section con:
   - Tagline: "¡Envía, Paga, Crece!"
   - Descripción: "Remesas, Servicios, Crédito. Comisiones Ultra Bajos."
   - Botón CTA: "Conectar Wallet"
   - Badge: "Potenciado por Celo"
3. Secciones adicionales (Features, How It Works, etc.)

PROPORCIONA:
- Diseño visual detallado
- Códigos de color exactos (hex)
- Especificaciones de tipografía
- Medidas y espaciado
- Código Tailwind CSS para cada elemento
- SVG path para el logo (si aplica)
```

### Para Componente Específico

```
Diseña el [COMPONENTE] para LANA Celo con:

ESPECIFICACIONES:
- [Detalles del componente]
- Colores: [Colores a usar]
- Estilo: [Estilo deseado]

PROPORCIONA:
- Diseño visual
- Código Tailwind CSS
- Medidas exactas
- Códigos de color
```

## 🔍 Paso 8: Verificación y Testing

### Checklist de Verificación

- [ ] **Visual:**
  - [ ] Logo se ve correctamente
  - [ ] Texto es legible (buen contraste)
  - [ ] Colores coinciden con diseño
  - [ ] Espaciado es correcto

- [ ] **Responsive:**
  - [ ] Móvil (< 640px)
  - [ ] Tablet (640px - 1024px)
  - [ ] Desktop (> 1024px)

- [ ] **Funcionalidad:**
  - [ ] Botones funcionan
  - [ ] Links funcionan
  - [ ] Animaciones funcionan (si las hay)

- [ ] **Performance:**
  - [ ] Imágenes optimizadas
  - [ ] Carga rápida
  - [ ] Sin errores en consola

## 💡 Tips para Integración Eficiente

1. **Usa Variables de Tailwind:**
   - Define colores en `tailwind.config.ts`
   - Reutiliza en todos los componentes

2. **Componentes Modulares:**
   - Crea componentes pequeños y reutilizables
   - Facilita mantenimiento y actualizaciones

3. **Consistencia:**
   - Usa las mismas clases de Tailwind para elementos similares
   - Mantén espaciado consistente

4. **Documentación:**
   - Comenta código complejo
   - Documenta decisiones de diseño

5. **Iteración:**
   - Integra por secciones
   - Prueba después de cada sección
   - Ajusta según sea necesario

## 🎯 Ejemplo Práctico: Integrar Hero Section

### 1. Obtener Diseño de Gemini

```
Prompt: "Diseña el Hero Section para LANA Celo con fondo oscuro, 
tagline '¡Envía, Paga, Crece!' claramente visible, y botón CTA verde."
```

### 2. Extraer Especificaciones

```
- Fondo: #0A1628
- Texto tagline: Blanco, tamaño 4xl, bold
- Sombra de texto: 0 4px 20px rgba(0,0,0,0.8)
- Botón: Verde #35D07F, padding 16px 32px
- Espaciado: 64px entre elementos
```

### 3. Actualizar Componente

```tsx
// HeroSection.tsx
<h1 className="text-4xl font-bold text-white" style={{
  textShadow: '0 4px 20px rgba(0,0,0,0.8)'
}}>
  ¡Envía, Paga, Crece!
</h1>
```

### 4. Probar y Ajustar

- Abrir en navegador
- Verificar que se ve correctamente
- Ajustar si es necesario

## 📚 Recursos Útiles

- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Color Picker:** Para verificar códigos hex
- **Figma/Canva:** Para visualizar diseño antes de integrar

## ✅ Resumen del Proceso

1. **Diseñar en Gemini** → Obtener diseño visual
2. **Extraer especificaciones** → Colores, medidas, tipografía
3. **Actualizar Tailwind config** → Agregar colores personalizados
4. **Crear/actualizar componentes** → Implementar diseño
5. **Actualizar estilos globales** → CSS personalizado si es necesario
6. **Probar y ajustar** → Verificar en navegador
7. **Commit y push** → Desplegar cambios

---

**¿Listo para empezar?** Comienza con el Hero Section y el Logo, luego continúa con las demás secciones.


