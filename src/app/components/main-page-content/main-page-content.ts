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
  selectedManufacturer = '-';
  models: Array<Model> = new Array<Model>();
  selectedModel = '-';
  generations: Array<Generation> = new Array<Generation>();
  selectedGeneration = '-';
  //todo
  selectedBodytype = '-';

  ngOnInit(): void {
    this.manufacturerService.getManufacturers().subscribe(response => {
      this.manufacturers = response;
    })
  }

  initModels(): void {
    if(this.selectedManufacturer != "-"){
      this.modelService.getModels(this.selectedManufacturer).subscribe(response => {
        this.models = response;
        this.generations = [];
        this.selectedModel = '-';
        this.selectedGeneration = '-';
      }, error => {
        this.models = [];
        this.generations = [];
        this.selectedModel = '-';
        this.selectedGeneration = '-';
      })
    } else {
      this.models = [];
      this.generations = [];
      this.selectedModel = '-';
      this.selectedGeneration = '-';
    }
  }

  initGenerations(): void {
    if(this.selectedModel != "-"){
      this.generationService.getGenerations(this.selectedModel).subscribe(response => {
        this.generations = response;
        this.selectedGeneration = '-';
      }, error => {
        this.generations = [];
        this.selectedGeneration = '-';
      })
    } else {
      this.generations = [];
      this.selectedGeneration = '-';
    }
  }
}
