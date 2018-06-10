import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {sprintf} from 'sprintf-js';
import { Chart } from 'chart.js';
import { HttpClient } from "@angular/common/http";
import { Astromon } from '../class/astromon';

@Component({
  selector: 'msl-detail',
  templateUrl: './astromonDetail.component.html',
  styleUrls: ['./astromonDetail.component.css']
})
export class AstromonDetailComponent implements OnInit {
  constructor(private location: Location, private route: ActivatedRoute, private http: HttpClient) {}

  text: string;
  astromon: Astromon;

  // Radar
   radarChartLabels = ['Hp', 'Attack', 'Defense', 'Recovery', 'Crit Rate', 'Crit Dmg', 'Resist'];
   radarChartData:any;
  
   radarChartType = 'radar';

   chartOptions = {
    legend: {
      display: true
    },
     scale: {
      ticks: {
          beginAtZero: true,
          max: 100
      }}

  };


  // events
   chartClicked(e:any):void {
    console.log(e);
  }

   chartHovered(e:any):void {
    console.log(e);
  }

variantText:string;
  ngOnInit() {
    this.route.params.subscribe(params => {
      const name = params['name'];
      const element = params['element'];


      this.http.get('http://localhost:3000/astromons/' + name + '/' + element)
      .subscribe(data => {
        this.astromon = data[0];
        this.variantText = sprintf(this.astromon.variant.text["en"],this.astromon.variant.values[0] ,this.astromon.variant.values[1] );

        this.radarChartData = [
          {data: [this.astromon.hp*100/49696, this.astromon.atk*100/4018, this.astromon.def*100/3807, this.astromon.rec*100/3364, this.astromon.critdmg*100/100, this.astromon.critrate*100/100, this.astromon.resi*100/85], label: this.astromon.astromon_id},
          {data: [24291*100/49696, 3058*100/4018, 2138*100/3807, 2288*100/3364, 50*100/100, 10*100/100, 20*100/85], label: 'boltwing'},      
        ];

      });
    });




  }

  goBack() {
    this.location.back();
  }
}
