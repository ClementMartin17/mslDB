import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'msl-stat',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit,AfterViewInit {
  @Input() stat: number;
  @Input() type: string;
  @Input() width = 280;
  @Input() height = 20;
  @Input() astromonName = "";
  id: string;
  ngOnInit() {
    this.id = `${this.type}${this.stat}${this.astromonName}`;
  }

  ngAfterViewInit() {
    let maxValue: number;
    switch (this.type) {
      case 'hp':
        maxValue = 49696;
        break;
        case 'attack':
        maxValue = 4018;
        break;
        case 'defense':
        maxValue = 3807;
        break;
        case 'recovery':
        maxValue = 3364;
        break;
        case 'crit':
        maxValue = 100;
        break;
        case 'critdmg':
        maxValue = 100;
        break;
        case 'resist':
        maxValue = 85;
        break;
    }



    this.stat = (this.stat * this.width) / maxValue;

    const x = d3
      .scaleLinear()
      .domain([0, 10000])
      .range([0, this.width]);

    const svg = d3
      .select(`#${this.id}`)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g');

    svg
      .append('rect')
      .attr('class', 'grid-background')
      .attr('width', this.width)
      .attr('height', this.height);

    svg
      .append('rect')
      .attr('class', `grid-fill-${this.type}`)
      .attr('width', this.stat)
      .attr('height', this.height);

    svg
      .append('g')
      .attr('class', 'grid')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(
        d3
          .axisBottom(x)
          .ticks(6)
          .tickSize(-20)
      );
  }
}
