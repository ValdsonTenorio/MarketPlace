# Usa uma imagem oficial do Node.js como base
FROM node:22

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o package.json e package-lock.json para instalar dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o código para o container
COPY . .

# Expõe a porta usada pelo seu backend
EXPOSE 5000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
