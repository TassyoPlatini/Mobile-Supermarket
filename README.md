![](imagem/SuperMobi.png)
# SuperMobi

### Função do Aplicativo

- O intuito do SuperMobi é diminuir a demora nas filas dos supermercados, podendo solicitar toda sua mercadoria pelo SuperMobi. A partir de quando você solicitar toda mercadoria, você pode retirar suas compras no supermercado ou pode solicitar uma entrega tendo que pagar a taxa de entrega.
- Com o intuito de avaliar o nosso conhecimento no React-Native, JS e CSS, vamos criar o SuperMobi.


<h2>Como Instalar</h2>

<h4>Cliente</h4>

- Você terá que instalar as dependências que são:       
    + [Node.js](https://nodejs.org)
    + [Expo Go](https://expo.dev/client)
- Opcionalmente você pode instalar o yarn, que é recomendado pelos criadores do Expo: <br>
    `npm install --global yarn`
- Agora você baixará como um zip os arquivos no github e descompactá-los.

<h4>Servidor</h4>

- Para que o back-end da aplicação funcione você precisará baixar o [Docker](https://www.docker.com)

- No docker, você criara um container na porta 3308:3308
`docker run --name NOME QUE DESEJAR -p 3308:3306 -e MYSQL_ROOT_PASSWORD= SENHA QUE ESCOLHER -d mysql`
- Após isso você irá alterar, usando o [Microsoft Visual Studio Code](https://code.visualstudio.com) ou o bloco de notas as seguintes coisas:

- 1
    `const db = mysql.createPool`
    + Edite a seção dentro das chaves do comando acima pelas do seu container do docker(ex. senha e etc).

- 2
    + Nos arquivos
    `pages/page_cadastro
    e
    page_user`
    + Nas partes onde há um ip, troque pelo [seu IP local](https://canaltech.com.br/internet/como-descobrir-o-numero-de-ip-externo-e-local/)
  
 <h2>Abrindo o SuperMobi</h2>
 
 - Usando o terminal e o comando `cd` vá até o lugar onde a pasta foi descompactada, lá digite
  `yarn start`
 - Agora você terá que escanear o QR CODE para abrir no celular

 - Para que o back-end funcione, use abra outra instáncia do terminal e troque o seu diretório para o server, dentro da pasta src, lá digite
    `yarn run dev`
    ou
    `npm run dev`
