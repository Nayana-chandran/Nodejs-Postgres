# Nodejs-Postgres
This repository is for start the postgres sql with nodejs for beginners

# Install PostgreSQL on Ubuntu 20.04
1. sudo apt update
2. sudo apt install postgresql postgresql-contrib // install the Postgres package along with a -contrib package that adds some additional utilities and functionality.
3. sudo systemctl start postgresql.service

After PostgreSQL installed, you can confirm that the PostgreSQL service is active, running and is enabled under systemd using the following systemctl commands
1. sudo systemctl is-active postgresql
2. sudo systemctl is-enabled postgresql
3. sudo systemctl status postgresql

Also, confirm that the Postgresql server is ready to accept connections from clients as follows:
sudo pg_isready


# Installing pgAdmin4 in Ubuntu 20.04
1. curl https://www.pgadmin.org/static/packages_pgadmin_org.pub | sudo apt-key add
2. sudo sh -c 'echo "deb https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/$(lsb_release -cs) pgadmin4 main" > /etc/apt/sources.list.d/pgadmin4.list && apt update'
3. sudo apt install pgadmin4 // Its automatically will restart the Apache2 

This script will configure Apache2 to serve the pgAdmin4 web application which involves enabling the WSGI module and configuring the pgAdmin application to mount at pgadmin4 on the webserver so you can access it at:

http://SERVER_IP/pgadmin4
eg: http://127.0.0.1/pgadmin4/
Use your login credentilas and login
