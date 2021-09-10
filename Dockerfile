FROM php:7.4-apache

#optional: set description
LABEL maintainer="Ashley Chen"

#Set the working directory in the image
WORKDIR /var/www/html

#Copy our public folder o the working directory
COPY 