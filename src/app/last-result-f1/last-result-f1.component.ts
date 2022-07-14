import { Component, OnInit } from '@angular/core';
import { Api, Result, Time } from './last-result-f1.interface';
import { LastResultF1Service } from './last-result-f1.service';

@Component({
  selector: 'app-last-result-f1',
  templateUrl: './last-result-f1.component.html',
  styleUrls: ['./last-result-f1.component.scss'],
})
export class LastResultF1Component implements OnInit {
  public results: Result[] = [];
  public raceName: string = '';
  constructor(private api: LastResultF1Service) { }

  ngOnInit(): void {
    this.api.get().subscribe((data: Api) => {
      const lastRace = data.MRData.RaceTable.Races[0];
      this.results = lastRace.Results.map((result: Result)=> {
        if (!result.Time) {
          const time: Time = {millis: 'N/A', time: 'N/A' }
          result.Time = time;
        }
          return result;
        });

      this.raceName = lastRace.raceName;
      console.log('results:', this.results);
      console.log('racename', this.raceName)
    })
  }

}
