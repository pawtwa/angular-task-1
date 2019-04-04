import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from './../../../../src/app/shared/services/user.service';
import { UserInterface } from './../../../../src/app/shared/models/user.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  user$: Observable<UserInterface>;
  /**
   * -1 - inital state
   * 1 - loading
   * 0 - loaded
   */
  loadingImage = -1;
  /**
   * -1 - inital state
   * 1 - has access
   * 0 - has not acces
   */
  hasAccess = -1;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user$ = this.userService.getUser();
  }

  checkAccess() {
    this.loadingImage !== 0 ? this.loadingImage = 1 : null;
    this.hasAccess = this.userService.user.age >= 18 ? 1 : 0;
  }

  onImageLoad() {
    this.loadingImage = 0;
  }
}
