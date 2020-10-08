import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ManagersService } from './../../Managers/managers.service';
import {ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-manager-info',
  templateUrl: './manager-info.component.html',
  styleUrls: ['./manager-info.component.css']
})
export class ManagerInfoComponent implements OnInit {
  private routeSub: Subscription;

  @ViewChild('select') selectElRef;

  email: string;
  password: string;
  team_name: string;
  resultado: string;
  managers = null;
  myOptions = null;
  myManager = null;
  idRuta = null;
  selectedIds = ['1','2'];

  constructor(private managersService: ManagersService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.managers = this.managersService.getManagers();
    this.routeSub = this.route.params.subscribe(params => {
      this.idRuta =  parseInt(params['id']);
    });

    this.managers.forEach(item => {
      if(item.id === this.idRuta) {
        this.myManager = item;
      }
    });

    this.myOptions = this.myManager.players;
    this.email = this.myManager.email;
    this.password = this.myManager.password;
    this.team_name = this.myManager.team_name;
  }

  myModelProperty = this.myOptions;

  formularioAdminManager = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    team_name: new FormControl('', [Validators.required]),
  });

  ngAfterViewInit() {
    this.updateSelectList();
  }

  updateSelectList() {
    let options = this.selectElRef.nativeElement.options;
    for(let i=0; i < options.length; i++) {
      console.log(options[i]);
      options[i].selected = this.selectedIds.indexOf(options[i].value) > -1;
    }
  }
  change(options) {
    this.selectedIds = Array.apply(null,options)  // convert to real Array
      .filter(option => option.selected)
      .map(option => option.value)
  }

  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    if (this.formularioAdminManager.valid) {

      // console.log(this.formularioAdminManager.controls)
      // let playersSelected: String[] = this.formularioAdminManager.controls['players'].id;
      // for (let i=0; i < playersSelected.length; i++) {
      //   this.resultado = "Player: " + playersSelected[i];
      // } 
      const allInfo = `Username: ${this.email}. Pwd: ${this.password}. Team Name: ${this.team_name} . ${this.selectedIds}`;
      this.resultado = allInfo; 
    } else {
      this.resultado = "Hay datos inválidos en el formulario";
    }
  }

}
