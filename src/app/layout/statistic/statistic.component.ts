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
  id: string;
  ngOnInit() {
    this.id = `${this.type}${this.stat}`;
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

    const width = 280;
    const height = 20;

    this.stat = (this.stat * width) / maxValue;

    const x = d3
      .scaleLinear()
      .domain([0, 10000])
      .range([0, width]);

    const svg = d3
      .select(`#${this.id}`)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g');

    svg
      .append('rect')
      .attr('class', 'grid-background')
      .attr('width', width)
      .attr('height', height);

    svg
      .append('rect')
      .attr('class', `grid-fill-${this.type}`)
      .attr('width', this.stat)
      .attr('height', height);

    svg
      .append('g')
      .attr('class', 'grid')
      .attr('transform', 'translate(0,' + height + ')')
      .call(
        d3
          .axisBottom(x)
          .ticks(6)
          .tickSize(-20)
      );
  }
}
