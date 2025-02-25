import { importTypes } from '@rancher/auto-import';
import { IPlugin } from '@shell/core/types';
import extensionRouting from './routing/sr-routing';
import srStore from './store';

// Init the package
export default function(plugin: IPlugin): void {
  // Auto-import model, detail, edit from the folders
  importTypes(plugin);

  // Provide plugin metadata from package.json
  plugin.metadata = require('./package.json');

  // Load a product
  plugin.addProduct(require('./product'));

  // Add Vuex store
  plugin.addDashboardStore(srStore.config.namespace, srStore.specifics, srStore.config);

  // Add Vue Routes
  plugin.addRoutes(extensionRouting);
}
