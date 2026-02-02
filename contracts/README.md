# LANA Celo Smart Contracts

Smart contracts para LANA Celo en Celo blockchain.

**Nota:** Los contratos están desplegados en Mainnet con los nombres `EnerpayRemittance` y `MicrofinancePool`. Estos nombres se mantienen para compatibilidad, pero la documentación y comentarios han sido actualizados para reflejar el rebranding a LANA Celo.

## 📋 Contratos

### EnerpayRemittance.sol

Contrato principal para manejo de remesas usando cUSD (LANA Celo Remittances).

**Características:**
- Envío de remesas con fees de plataforma (1.5% por defecto)
- Soporte para wallet-to-wallet (transferencia inmediata)
- Soporte para otros tipos de destino (requiere aprobación del owner)
- Historial de remesas por usuario
- Sistema de estados (Pending, Completed, Failed, Refunded)

## 🚀 Setup

### Instalar dependencias

```bash
npm install --save-dev @openzeppelin/contracts
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
```

### Configuración Hardhat

Crea `hardhat.config.js`:

```javascript
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    celoSepolia: {
      url: "https://forno.celo-sepolia.celo-testnet.org",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 11142220,
    },
    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 44787,
    },
    celo: {
      url: "https://forno.celo.org",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 42220,
    },
  },
};
```

## 📝 Deploy

### Variables de entorno

Crea un archivo `.env` en el directorio `contracts/`:

```bash
# Private key for deployment (NEVER commit this!)
PRIVATE_KEY=tu_private_key

# Treasury address (where platform fees will be sent)
# If not set, deployer address will be used
TREASURY_ADDRESS=tu_treasury_address

# cUSD address (optional, will use default for network if not set)
# CUSD_ADDRESS=0x765DE816845861e75A25fCA122bb6898B8B1282a
```

### Ejecutar deploy

El script de deploy está en `scripts/deploy.js` e incluye:

- ✅ Validación de direcciones
- ✅ Verificación de balance
- ✅ Verificación post-deploy
- ✅ Guardado automático de información de deploy
- ✅ Instrucciones de verificación en CeloScan

```bash
# Testnet (Celo Sepolia) - RECOMENDADO
npm run deploy:celoSepolia
# o
npx hardhat run scripts/deploy.js --network celoSepolia

# Testnet (Alfajores) - Legacy
npm run deploy:alfajores
# o
npx hardhat run scripts/deploy.js --network alfajores

# Mainnet (Celo)
npm run deploy:celo
# o
npx hardhat run scripts/deploy.js --network celo
```

### Información de Deploy

Después del deploy, la información se guarda automáticamente en:
- `deployments/{network}.json`

Este archivo contiene:
- Dirección del contrato
- Direcciones de cUSD y Treasury
- Hash de transacción
- Block number
- Timestamp
- Y más información útil

## 🔧 Uso del Contrato

### Enviar Remesa

```javascript
// Wallet-to-wallet (transferencia inmediata)
await remittance.sendRemittance(
  beneficiaryAddress,
  ethers.parseUnits("100", 18), // 100 cUSD
  "wallet",
  beneficiaryAddress
);

// Otro tipo de destino (requiere aprobación)
await remittance.sendRemittance(
  beneficiaryAddress,
  ethers.parseUnits("100", 18),
  "bank",
  "account_number_123"
);
```

### Completar Remesa (Owner)

```javascript
// Marcar como completada
await remittance.completeRemittance(
  remittanceId,
  1 // RemittanceStatus.Completed
);

// Marcar como fallida
await remittance.completeRemittance(
  remittanceId,
  2 // RemittanceStatus.Failed
);

// Reembolsar
await remittance.completeRemittance(
  remittanceId,
  3 // RemittanceStatus.Refunded
);
```

### Consultar Historial

```javascript
// Obtener IDs de remesas del usuario
const remittanceIds = await remittance.getRemittanceHistory(userAddress);

// Obtener detalles de una remesa
const remittance = await remittance.getRemittance(remittanceId);
```

## 📊 Estados de Remesa

- `0` - Pending: Remesa creada pero no completada
- `1` - Completed: Remesa completada exitosamente
- `2` - Failed: Remesa fallida
- `3` - Refunded: Remesa reembolsada al remitente

## 🔐 Seguridad

- ✅ ReentrancyGuard para prevenir ataques de reentrancy
- ✅ Ownable para funciones administrativas
- ✅ Validación de inputs
- ✅ Safe math (Solidity 0.8.20 tiene overflow protection)

## 📚 Direcciones de Celo

### Mainnet
- Chain ID: `42220`
- RPC URL: `https://forno.celo.org`
- cUSD: `0x765DE816845861e75A25fCA122bb6898B8B1282a`
- cREAL: `0xe8537a3d056DA446677B9E2d2516b1ee149eE628`
- cEUR: `0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73`
- Explorer: `https://celoscan.io`

### Celo Sepolia (Testnet) - RECOMENDADO
- Chain ID: `11142220`
- RPC URL: `https://forno.celo-sepolia.celo-testnet.org`
- cUSD: `0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1`
- Explorer: `https://explorer.celo.org/sepolia`
- Faucet: `https://docs.celo.org/tooling/testnets/celo-sepolia/index`

### Alfajores (Testnet) - Legacy
- Chain ID: `44787`
- RPC URL: `https://alfajores-forno.celo-testnet.org`
- cUSD: `0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1`
- Explorer: `https://alfajores.celoscan.io`

## 🧪 Testing

```bash
npx hardhat test
```

## 📄 Licencia

MIT

