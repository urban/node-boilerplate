
Vagrant.configure("2") do |config|
  # Base box
  config.vm.box = "urban/trusty64-node"

  # Expose port 80 as 3000 on host
  config.vm.network "forwarded_port", guest: 80, host: 3000

  config.vm.network "private_network", ip: "192.168.33.10"

  # add docker provisioner and load image
  config.vm.provision "docker" do |d|
    d.pull_images "urban/node"
    d.build_image "/vagrant", args: "-t node-app"
    # for development
    d.run "node-app", args: "-d -p 80:80 -v /vagrant/app:/opt/app:rw"
    # to testing, comment out the line above and use the line below instead
    # d.run "node-app", args: "docker run -d -p 80:80"
  end
end
