import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {sprintf} from 'sprintf-js';
import { Chart } from 'chart.js';

@Component({
  selector: 'msl-detail',
  templateUrl: './astromonDetail.component.html',
  styleUrls: ['./astromonDetail.component.css']
})
export class AstromonDetailComponent implements OnInit {
  constructor(private location: Location, private route: ActivatedRoute) {}

  text: string;



  // Radar
   radarChartLabels = ['Hp', 'Attack', 'Defence', 'Recovery', 'crit', 'crit dmg', 'resist'];

   radarChartData = [
    {data: [25081*100/49696, 2853*100/4018, 2016*100/3807, 1614*100/3364, 50*100/100, 10*100/100, 20*100/85], label: 'mona'},
    {data: [24291*100/49696, 3058*100/4018, 2138*100/3807, 2288*100/3364, 50*100/100, 10*100/100, 20*100/85], label: 'boltwing'},

  ];
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


  ngOnInit() {
    this.route.params.subscribe(params => {
     const name = params['name'];
     const string = 'je suis %s';
      this.text = sprintf(string, name);
    });

  }
  goBack() {
    this.location.back();
  }
}