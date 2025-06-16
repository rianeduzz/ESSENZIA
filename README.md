
**README - Vitrine de Roupas ESSENZIA**

> :information_source: **Aviso:** Este repositório **não inclui** a pasta `node_modules` devido ao seu tamanho. Ao clonar, você precisará instalar as dependências localmente.

---

## 📋 Sumário

1. [Pré-requisitos](#pré-requisitos)
2. [Clonando o repositório](#clonando-o-repositório)
3. [Instalando dependências](#instalando-dependências)
4. [Dependências principais](#dependências-principais)
5. [Executando o app](#executando-o-app)
6. [Estrutura de pastas](#estrutura-de-pastas)
7. [Licença](#licença)

---

## 🔧 Pré-requisitos

Antes de prosseguir, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão **>= 18.x**)
- [npm](https://docs.npmjs.com/) (vem junto com o Node.js) ou [Yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/) (se o projeto estiver baseado em Expo)
  ```bash
  npm install --global expo-cli
  # ou
  yarn global add expo-cli
  ```

---

## 📥 Clonando o repositório

Abra o terminal e execute os comandos:

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/ESSENZIA.git

# 2. Acesse a pasta do projeto
cd ESSENZIA
```

---

## ⚙️ Instalando dependências

Dentro da pasta do projeto, instale todas as dependências listadas no `package.json`:

Com npm:

```bash
npm install
```

Com Yarn:

```bash
yarn install
```

> :warning: Isso criará a pasta `node_modules` localmente.

---

## 📦 Dependências principais

O projeto utiliza as seguintes bibliotecas e frameworks para funcionar corretamente:

```
├── @babel/core@7.26.10
├── @expo/metro-runtime@5.0.4
├── @expo/vector-icons@14.1.0
├── @react-native-community/cli@18.0.0
├── @react-navigation/bottom-tabs@7.3.13
├── @react-navigation/drawer@7.3.12
├── @react-navigation/native-stack@7.3.10
├── @react-navigation/native@7.1.9
├── @react-navigation/stack@7.3.2
├── @supabase/supabase-js@2.49.8
├── expo-splash-screen@0.30.8
├── expo-status-bar@2.2.3
├── expo@53.0.9
├── firebase@11.8.1
├── lucide-react-native@0.516.0
├── react-dom@19.0.0
├── react-native-gesture-handler@2.24.0
├── react-native-reanimated@3.17.5
├── react-native-safe-area-context@5.4.0
├── react-native-screens@4.10.0
├── react-native-svg@15.12.0
├── react-native-sweet-alert@3.5.0
├── react-native-vector-icons@10.2.0
├── react-native-web@0.20.0
├── react-native@0.79.2
└── react@19.0.0
```

> Caso queira instalar uma dependência individualmente, use:
>
> ```bash
> npm install <nome-da-dependência>
> # ou
> yarn add <nome-da-dependência>
> ```

---

## ▶️ Executando o app

Após a instalação das dependências, inicie o servidor de desenvolvimento:

Com npm:

```bash
npm start
```

Com Yarn:

```bash
yarn start
```

Em seguida, utilize o aplicativo Expo Go (iOS/Android) ou emule um dispositivo para visualizar a vitrine ESSENZIA.

---

## 📁 Estrutura de pastas (exemplo)

```
ESSENZIA/
├── assets/            # Imagens, fontes e ícones
├── src/               # Código-fonte do app
│   ├── components/    # Componentes reutilizáveis
│   ├── screens/       # Telas do aplicativo
│   └── services/      # Configurações de API e integrações
├── App.js             # Ponto de entrada do React Native
├── package.json       # Lista de dependências e scripts
├── README.md          # Este guia
└── .gitignore         # Arquivos e pastas ignorados pelo Git
```
