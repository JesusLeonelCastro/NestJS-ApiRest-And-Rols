<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Instalar dependencias

```bash
$ npm install
```

## Compilacion Pryecto

```bash
# desarrollo (development)
$ npm run start

# modo vigilancia (watch mode)
$ npm run start:dev

# modo producción (production mode)
$ npm run start:prod
```
## Instalacion Prisma 

 ```bash
# Comando de instalacion 
$ npm install prisma --save-dev 

# Utilidades para contraseñas (bcrypt) y variables de entorno
$ npm install bcrypt @types/bcrypt

# Importar Dotenv
$ npm install dotenv
```

## Comandos útiles de Prisma:

 ```bash

# Crear migración y actualizar base de datos
$ npx prisma migrate dev
$ npx prisma migrate dev --name init 

# Sincronizar esquema con base de datos (sin migraciones) - *Útil si 'migrate dev' falla por permisos "CASO HOSTINGER"
$ npx prisma db push

# Generar el cliente de Prisma (typings)
$ npx prisma generate

# Ver la base de datos en el navegador
$ npx prisma studio
```