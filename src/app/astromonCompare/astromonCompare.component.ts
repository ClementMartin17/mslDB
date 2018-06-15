import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { sprintf } from 'sprintf-js';
import { Chart } from 'chart.js';
import { HttpClient } from "@angular/common/http";
import { Astromon } from '../class/astromon';

@Component({
  selector: 'msl-compare',
  templateUrl: './astromonCompare.component.html',
  styleUrls: ['./astromonCompare.component.css']
})
export class AstromonCompareComponent implements OnInit {
  constructor(private location: Location, private route: ActivatedRoute) { }

  text: string;
  astromon1: Astromon;
  astromon2: Astromon;
  // Radar
  radarChartLabels = ['Hp', 'Attack', 'Defense', 'Recovery', 'Crit Rate', 'Crit Dmg', 'Resist'];
  radarChartData: any;

  radarChartType = 'radar';

  chartOptions = {
    legend: {
      display: true
    },
    scale: {
      ticks: {
        beginAtZero: true,
        max: 100
      }
    }

  };


  // events
  chartClicked(e: any): void {
    console.log(e);
  }

  chartHovered(e: any): void {
    console.log(e);
  }

  variantText: string;
  ngOnInit() {
    if (localStorage.getItem('firstAstromon') && localStorage.getItem('secondAstromon')) {
      this.astromon1 = JSON.parse(localStorage.getItem('firstAstromon'));
      this.astromon2 = JSON.parse(localStorage.getItem('secondAstromon'));
      localStorage.removeItem('firstAstromon');
      localStorage.removeItem('secondAstromon');
    } else { this.location.back(); }

    this.variantText = sprintf(this.astromon1.variant.text["en"], this.astromon1.variant.values[0], this.astromon1.variant.values[1]);
    this.radarChartData = [
      { data: [this.astromon1.hp * 100 / 49696, this.astromon1.atk * 100 / 4018, this.astromon1.def * 100 / 3807, this.astromon1.rec * 100 / 3364, this.astromon1.critdmg * 100 / 100, this.astromon1.critrate * 100 / 100, this.astromon1.resi * 100 / 85], label: this.astromon1.astromon_id },
      { data: [this.astromon2.hp * 100 / 49696, this.astromon2.atk * 100 / 4018, this.astromon2.def * 100 / 3807, this.astromon2.rec * 100 / 3364, this.astromon2.critdmg * 100 / 100, this.astromon2.critrate * 100 / 100, this.astromon2.resi * 100 / 85], label: this.astromon2.astromon_id }
    ];

  }

  goBack() {
    this.location.back();
  }
}
