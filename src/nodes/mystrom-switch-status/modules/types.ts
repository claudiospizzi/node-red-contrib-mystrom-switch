import { Node, NodeDef } from "node-red";
import { MyStromSwitchConfigNode } from "../../mystrom-switch-config/modules/types";
import { MyStromSwitchStatusOptions } from "../shared/types";

export interface MyStromSwitchStatusNodeDef extends NodeDef, MyStromSwitchStatusOptions {}

export interface MyStromSwitchStatusNode extends Node {
  switch: MyStromSwitchConfigNode;
}
