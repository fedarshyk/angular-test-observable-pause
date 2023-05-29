import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NavigationService } from '../navigation.service';
import { from } from 'rxjs';
import { take } from 'rxjs/operators';
import { tryCatch } from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  @ViewChild('show') showElement: ElementRef;
  @ViewChild('pointer') pointerElement: ElementRef;
  @ViewChild('pause') pauseButton: ElementRef;
  @ViewChild('resume') resumeButton: ElementRef;
  @ViewChild('restart') restartButton: ElementRef;

  constructor(public navigation: NavigationService) {}
  counter = 59;

  ngOnInit() {
    console.log('ngOnInit')
    

    // let showElement = document.getElementById('show');
    // let pointerElement = document.getElementById('pointer');
    // let pauseButton = document.getElementById('pause');
    // let resumeButton = document.getElementById('resume');
    // let restartButton = document.getElementById('restart');

    
    
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit')
    this.update(this.counter);
    try{
      if(this.showElement) {
        this.showElement.nativeElement.innerText = "666";
      }
      else {
        console.log('now ngAfterViewInit');

      }
    } 
    catch(err) {
      console.log('error' + err)

    }
  }

  update(second) {
    let deg = second / 60 * 360 - 90;
    this.pointerElement.nativeElement.style.transform = `rotate(${ deg }deg)`;
    this.showElement.nativeElement.innerText = second;
  }

  subs: Subscription;
  observable: Observable<number>;

  test2() {
    this.subs = this.observable.pipe(take(1)).subscribe({
      next: (elt) => {
        console.log('subs2: ' + elt);
        //this.subs.unsubscribe();
      },
      complete: () => {
        console.log('subs2: ' + 'complete');
      },
      error: (err) => {
        console.log('subs2: ' + 'error: ' + err);
      },
    });
  }

  test() {
    this.observable = from([1, 2, 3]);
    this.subs = this.observable.pipe(take(1)).subscribe({
      next: (elt) => {
        console.log('subs1: ' + elt);
        // if(this.subs) {
        //   this.subs.unsubscribe();
        // }
      },
      complete: () => {
        console.log('subs1: ' + 'complete');
      },
      error: (err) => {
        console.log('subs1: ' + 'error: ' + err);
      },
    });
  }
}
