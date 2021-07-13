import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  public title = 'ubbitt';
  public logged: boolean;

  constructor(
    private dataService: DataService,
    private changeDetector: ChangeDetectorRef
  ) {
    this.logged = true;
  }

  ngOnInit(): void {
    this.dataService.isLogged().subscribe((d: boolean) => {
      this.logged = d;
      this.changeDetector.detectChanges();
    });
  }

}
