import { Node, NodeDef } from 'node-red';
import { MyStromSwitchConfigOptions } from '../shared/types';

export interface MyStromSwitchConfigNodeDef extends NodeDef, MyStromSwitchConfigOptions {}

export interface MyStromSwitchConfigNode extends Node {
  address: string;
}
