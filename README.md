# raily-app
This guide will walk you through setting up the Laravel project cloned from GitHub on your local machine.

Prerequisites
Before you begin, ensure you have the following installed on your system:

PHP (version 8.2 or higher)
Composer (dependency manager for PHP)
Node.js and npm (for frontend dependencies)
Git (version control system)
Database (MySQL)

1- First, clone the Laravel project repository from GitHub to your local machine:
git clone https://github.com/kabiru-sani/raily-app.git

after successfully cloning, open your terminal and run the following:
cd raily-app

2- install all Install PHP dependencies using Composer:
composer update

Install Node.js dependencies using npm:
npm install

3- Copy the .env.example file to create a new .env file:
cp .env.example .env

4- Open the .env file in your preferred text editor and update the following variables to match your environment:
DB_CONNECTION=sqlite
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=

5- Generate a new application key:
php artisan key:generate (This command will set the APP_KEY value in your .env file.)

6- Run the database migrations to create the necessary tables:
php artisan migrate

7- Compile the assets using Laravel Mix:
npm run dev

8- Finally, start the local development server:
php artisan serve

your application will run on:
http://127.0.0.1:8000/
