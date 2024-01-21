
# Processo seletivo para QA Test

Olá 👋 e bem vindo!

Este repositório contém o código de um aplicativo móvel que foi utilizado para o teste de desenvolvedor móvel. Neste caso, vamos utlizar como código base a submissão de [@ermessonlima](https://github.com/ermessonlima). O teste foi baseado neste [repo](https://github.com/mhadaniya/mobile-weather-app), mas o código é baseado neste [repo](https://github.com/ermessonlima/mobile-weather-app).

## Apresentação do aplicativo

De maneira resumida, é um aplicativo com previsão de tempo de cidades. Ele consome uma API externa, e tem algumas regrinhas para renderização na tela.

Abaixo, alguns vídeos demonstrando o funcionamento da aplicação:

<table>
  <tr>
    <td>
      <p>Daytime - IOS</p>
      <video src="https://user-images.githubusercontent.com/59540379/235064730-8ea328ce-1d38-4ee5-abcc-999211c5e8df.mp4" width="400" height="300" controls></video>
    </td>
    <td>
      <p>Nighttime - IOS</p>
      <video src="https://user-images.githubusercontent.com/59540379/235065579-d936e540-086b-4154-96d8-16b8fc62e7d4.mp4" width="400" height="300" controls></video>
    </td>
        <td>
      <p>Daytime - ANDROID</p>
            <video src="https://user-images.githubusercontent.com/59540379/235074744-271351fc-20b0-4998-bae5-2927c8664785.webm" width="400" height="300" controls></video>
    </td>
       <td>
      <p>Nighttime - ANDROID</p>
       <video src="https://user-images.githubusercontent.com/59540379/235074172-60807b7c-8e8e-44aa-8d99-721dce1159f0.webm" width="400" height="300" controls></video>
    </td>
  </tr>
</table>

### Funcionalidades

- Previsão do tempo: exibir temperatura atual, condições climáticas, chance de chuva, umidade do ar, velocidade do vento e outras informações.
- Seleção de cidade: permitir que os usuários pesquisem e escolham a cidade de sua preferência para visualizar a previsão do tempo.
- Animações meteorológicas: utilizar animações para representar visualmente as condições climáticas em tempo real, incluindo mudanças com base no horário do dia (como transições de dia para noite).
- Previsão estendida do tempo: fornecer previsões de longo prazo para os próximos dias, com informações sobre temperaturas máximas e mínimas e chance de chuva.

### Tech stack

Algumas libs utilizadas neste projeto: React Native, Expo, Axios, Moment, Styled Components, Zustand, Lottie React Native, React Native SVG, React Native Gesture Handler, React Native Async Storage, React Native Location, Husky, Commitlint, ESLint, Jest.

A API no backend utilizado foi: Api hgbrasil

### Requirementos

- Node.js
- Yarn (ou NPM)
- Expo CLI

### Como executar o projeto

Para executar este projeto, você precisa seguir estas etapas:

1. Instale o Node.js em seu computador a partir do site oficial: https://nodejs.org/

2. Instale o gerenciador de pacotes Yarn (você também pode usar o NPM, que vem com o Node.js, se preferir) executando o seguinte comando:

```bash
npm install --global yarn
```

3. Instale o Expo CLI globalmente usando o Yarn (ou NPM):

```bash
yarn global add expo-cli
```

4. Clone este repositório para o seu computador:

```bash
git clone https://github.com/ermessonlima/mobile-weather-app.git
```

5. Navegue até a pasta do projeto clonado e instale as dependências:

```bash
cd mobile-qa-test
yarn install
```

6. Inicie o servidor de desenvolvimento do Expo:

```bash
npx expo start
```

7. O Expo exibirá um código QR. Para visualizar o aplicativo em seu dispositivo móvel, instale o aplicativo Expo Go, disponível na App Store (iOS) ou no Google Play Store (Android). Depois de instalá-lo, abra o aplicativo e escaneie o código QR usando a câmera do seu telefone ou a função de escaneamento dentro do aplicativo Expo Go. Isso iniciará o aplicativo em seu dispositivo móvel, permitindo que você visualize e teste suas funcionalidades.


Não esqueça de configurar a variável de ambiente para executar o projeto. Você precisa criar um arquivo `.env`, e este arquivo deve conter:

`REACT_APP_BASE_URL:https://api.hgbrasil.com/weather?key={my_key}`


## Instruções para o teste

Primeiro, tente executar o aplicativo e se familiarize com o código e o ambiente. Após isto, execute os testes. Você verá que neste repositório, já temos alguns testes de componentes, utlizando [`Jest`](https://jestjs.io/pt-BR/).

Para o teste, queremos que você aplique seus conhecimentos e melhore os testes existentes utilizando [`storybook`](https://storybook.js.org/tutorials/intro-to-storybook/react-native/en/get-started/). E adicione outros testes.

- [ ] Instalar storybook no projeto
- [ ] Fazer teste de 5 componentes
- [ ] Atualizar o README com instruções de instalação e execução dos testes
- [ ] Fazer teste de tela (bônus)

Ficamos no aguardo do seu envio!

Se divirta no processo e boa sorte! 🍀

## Instruções para executar os testes

1. Navegue até a pasta do projeto clonado e instale as dependências:

```bash
cd mobile-qa-test
yarn install
```

2. Execute os testes unitários

```bash
yarn test
```

3. Configure a variável de ambiente do Storybook

Configure a variável de ambiente para ativar o storybook no projeto. Você precisa adicionar ao arquivo `.env`:

`process.env.STORYBOOK_ENABLED="true"`

4. Visualize os componentes no Storybook
```bash
yarn start
```
