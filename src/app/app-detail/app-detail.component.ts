import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { app } from '../pojo/app';

@Component({
  selector: 'app-app-detail',
  templateUrl: './app-detail.component.html',
  styleUrls: ['./app-detail.component.scss']
})
export class AppDetailComponent implements OnInit {
  app: app;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.fetchAppDetails(this.route.snapshot.queryParams['pkg'])
  }

  fetchAppDetails(id: string) {
    const apps = JSON.parse(window.localStorage.getItem('apps'));
    this.app = apps.find((item: app) => item.appId === id);
  }
}
