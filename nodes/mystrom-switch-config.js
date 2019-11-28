module.exports = function (RED) {

    function MyStromSwitchConfig (n) {
        RED.nodes.createNode(this, n)
        this.name = n.name
        this.address = n.address
    }

    RED.nodes.registerType('mystrom switch config', MyStromSwitchConfig)
}
