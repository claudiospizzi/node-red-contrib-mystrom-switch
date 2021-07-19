import { NodeInitializer } from "node-red";
import { MyStromSwitchStatusNode, MyStromSwitchStatusNodeDef } from "./modules/types";
import { MyStromSwitchConfigNode } from "../mystrom-switch-config/modules/types";
import { MyStromSwitch } from "../../modules/mystrom-switch";

const nodeInit: NodeInitializer = (RED): void => {
  function MyStromSwitchStatusNodeConstructor(this: MyStromSwitchStatusNode, config: MyStromSwitchStatusNodeDef): void {
    RED.nodes.createNode(this, config);
    this.switch = RED.nodes.getNode(config.switch) as MyStromSwitchConfigNode;

    this.on("input", (msg, send, done) => {
      this.status({ fill: "blue", shape: "dot", text: "running" });

      new MyStromSwitch(this.switch.address)
        .getSwitchStatus()
        .then((response) => {
          this.status({ fill: "green", shape: "dot", text: "successful" });

          msg.payload = {
            name: this.switch.name,
            address: this.switch.address,
            power: response.power,
            relay: response.relay,
            temperature: response.temperature,
          };

          send(msg);
          done();
        })
        .catch((error) => {
          this.status({ fill: "red", shape: "dot", text: "failed" });

          done(error);
        });
    });
  }

  RED.nodes.registerType("mystrom-switch-status", MyStromSwitchStatusNodeConstructor);
};

export = nodeInit;
