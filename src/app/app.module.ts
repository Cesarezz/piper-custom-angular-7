import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MinutesToSeconds } from './minutes-to-seconds';
import { PipeDateSpain } from './pipe-date-spain';
import { PipeEurLibras } from './pipe-eur-libras';
import { PipeMultiplicaValorParam } from './pipe-multiplica-valor-param';
import { PipekmToMilles } from './pipekm-to-milles';
import { UppercaseFirstCharacter } from './uppercase-first-character';

@NgModule({
  declarations: [
    AppComponent,
    MinutesToSeconds,
    PipeDateSpain,
    PipeEurLibras,
    PipeMultiplicaValorParam,
    PipekmToMilles,
    UppercaseFirstCharacter
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }