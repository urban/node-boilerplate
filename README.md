# Node boilerplate

## Local Development

For local development, first install [Node.js](http://nodejs.org/). Once Node.js is installed, type the following into terminal.

    cd app # change your working dir to the project root

Install dependencies:

    npm install # install dependencies

To run type the following into terminal.

    npm start

---

## Development in a VirtualMachine on OSX:

To set up your development environment, first install [VirtualBox](https://www.virtualbox.org/wiki/Downloads) and [Vagrant](https://www.vagrantup.com/downloads.html). Once installed, you can start the VM and provision it by typing the following into terminal:

Create or start the VM:

    vagrant up

Remote into VM:

    vagrant ssh

start the server:

    cd /vagrant
    npm start

    docker build -t node/app ./share
    docker run -d -p 3000:3000 -v /vagrant/app:/opt/app node/app

