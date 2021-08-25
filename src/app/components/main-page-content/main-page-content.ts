import { Component, OnInit } from '@angular/core';
import {ManufacturersService} from "../../service/manufacturersService";
import {Manufacturer} from "../../model/manufacturer";
import {ModelsService} from "../../service/modelsService";
import {Model} from "../../model/model";
import {GenerationsService} from "../../service/generationsService";
import {Generation} from "../../model/generation";

@Component({
  selector: 'main-page-content',
  templateUrl: './main-page-content.html',
  styleUrls: ['./main-page-content.css']
})
export class MainPageContent implements OnInit {

  constructor(private manufacturerService: ManufacturersService,
              private modelService: ModelsService,
              private generationService: GenerationsService) { }

  manufacturers: Array<Manufacturer> = new Array<Manufacturer>();
  models: Array<Model> = new Array<Model>();
  generations: Array<Generation> = new Array<Generation>();
  selectedManufacturerId = '';
  selectedModelId = '';

  ngOnInit(): void {
    this.manufacturerService.getManufacturers().subscribe(response => {
      this.manufacturers = response;
    })
  }

  initModels(): void {
    if(this.selectedManufacturerId != "-"){
      this.modelService.getModels(this.selectedManufacturerId).subscribe(response => {
        this.models = response;
      }, error => {
        this.models = [];
        this.generations = [];
      })
    } else {
      this.models = [];
      this.generations = [];
    }
  }

  initGenerations(): void {
    if(this.selectedModelId != "-"){
      this.generationService.getGenerations(this.selectedModelId).subscribe(response => {
        this.generations = response;
      }, error => {
        this.generations = [];
      })
    } else {
      this.generations = [];
    }
  }
}
