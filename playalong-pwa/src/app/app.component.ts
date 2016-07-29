import { Component } from '@angular/core';
import { APP_SHELL_DIRECTIVES } from '@angular/app-shell';
import { HelloMobileAppComponent } from './hello-mobile.component';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
    <hello-mobile-app></hello-mobile-app>
  `,
  styles: [],
  directives: [APP_SHELL_DIRECTIVES, HelloMobileAppComponent]
})
export class AppComponent {
  title = 'app works!';
}
