import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { BotaoComponent } from './sharedmodule/botao-component/botao-component';
import { ProdutosmoduleModule } from './produtosmodule/produtosmodule-module';

@NgModule({
  declarations: [
    App,
    BotaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProdutosmoduleModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
