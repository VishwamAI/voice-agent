import { Component, BaseComponent, Global } from '@jovotech/framework';

/*
|--------------------------------------------------------------------------
| Global Component
|--------------------------------------------------------------------------
|
| The global component handlers can be reached from anywhere in the app
| Learn more here: www.jovo.tech/docs/components#global-components
|
*/
@Global()
@Component()
export class GlobalComponent extends BaseComponent {
  // Removed the LAUNCH method to avoid duplicate global intent error
}
