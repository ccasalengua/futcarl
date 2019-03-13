import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubTabsPage } from './subtabs.page';

const routes: Routes = [
  {
    path: 'subtabs',
    component: SubTabsPage,
    children: [
      {
        path: 'subtab1',
        children: [
          {
            path: '',
            loadChildren: '../subtab1/subtab1.module#SubTab1PageModule'
          }
        ]
      },
      {
        path: 'subtab2',
        children: [
          {
            path: '',
            loadChildren: '../subtab2/subtab2.module#SubTab2PageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/subtabs/subtab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
