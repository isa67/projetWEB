import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { ListeArticlesComponent } from './liste-articles/liste-articles.component';
import { ArticleComponent } from './article.component';
import { HasArticleGuard } from './has-article.guard';

import { ArticleState } from '../../../shared/states/article-state';
import { PanierComponent } from './panier/panier.component';

const appChild: Routes = [
  {
    path: 'listeArticles',
    component: ListeArticlesComponent,
    canActivate: [HasArticleGuard],
  },
  {
    path: 'panier',
    component: PanierComponent,
    canActivate: [HasArticleGuard],
  },
  {
    path: 'articles',
    component: ListeArticlesComponent,
    canActivate: [HasArticleGuard],
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(appChild),
    NgxsModule.forFeature([ArticleState]),
  ],
  declarations: [ListeArticlesComponent, ArticleComponent, PanierComponent],
  providers: [HasArticleGuard],
})
export class ArticleModule {}
