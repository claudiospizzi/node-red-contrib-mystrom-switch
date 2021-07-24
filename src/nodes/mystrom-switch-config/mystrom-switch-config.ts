import { NodeInitializer } from 'node-red';
import { MyStromSwitchConfigNode, MyStromSwitchConfigNodeDef } from './modules/types';

const nodeInit: NodeInitializer = (RED): void => {
  function MyStromSwitchConfigNodeConstructor(this: MyStromSwitchConfigNode, config: MyStromSwitchConfigNodeDef): void {
    RED.nodes.createNode(this, config);
    this.address = config.address;
  }

  RED.nodes.registerType('mystrom-switch-config', MyStromSwitchConfigNodeConstructor);
};

export = nodeInit;
