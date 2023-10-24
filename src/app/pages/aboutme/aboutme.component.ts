import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss'],
})
export class AboutmeComponent implements OnInit {
  imageUrl: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadPicture();
  }

  loadPicture(): void {
    const img = this.activatedRoute.snapshot.data['imageData'];

    this.imageUrl = URL.createObjectURL(img);
  }
}
