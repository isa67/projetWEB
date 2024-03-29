import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  id: number = 0;
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
  }
  ngOnInit() {}
}
