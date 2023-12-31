import {
  ExtensionData,
  ExtensionFactory,
  ExtensionPreferenceGroup,
  MoosyncExtensionTemplate
} from '@moosync/moosync-types'

import { MyExtension } from './extension'

export default class MyExtensionData implements ExtensionData {
  extensionDescriptors: ExtensionFactory[] = [new MyExtensionFactory()]
}

class MyExtensionFactory implements ExtensionFactory {
  async registerUserPreferences(): Promise<ExtensionPreferenceGroup[]> {
    return []
  }

  async create(): Promise<MoosyncExtensionTemplate> {
    return new MyExtension()
  }
}
