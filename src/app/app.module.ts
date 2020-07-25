import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmbedTableDirective } from './directives/embed-table.directive';
import { OrderListComponent } from './order-list/order-list.component';
import { SubTableComponent } from './sub-table/sub-table.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    SubTableComponent,
    EmbedTableDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SubTableComponent],
})
export class AppModule {}
