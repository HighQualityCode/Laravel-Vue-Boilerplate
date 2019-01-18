# Project Setup Guide #
## 1. Install PHP 5.6.3 ##
sudo add-apt-repository ppa:ondrej/php
sudo apt-get install software-properties-common
sudo apt-get update
sudo apt-get install php5.6
sudo apt-get install php5.6-mbstring php5.6-mcrypt php5.6-mysql php5.6-xml
## 2. Install Nginx or Apache on the local machine ##
### 2.1 Nginx Install ###
sudo apt-get update
sudo apt-get install nginx
You can check nginx status by the following command
sudo service nginx status
### 2.2 Apache Install ###
sudo apt-get update
sudo apt-get install apache2
## 3. Install MySQL on the local machine. ##
sudo apt-get update
sudo apt-get install mysql-server
## 4. Clone the repo on the machine ##
Please create a new folder with naming Cydec
Pleae move into this folder and clone the repo
git clone https://github.com/Cydec/cydec.git
## 5. Nginx or Apache Configuration ##
Please open the configuration file.
The location of conf file is depend on your OS.
sudo nano /etc/nginx/sites-enabled/cydec.com

And then please point the root to Cydec directory. (Directory should be absolute path)
## 6. Database Migration ##
Please create a new user for accessing MySQL database.
Username should be 'cydec', and password should be 'cydec_admin'

Please open browser with the following link.
https://localhost/cydec/install.php

And then, insert the appropriate information in the form.
Click submit button after completing.

## Now you have installed application and check the functionalities. ##
