import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LoaderService, LoaderState } from './loader.service';
import { log } from 'util';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  show = false;

  private subscription: Subscription;

  constructor(
      private loaderService: LoaderService
  ) { }

  ngOnInit() {
      this.subscription = this.loaderService.loaderState
          .subscribe((state: LoaderState) => {
              this.show = state.show;
          });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}
