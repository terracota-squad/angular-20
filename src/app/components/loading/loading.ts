import { Component } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import { AsyncPipe } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading',
  imports: [AsyncPipe, MatProgressSpinnerModule],
  templateUrl: './loading.html',
  styleUrl: './loading.scss'
})
export class Loading {
  constructor(public loadingService: LoadingService) { }
}
