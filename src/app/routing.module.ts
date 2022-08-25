import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadonlyComponent } from './readonly/readonly.component';

const routes: Routes = [
  { path: '', redirectTo: 'readonly', pathMatch: 'full' },
  {
    path: 'readonly',
    component: ReadonlyComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
