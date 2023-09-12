import { Observable } from 'rxjs';

export interface mainIconsModel {
  url: string;
  name: string;
}

export interface otherIconsModel {
  url: string;
  name: string;
}

export interface otherIconsResolveModel {
  imgBlob: Observable<Blob>;
  name: string;
}

export interface otherIconsResolveUrlModel {
  imgBlob: string;
  name: string;
}
