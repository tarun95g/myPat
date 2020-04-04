import { Component, OnInit, Input } from '@angular/core';
import { app, selector } from '../pojo/app';
import { AppService } from '../services/app-list.service';

@Component({
  selector: 'app-app-listing',
  templateUrl: './app-listing.component.html',
  styleUrls: ['./app-listing.component.scss']
})
export class AppListingComponent implements OnInit {


  title = 'cj-app';
  appsList: app[] = [];
  loading: boolean = false;

  constructor(private apiService: AppService) {
  }

  ngOnInit() {
    this.fetchHtmlToScrape();
  }

  fetchHtmlToScrape(): void {
    this.loading = true;
    this.apiService.fetchAppsPage().subscribe((response: any) => {
      this.populateAppList(response);
      this.loading = false;
    }, (error:any) => {
      this.loading = false;
      alert('Error fetching resource')
    });
  }

  populateAppList(data: any) {
    const tempList = []
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = data;

    try {
      tempDiv.querySelectorAll(selector.item).forEach((item: HTMLElement) => {
        const appItem = new app(
          item.querySelector(selector.title).innerHTML.trim(),
          item.querySelector(selector.imageSrc).getAttribute('data-src').trim(),
          item.querySelector(selector.subTitle).innerHTML.trim(),
          item.querySelector(selector.appId).getAttribute('href').split('?id=')[1].trim(),
          item.querySelector(selector.rating).firstElementChild.getAttribute('aria-label').trim(),
        )
        tempList.push(appItem);
      })

      const list = tempList.filter((item: app) => this.appsList.findIndex((app: app) => app.appId == item.appId) === -1);
      this.appsList = [...list, ...this.appsList];
      this.saveAppsDB();
    }
    catch (err) {
      console.log(err);
      this.appsList.length = 0;

    }
  }

  saveAppsDB() {
    window.localStorage.setItem('apps', JSON.stringify(this.appsList));
  }

}
