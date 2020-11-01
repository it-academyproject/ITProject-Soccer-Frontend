import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatchcreatorService } from '../../../services/matchcreator.service';

@Component({
  selector: 'app-match-creator-view',
  templateUrl: './match-creator-view.component.html',
  styleUrls: ['./match-creator-view.component.css'],
})

export class MatchCreatorViewComponent {
  teamsSelected: number[] = [null, null];
  local: number;
  visitor: number;
  matchDate: Date;
  formatedMatchDate: string;
  error = '';
 /*  Date Format */
  today = new Date();
  todayDateNew;
  dateFormat;
  dateFormatNew;


  constructor(
    private matchCreatorService: MatchcreatorService,
    private datePipe: DatePipe
  ) {}
  matchCreator() {

    const match: any = {
      local_team: this.teamsSelected[0],
      visitor_team: this.teamsSelected[1],
      date: this.formatedMatchDate,
    };
    this.formatedMatchDate = '';
    console.log(match);

    return this.matchCreatorService.postMatch(match).subscribe((data) => {
      console.log(data);
    });
  }
  getDate(date) {
  this.matchDate = new Date(date);
  this.error = '';
  try {
      this.formatedMatchDate = this.datePipe.transform(
        this.matchDate,
        'yyyy-MM-dd hh:mm:ss'
      );
      if ((this.teamsSelected[0] === null) && (this.teamsSelected[1] === null)){
        this.error = 'Introduce a Local team and a Visitor team';
      }  else if (this.teamsSelected[0] === null){
        this.error = 'Introduce a Local team';
      } else if (this.teamsSelected[1] === null){
        this.error = 'Introduce a Visitor team';
      }else {
        this.matchCreator();
        this.error = 'Match created';
        setTimeout(function() {
          this.error = '';
      }.bind(this), 2000);
      }
    } catch (e) {
      this.formatedMatchDate = '';
      this.error = 'Introduce a valid Date';
      console.log('->err:" + e');
    }
  }
  ngOnInit(): void {
    this.todayDate();
  }
  todayDate(){
    this.todayDateNew = this.today.toLocaleDateString();
    this.dateFormat = this.todayDateNew.split('/');
    this.dateFormatNew = this.dateFormat[2] + '-' + this.dateFormat[1] + '-' + this.dateFormat[0];
    console.log(this.dateFormatNew);
  }
}
