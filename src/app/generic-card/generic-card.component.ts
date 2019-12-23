import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-generic-card',
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.css']
})
export class GenericCardComponent implements OnInit {
  @Input() header: string;
  @Input() path: string;
  @Input() summery: string;
  @Input() footer: string;
  @Input() title: string;
  @Input() isLike = false;
  @Input() objectId: any;
  @Input() objectImgPath = 'https://www.fcbarcelonanoticias.com/uploads/s1/11/71/55/9/leo-messi-barcelona-top.jpeg';
  @Input() numberOflikes: number;
  cardLikePath: string;
  comment = '';
  @Input() likePath =
    'https://www.pinclipart.com/picdir/big/10-104069_download-cliparts-and-objects-in-full-resolution-please.png';

  @Input() unlikePath =
    'https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-68-512.png';

  likeSubject: Subject<boolean>;
  coommentSubject: Subject<[string, string]>;

  constructor() { }

  ngOnInit() {
    this.likeSubject = new Subject<boolean>();
    this.coommentSubject = new Subject<[string, string]>();
    this.cardLikePath = this.getLikePath();
  }

  like() {
    this.isLike = !this.isLike;
    this.cardLikePath = this.getLikePath();
    this.numberOflikes = this.isLike ? this.numberOflikes + 1 : this.numberOflikes - 1;
    this.likeSubject.next(this.isLike);
  }

  getLikePath() {
    return this.isLike ? this.likePath : this.unlikePath;
  }

  addComment() {
    this.coommentSubject.next([this.objectId as string, this.comment]);
  }
}
