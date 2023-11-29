import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadAllComponent } from './components/read-all/read-all.component';
import { SchedulingComponent } from './components/scheduling/scheduling.component';

const routes: Routes = [
  { path: '', component: ReadAllComponent }, // Página inicial
  { path: 'scheduling', component: SchedulingComponent }, // Página do agendamento
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
