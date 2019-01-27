# Ruuvi Base Station

# Install libraries to Raspberry

```
$ apt install git nodejs npm joe
$ apt install bluetooth bluez libbluetooth-dev 
$ apt install libudev-dev libcap2-bin
$ npm install npm@latest typescript -g
$ npm install
$ setcap cap_net_raw+eip $(eval readlink -f `which node`)
```


# Build and install to service ruuvi_bs

```
npm run build
sudo systemctl enable ruuvibs.service 
sudo systemctl start ruuvibs.service 
```
