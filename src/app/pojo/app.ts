
export class app {
  title: string;
  imageSrc: string;
  subTitle: string;
  appId: string;
  rating?: string;
  constructor(title: string, imageSrc: string, subTitle: string, appId: string, rating?: string) {
    this.title = title;
    this.imageSrc = imageSrc;
    this.subTitle = subTitle;
    this.appId = appId;
    this.rating = rating;
  }
}

export enum selector {
  item = '.mpg5gc',
  title = '.nnK0zc',
  imageSrc = '.QNCnCf',
  subTitle = '.b8cIId.ReQCgd .KoLSrc',
  appId = '.poRVub',
  rating = '.pf5lIe'
}