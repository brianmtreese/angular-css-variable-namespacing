import {bootstrapApplication, provideCssVarNamespacing} from '@angular/platform-browser';
import {Storefront} from './app/storefront/storefront';
import {SupportWidget} from './app/support-widget/support-widget';

// bootstrapApplication(Storefront);
bootstrapApplication(Storefront, {
  providers: [
    provideCssVarNamespacing('store')
  ]
});

// bootstrapApplication(SupportWidget);
bootstrapApplication(SupportWidget, {
  providers: [
    provideCssVarNamespacing('support')
  ]
});
