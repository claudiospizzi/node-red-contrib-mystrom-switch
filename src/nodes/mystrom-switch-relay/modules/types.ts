import { Node, NodeDef } from "node-red";
import { MyStromSwitchConfigNode } from "../../mystrom-switch-config/modules/types";
import { MyStromSwitchRelayOptions } from "../shared/types";

export interface MyStromSwitchRelayNodeDef extends NodeDef, MyStromSwitchRelayOptions {}

export interface MyStromSwitchRelayNode extends Node {
  switch: MyStromSwitchConfigNode;
  relay: string;
}
