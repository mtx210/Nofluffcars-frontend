import { Component, OnInit } from '@angular/core';
import {ManufacturerService} from "../../service/manufacturerService";
import {Manufacturer} from "../../model/manufacturer";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: []
})
export class ContentComponent implements OnInit {

  constructor(private manufacturerService: ManufacturerService) { }

  manufacturersList: Array<Manufacturer> = new Array<Manufacturer>();

  ngOnInit(): void {
    this.manufacturerService.getManufacturers().subscribe(response => {
      this.manufacturersList = response;
    })
  }

}
