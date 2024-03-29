import { Component } from '@angular/core';
import { WarningAlertCompnent } from '../WarningAlert/WarningAlert.component';

@Component({
  selector: 'app-success-alert',
  standalone: true,
  imports: [WarningAlertCompnent],
  templateUrl: './success-alert.component.html',
  styleUrl: './success-alert.component.css'
})
export class SuccessAlertComponent {

}
