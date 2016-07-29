import { Component } from '@angular/core';
import { APP_SHELL_DIRECTIVES } from '@angular/app-shell';
import { MdToolbar } from '@angular2-material/toolbar';

@Component({
  moduleId: module.id,
  selector: 'hello-mobile-app',
  template: `
    <md-toolbar>
      {{title}}
    </md-toolbar>
  `,
  styles: [`
    md-spinner {
      margin: 24px auto 0;
    }
  `],
  directives: [APP_SHELL_DIRECTIVES, MdToolbar]
})
export class HelloMobileAppComponent {
  title = 'Hello Mobile';
}
