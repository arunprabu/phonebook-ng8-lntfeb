import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartDataService } from '../../services/cart-data.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  latestCartCount: number;

  constructor(private router: Router, private cartDataService: CartDataService, 
    private authService: AuthService) { }

  ngOnInit() {
    this.cartDataService.latestCartItemsList.subscribe( (cartItemList: any[]) => {
      this.latestCartCount = cartItemList.length;
    });
  }

  gotoCartPage() {
    // navigate to diff url in ng
    this.router.navigate(['products', 'cart']);
  }

  logoutHandler() {
    // 
    this.authService.logout();
  }
}
