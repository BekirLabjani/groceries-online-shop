import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] // Korrigiert: "styleUrls" (Plural)
})
export class HeaderComponent {}
