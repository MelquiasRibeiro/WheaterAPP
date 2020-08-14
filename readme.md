<image src="https://user-images.githubusercontent.com/54459438/90198883-7330a200-dda9-11ea-9340-1d6676904831.png" style="align-self:center;"/> 
<hr/>
<br/>
<br/>
<br/>

## Sumário:

1. [Como Rodar este projeto](#howToRun)  
2. [Sobre este  Projeto](#aboutIt)  
3. [Documentação](#docs)  
4. [Telas](#screes)  
5. [Protótipo](#prototype)  



<div id="howToRun">

## Como Rodar este projeto:
</div>

### requisitos:
- Node;
- npm;
- expo;
- git;

### execute os comando a seguir:

    $ git clone https://github.com/MelquiasRibeiro/WheaterAPP.git
    $ cd WheaterAPP
    $ npm install
    $ expo start
<br/>
<br/>
<br/>
<div id="aboutIt">

## Sobre este  Projeto:
</div>
WheaterApp é uma aplicação que fornece dados climáticos baseados na sua localização atual.
Os dados climáticos são obtidos através da API do openWeather <a href="https://openweathermap.org/current">Current weather data</a>.
<br/>
<br/>
<br/>
<div id="docs">

## Documentação:
</div>


### Arquitetura:
 Este projeto foi produzido utilizado o <a href ="https://docs.expo.io/">Expo</a> que é um conjunto de ferramentas e serviços criados em torno de plataformas React Native e nativas que ajudam a desenvolver, construir, implantar e iterar rapidamente em aplicativos iOS, Android e web a partir da mesma base de código JavaScript / TypeScript.
Como esta aplicação possui apenas uma página ela, não foram aplicas tecnicas de componentização e navegação entre telas mas sua estrutura é perfeitamenta adaptável para isso.
falando um pouco sobre o padrão de código, foi utilizado um o <a href="https://github.com/airbnb/javascript/tree/master/r" >airbnb style guide</a> por ser um modelo já consolidado pela comuidade e pela clareza que este agrega ao código. isso, aliado ao <a href="">Eslint</a> e <a href="">Prettier</a>, garantem uma organização e automatização de padrões muito consistente.

### Bibliotecas utilizadas:
- **<a href='https://docs.expo.io/guides/using-custom-fonts/' >expo-font</a>:** Tanto o iOS quanto o Android e a maioria dos sistemas operacionais de desktop vêm com seu próprio conjunto de fontes de plataforma. Esta biblioteca permite que com facilidade o usúario possa integrar as fontes desejadas por ele na aplicação, e tem direta integração com a plataforma da <a href="https://fonts.google.com/">Google de fontes</a>.
  
- **<a href='https://docs.expo.io/versions/latest/sdk/linear-gradient/'>expo-linear-gradient </a>:** esta biblioteca permite inserir com facilidade o efeito de gradiente de cores dentro de componentes.
-  **<a href='https://styled-components.com/' >styled-components</a>:** Esta foi a biblioteca inserida para lidar com os estilos nesta aplicação, está opção foi utilizada pois facilita a componentização e resolve os bugs de classe causados pela utilização do css convencional além de facilitar a manutação;
- **<a href='https://date-fns.org/'>date-fns</a>:** Esta biblioteca doi utilixada para fazer a gestão e as operações com datas;
- **<a href='https://github.com/axios/axios'>axios</a>:** Este pacote lida com todas as requisiçoes http realizadas pela aplicação;  
- **<a href='https://docs.expo.io/versions/latest/sdk/location/'>expo-location</a>:** permite a leitura de informações de geolocalização do dispositivo. a  aplicação pode pesquisar a localização atual ou se inscrever para eventos de atualização de localização.
- **<a href='https://eslint.org/docs/user-guide/getting-started'>eslint</a>:** ESLint é uma ferramenta para identificar e relatar padrões encontrados no código ECMAScript / JavaScript, com o objetivo de tornar o código mais consistente e evitar bugs. Em muitos aspectos.
- **<a href='https://prettier.io/docs/en/index.html' >prettier</a>:** Formatador automatico de código que grante uma padronização e organização invreviel ao código.

### funções:
-  **getDay**: Esta função executa verifica o dia utilizando o método <a href="">getDay()</a> na data atual, isso retorna uma valor de 0 a 6 que é pesquisado em um switch, este  fica responsável por preencher o valor do estado 'day' que por sua vez é responsável por armazenar o dia dá semana por extenso. 
-  **getData**: Está é a funcão responsável por realizar a requisção a <a href="https://openweathermap.org/current">API</a>,enviando como  query params a  latitude atual,longitude atual, a chave de autenticação da api(ApiKey) o idioma de retorno dos dados (pt_br) e a unidade padrão de medida temperatura(celsius).
-  **goToNigth**: Função responsavel por controlar o tema e a saudação baseado no horário do dia, basicamente compara o horário atual com 13:00 e 18:00 horas para determinar a fase do dia(manha, tarde e noite);
-  **loadPosition**: Funcação que pede a autorização do usúario e obtem a latitude e longitude atual do dispositivo;
<br/>
<br/>
<br/>
<div id="screes">

## telas

</div>
<image src="https://user-images.githubusercontent.com/54459438/90277007-32816900-de3b-11ea-8c70-e23cdf0c8639.png" style="align-self:center;"/> 


## Protótipo:
<div style="display:flex; flex-direction:column; align-items:center">
<a href="https://www.figma.com/file/L6POowdrInhvCfABqqIk1k/whaterAPP?node-id=0%3A1"><button style="align-self:center; border-radius:8px; heigth:50px; background-color:#F53F0D;font-weight: bold; color: #fafafa;  text-decoration: none; border:none; margin-bottom:20px">ver Protótipo</button></a>
<image src="https://user-images.githubusercontent.com/54459438/90279041-d15b9480-de3e-11ea-9db1-c83e78321699.png" style="align-self:center;"/> 
</div>