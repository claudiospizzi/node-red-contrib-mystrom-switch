import { EditorNodeProperties } from 'node-red';
import { MyStromSwitchConfigOptions } from '../../shared/types';

export interface MyStromSwitchConfigEditorNodeProperties extends EditorNodeProperties, MyStromSwitchConfigOptions {}
