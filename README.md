# Node boilerplate

This boilerplate is a base that can be used for node project development. With it you can develop locally or within a virtual machine (using Vagrant) or within a Linux container (using Docker). This allows you to have the same development workflow you have locally but using Docker containers.

## What it does

The first time you run `vagrant up`, it will download a base box from [VagrantCloud](https://vagrantcloud.com/) with Node v0.10.26 pre-installed and caches it locally. The `Vagrantfile` will install Docker, and pulls down a Docker image from the Docker registry also with Node v0.10.26 pre-installed. It will also build a Docker container based on the image downloaded that will add this repositories "app" directory to it's file system.

The nice thing about this is once everthing is in place, you have several options on how you can develop and run your application. For instance, you could just run the Docker container within Vagrant and test it from you local machine or you can develop you code locally while running it within Docker. Both options are available from the `Vagrantfile` however the development workflow is enabled by default.

Note: If you are using the Docker development workflow, you will have to manually re-build the container to add the project changes to the containers filesystem.

## Install

To set up your development environment, first install [VirtualBox](https://www.virtualbox.org/wiki/Downloads) and [Vagrant](https://www.vagrantup.com/downloads.html) >= 1.5.4. Once installed, you can start the VM by typing the following into terminal:

Create or start the VM:

    vagrant up

View project:

    open http://localhost:3000/

## Restart

At the moment, you need to manually restart the Docker container after the initial boot of your Vagrant VM (e.g. `vagrant halt` and `vagrant up`). This can be done with the following in terminal:

Boot the VM:

    vagrant up

SSH into the VM:

    vagrant ssh

Run the container for development:

    docker run -d -p 80:80 -v /vagrant/app:/opt/app:rw node-app

Or re-build the container and run it:

    cd /vagrant
    docker build -t node-app .
    docker run -d -p 80:80 node-app
