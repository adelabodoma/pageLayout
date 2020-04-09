import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-embed',
  templateUrl: './embed.component.html',
  styleUrls: ['./embed.component.scss']
})
export class EmbedComponent implements OnInit {
  @Input() data: any;
  public src: SafeUrl;
  constructor(private DomSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.src = this.DomSanitizer.bypassSecurityTrustResourceUrl(this.data.value)
  }

}
