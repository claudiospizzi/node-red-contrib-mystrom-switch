[![node-red-contrib](https://img.shields.io/badge/node--red-node--red--contrib--mystrom--switch-red.svg?style=flat-square)](https://flows.nodered.org/node/node-red-contrib-mystrom-switch)
[![npm](https://img.shields.io/npm/v/node-red-contrib-mystrom-switch.svg?style=flat-square)](https://www.npmjs.com/package/node-red-contrib-mystrom-switch)
[![travis](https://img.shields.io/travis/claudiospizzi/node-red-contrib-mystrom-switch.svg?style=flat-square)](https://travis-ci.org/claudiospizzi/node-red-contrib-mystrom-switch)

# node-red-contrib-mystrom-switch

MyStrom Switch nodes to control these devices with Node-RED.

## Description

This contrib module provides two simple nodes to get the current statue of a
MyStrom Switch and to enable or disable the relay.

## Instal & Run

First install Node-RED itself:

```node
sudo npm install -g node-red
```

Then switch to the user home for Node-RED and install this package:

```node
npm install node-red-contrib-mystrom-switch
```

Finally run it:

```node
node-red
```

## Nodes

### mystrom switch status

Node to get the current state of a MyStrom Switch.

![mystrom switch status](.assets/mystrom-switch-status.png)

### mystrom switch relay

Node to turn the relay status of a MyStrom Switch on or off.

![mystrom switch relay](.assets/mystrom-switch-relay.png)
