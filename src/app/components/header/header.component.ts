import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private dialog: MatDialog) {}

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '60%',
      height: '60%',
      panelClass: 'custom-dialog-class',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O diálogo foi fechado');
    });
  }
  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateComponent, {
      width: '60%',
      height: '60%',
      panelClass: 'custom-dialog-class',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O diálogo foi fechado');
    });
  }

  isLoged(): boolean {
    return localStorage.getItem('isLoged') === 'true';
  }

  logout(): void {
    localStorage.clear();
  }
}
