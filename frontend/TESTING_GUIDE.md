# 🧪 Testing Guide - LANA Celo Core Functionality

Esta guía proporciona un checklist completo para probar todas las funcionalidades core de LANA Celo después del rebranding.

## 📋 Pre-requisitos

### Configuración Requerida
- [ ] Wallet instalada (MetaMask, Valora, o compatible con WalletConnect)
- [ ] Variables de entorno configuradas (ver `README.md`)
- [ ] `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` configurado
- [ ] Servidor de desarrollo ejecutándose (`npm run dev`)
- [ ] Acceso a Celo Mainnet o Sepolia Testnet
- [ ] Balance de cUSD para testing (obtener en [Mento](https://mento.org) o [Faucet de Alfajores](https://celo.org/developers/faucet))

### Redes Soportadas
- **Celo Mainnet** (Chain ID: 42220) - Producción
- **Celo Sepolia** (Chain ID: 11142220) - Testnet
- **Celo Alfajores** (Chain ID: 44787) - Testnet legacy

## ✅ Checklist de Testing

### 1. Wallet Connection (Conexión de Wallet)

**Ubicación:** Landing page y todas las páginas protegidas

#### Test 1.1: Conexión Inicial
- [ ] Abrir la aplicación en el navegador
- [ ] Verificar que se muestra la landing page (si no está conectado)
- [ ] Click en "Empieza a Cobrar" en el header
- [ ] Verificar que se abre el modal de RainbowKit
- [ ] Seleccionar wallet (MetaMask, Valora, WalletConnect, etc.)
- [ ] Aceptar conexión en la wallet
- [ ] Verificar que la wallet se conecta correctamente
- [ ] Verificar que se muestra la dirección truncada en el header
- [ ] Verificar que se muestra el dashboard (si está conectado)

#### Test 1.2: Cambio de Red
- [ ] Conectar wallet en una red diferente (ej: Ethereum Mainnet)
- [ ] Verificar que se muestra el prompt "Switch to Celo Mainnet"
- [ ] Click en "Switch Network"
- [ ] Aceptar cambio de red en la wallet
- [ ] Verificar que cambia a Celo Mainnet (Chain ID: 42220)
- [ ] Verificar que el dashboard se muestra correctamente

#### Test 1.3: Desconexión
- [ ] Click en el botón de wallet en el header
- [ ] Seleccionar "Disconnect"
- [ ] Verificar que se desconecta correctamente
- [ ] Verificar que se muestra la landing page nuevamente

#### Test 1.4: Reconexión
- [ ] Después de desconectar, reconectar la wallet
- [ ] Verificar que se conecta sin problemas
- [ ] Verificar que el balance se carga correctamente

**Resultado Esperado:**
- ✅ Conexión fluida sin errores
- ✅ Cambio de red automático funciona
- ✅ Balance de cUSD se muestra correctamente
- ✅ Analytics tracking funciona (verificar en consola)

---

### 2. Payment Sending (Envío de Pagos)

**Ubicación:** `/send`

#### Test 2.1: Envío Básico
- [ ] Navegar a `/send` o click en "Send Payment"
- [ ] Verificar que se muestra el formulario de envío
- [ ] Ingresar dirección de destino válida (0x...)
- [ ] Ingresar cantidad (ej: "10")
- [ ] Verificar que se muestra el preview de la transacción
- [ ] Click en "Send Payment"
- [ ] Aceptar transacción en la wallet
- [ ] Verificar que se muestra el estado "Confirming..."
- [ ] Esperar confirmación (puede tomar 5-10 segundos)
- [ ] Verificar que se muestra "Success" con link al explorer
- [ ] Verificar que el balance se actualiza

#### Test 2.2: Validación de Direcciones
- [ ] Intentar enviar a dirección inválida (ej: "0x123")
- [ ] Verificar que se muestra error de validación
- [ ] Intentar enviar a dirección válida pero incorrecta (checksum)
- [ ] Verificar que se normaliza correctamente

#### Test 2.3: Validación de Cantidades
- [ ] Intentar enviar cantidad negativa
- [ ] Verificar que se muestra error
- [ ] Intentar enviar cantidad mayor al balance
- [ ] Verificar que se muestra error de fondos insuficientes
- [ ] Intentar enviar cantidad con muchos decimales
- [ ] Verificar que se formatea correctamente

#### Test 2.4: Envío con Diferentes Tokens
- [ ] Verificar que se puede seleccionar token (si aplica)
- [ ] Enviar cUSD
- [ ] Verificar que la transacción se procesa correctamente

**Resultado Esperado:**
- ✅ Transacciones se confirman correctamente
- ✅ Errores se muestran claramente
- ✅ Links al explorer funcionan
- ✅ Balance se actualiza después de la transacción
- ✅ Analytics tracking funciona

---

### 3. Remittances (Remesas)

**Ubicación:** `/remittance`

#### Test 3.1: Remesa Básica (Wallet-to-Wallet)
- [ ] Navegar a `/remittance`
- [ ] Seleccionar "Wallet (Instant)" como tipo de destino
- [ ] Ingresar dirección de beneficiario
- [ ] Ingresar cantidad (ej: "50")
- [ ] Verificar que se muestra el cálculo de fee (1.5% por defecto)
- [ ] Verificar que se muestra el total a pagar
- [ ] Click en "Send Remittance"
- [ ] Aceptar aprobación de cUSD (si es primera vez)
- [ ] Aceptar transacción de remesa
- [ ] Verificar que se muestra el estado de confirmación
- [ ] Esperar confirmación
- [ ] Verificar que se muestra "Success"
- [ ] Verificar que se muestra el hash de transacción

#### Test 3.2: Remesa a Mobile Money
- [ ] Seleccionar "Mobile Money" como tipo de destino
- [ ] Ingresar número de teléfono (formato E.164: +521234567890)
- [ ] Ingresar cantidad
- [ ] Verificar que se muestra el cálculo de fee
- [ ] Enviar remesa
- [ ] Verificar que se procesa correctamente

#### Test 3.3: Historial de Remesas
- [ ] Navegar a `/remittance/history`
- [ ] Verificar que se muestran las remesas enviadas
- [ ] Verificar que se muestra el estado (Pending, Completed, Failed)
- [ ] Verificar que se muestran los detalles (cantidad, destinatario, fecha)
- [ ] Click en una remesa para ver detalles completos

#### Test 3.4: Validaciones
- [ ] Intentar enviar remesa sin fondos suficientes
- [ ] Verificar que se muestra error apropiado
- [ ] Intentar enviar a dirección inválida
- [ ] Verificar que se muestra error de validación

**Resultado Esperado:**
- ✅ Remesas se procesan correctamente
- ✅ Fees se calculan correctamente (1.5% por defecto)
- ✅ Historial se muestra correctamente
- ✅ Estados se actualizan correctamente
- ✅ Analytics tracking funciona

---

### 4. Microcredits (Microcréditos)

**Ubicación:** `/credit`

#### Test 4.1: Solicitud de Microcrédito
- [ ] Navegar a `/credit`
- [ ] Verificar que se muestra el score de reputación (si aplica)
- [ ] Verificar que se muestran los límites de préstamo (min/max)
- [ ] Ingresar cantidad de préstamo
- [ ] Seleccionar propósito del préstamo
- [ ] Seleccionar período de pago (3, 6, 12 meses)
- [ ] Verificar que se muestra el cálculo de interés (si aplica)
- [ ] Click en "Request Loan"
- [ ] Aceptar transacción en la wallet
- [ ] Verificar que se muestra el estado de confirmación
- [ ] Esperar confirmación
- [ ] Verificar que se muestra "Success"

#### Test 4.2: Validación de Reputación
- [ ] Verificar que se muestra el score de reputación
- [ ] Intentar solicitar préstamo mayor al máximo permitido
- [ ] Verificar que se muestra error
- [ ] Intentar solicitar préstamo menor al mínimo
- [ ] Verificar que se muestra error

#### Test 4.3: Historial de Préstamos
- [ ] Verificar que se muestra el historial de préstamos (si aplica)
- [ ] Verificar que se muestran los detalles (cantidad, estado, fecha)

**Resultado Esperado:**
- ✅ Solicitudes se procesan correctamente
- ✅ Validaciones funcionan correctamente
- ✅ Reputación se calcula correctamente
- ✅ Analytics tracking funciona

---

### 5. Receive Payments (Recepción de Pagos)

**Ubicación:** `/receive`

#### Test 5.1: Generación de QR
- [ ] Navegar a `/receive`
- [ ] Verificar que se muestra el QR code con la dirección
- [ ] Verificar que se muestra la dirección completa
- [ ] Verificar que se puede copiar la dirección
- [ ] Escanear QR con otra wallet
- [ ] Verificar que la dirección se lee correctamente

#### Test 5.2: Copiar Dirección
- [ ] Click en botón "Copy"
- [ ] Verificar que se copia al clipboard
- [ ] Verificar que se muestra feedback visual (checkmark)

**Resultado Esperado:**
- ✅ QR code se genera correctamente
- ✅ Dirección se puede copiar
- ✅ QR code es escaneable

---

### 6. UI/UX Testing

#### Test 6.1: Navegación
- [ ] Verificar que todos los links funcionan
- [ ] Verificar que el logo lleva a la home
- [ ] Verificar que el menú de navegación funciona
- [ ] Verificar que los botones de Quick Actions funcionan

#### Test 6.2: Responsive Design
- [ ] Probar en móvil (< 640px)
- [ ] Probar en tablet (768px - 1024px)
- [ ] Probar en desktop (> 1024px)
- [ ] Verificar que todos los elementos se muestran correctamente
- [ ] Verificar que los formularios son usables en móvil

#### Test 6.3: Loading States
- [ ] Verificar que se muestran spinners durante transacciones
- [ ] Verificar que se muestran mensajes de "Confirming..."
- [ ] Verificar que los botones se deshabilitan durante transacciones

#### Test 6.4: Error Handling
- [ ] Verificar que los errores se muestran claramente
- [ ] Verificar que los mensajes de error son útiles
- [ ] Verificar que se pueden recuperar de errores

---

### 7. Analytics & Tracking

#### Test 7.1: Event Tracking
- [ ] Abrir consola del navegador
- [ ] Conectar wallet
- [ ] Verificar que se trackea evento `wallet_connect`
- [ ] Enviar pago
- [ ] Verificar que se trackea evento `payment_sent`
- [ ] Enviar remesa
- [ ] Verificar que se trackea evento `remittance_sent`

#### Test 7.2: Page Views
- [ ] Navegar entre páginas
- [ ] Verificar que se trackean page views (si GA está configurado)

---

### 8. Edge Cases

#### Test 8.1: Transacciones Fallidas
- [ ] Intentar enviar transacción sin fondos
- [ ] Verificar que se maneja el error correctamente
- [ ] Verificar que se muestra mensaje apropiado

#### Test 8.2: Red Lenta
- [ ] Simular red lenta (Chrome DevTools > Network > Throttling)
- [ ] Verificar que los loading states funcionan
- [ ] Verificar que no hay timeouts prematuros

#### Test 8.3: Reconexión de Wallet
- [ ] Desconectar wallet
- [ ] Reconectar rápidamente
- [ ] Verificar que no hay errores de estado

---

## 🐛 Problemas Conocidos y Soluciones

### Error: "WalletConnect Project ID not set"
**Solución:** Configurar `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` en `.env.local`

### Error: "Cannot connect to Celo"
**Solución:** 
- Verificar que la wallet soporta Celo
- Agregar Celo manualmente en MetaMask si es necesario

### Error: "Transaction failed"
**Solución:**
- Verificar que hay fondos suficientes
- Verificar que estás en la red correcta
- Verificar que la dirección de destino es válida

### Balance no se actualiza
**Solución:**
- Esperar unos segundos (puede haber delay)
- Refrescar la página
- Verificar que la transacción se confirmó en el explorer

---

## 📊 Métricas de Éxito

### Funcionalidad Core
- ✅ 100% de transacciones se confirman correctamente
- ✅ 0 errores críticos en consola
- ✅ Todos los formularios validan correctamente
- ✅ Todos los links funcionan

### Performance
- ✅ Tiempo de carga < 3 segundos
- ✅ Transacciones se confirman en < 30 segundos
- ✅ UI responsive en todos los dispositivos

### UX
- ✅ Mensajes de error claros y útiles
- ✅ Loading states visibles
- ✅ Feedback visual en todas las acciones

---

## 📝 Reporte de Testing

Después de completar el testing, documenta:

1. **Funcionalidades probadas:** Lista de todos los tests completados
2. **Problemas encontrados:** Bugs o issues encontrados
3. **Sugerencias de mejora:** Ideas para mejorar UX/UI
4. **Métricas:** Tiempos de transacción, tasa de éxito, etc.

---

## 🚀 Próximos Pasos

Después del testing:
1. [ ] Resolver bugs encontrados
2. [ ] Implementar mejoras sugeridas
3. [ ] Realizar testing de regresión
4. [ ] Preparar para beta launch

