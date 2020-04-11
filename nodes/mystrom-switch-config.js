module.exports = function (RED) {

    // The Node-RED node mystrom-switch-config
    function MyStromSwitchConfig (n) {

        // Node definition, invoked on deployment
        RED.nodes.createNode(this, n)
        this.name = n.name
        this.address = n.address
    }

    RED.nodes.registerType('mystrom switch config', MyStromSwitchConfig)
}
