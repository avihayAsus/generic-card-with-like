import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-generic-card",
  templateUrl: "./generic-card.component.html",
  styleUrls: ["./generic-card.component.css"]
})
export class GenericCardComponent implements OnInit {
  @Input() header: string;
  @Input() path: string;
  @Input() summery: string;
  @Input() footer: string;
  @Input() title: string;
  @Input() isLike: boolean = false;
  @Input() objectId: any;
  @Input() objectImgPath: string = 'https://www.fcbarcelonanoticias.com/uploads/s1/11/71/55/9/leo-messi-barcelona-top.jpeg';
  cardLikePath: string;
  comment: string = "";
  @Input() likePath: string =
    "https://www.pinclipart.com/picdir/big/10-104069_download-cliparts-and-objects-in-full-resolution-please.png";

  @Input() unlikePath: string =
    "https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-68-512.png";

  // likeSubject:  Subject;

  constructor() {}

  ngOnInit() {
    this.cardLikePath = this.getLikePath();
  }

  like() {
    this.isLike = !this.isLike;
    this.cardLikePath = this.getLikePath();
    // Todo nex to like subject
  }

  getLikePath() {
    return this.isLike ? this.likePath : this.unlikePath;
  }

  addComment() {
    // toDo next to subject
  }
}
