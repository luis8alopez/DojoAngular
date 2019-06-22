import { Component, OnInit, Input, ɵSWITCH_COMPILE_DIRECTIVE__POST_R3__ } from '@angular/core';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
  @Input() receptor:string;             //Para importar 
  vector = [1,2,3,4];
  constructor() { }

  ngOnInit() {
  }

}
