# UBTV

> [!IMPORTANT]
> Please see [Project Convention](./docs/CONVENTION.md) before making contribution

## Requirements
- PHP 8.2.x or higher. [(Reference)][PHP Download Page]
- Node.js 20.10.0 LTS. [(Reference)][Node.js Download Page]
- NPM 10.2.4 or higher

## Setup
> If you wanted a one-liner to set this project up, see [One-liner Setup](#one-liner-setup) section
1. Clone the repository and `cd` into it
```shell
git clone https://github.com/MirzaHilmi/UBTV
cd UBTV
```

2. Install Composer & Node.js packages
```shell
composer install
npm install
```

3. Create .env file from example & Generate APP Key
```shell
cp .env.example .env
php artisan key:generate
```

### One-liner Setup
UNIX-like system
```shell
git clone https://github.com/MirzaHilmi/UBTV && cd UBTV && \
composer install && npm install && \
cp .env.example .env && php artisan key:generate
```

Windows (PowerShell)
```shell
git clone https://github.com/MirzaHilmi/UBTV; cd UBTV; composer install; npm install; cp .env.example .env; php artisan key:generate
```

[PHP Download Page]: https://www.php.net/downloads.php
[Node.js Download Page]: https://nodejs.org/en/download
