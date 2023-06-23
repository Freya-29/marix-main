import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';


// declare var d3: any;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

// interface MyArcData {
//   // Define the properties of your arc data
//   // For example:
//   value: number;
// }
export class ChartComponent implements OnInit {
  id: any;
  // public chartData: number[] = [75]; // Example data for the gauge chart
  // chartData: any[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  // ];
  // chartOptions: any = {
  //   responsive: true
  // };



  // public chartOptions: any = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   tooltips: {
  //     enabled: false
  //   },
  //   scale: {
  //     ticks: {
  //       beginAtZero: true,
  //       max: 100
  //     },
  //     angleLines: {
  //       display: false
  //     },
  //     gridLines: {
  //       display: false
  //     },
  //     pointLabels: {
  //       fontSize: 14
  //     }
  //   }
  // };


  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.drawChart();
    // this.createChart();
    // if (this.data) {
    //   this.updateChart();
    // }
    // this.id = history.state.empid
    // console.log(this.id);
    // this.http.get(`http://10.62.0.60:3000/api/feedback/EMPLOYEE:: 1a8a3380-4521-4dda-9241-554fcaf5c262`).toPromise().then((data: any)=> {
    //   console.log(data);
      
    // }).catch((err:any) => {
    //   console.log(err);
      
    // })
  }

  // private drawChart(): void {
  //   const data = 75; // Example data for the gauge chart
  
  //   const svg = d3.select('#gauge-chart')
  //     .append('svg')
  //     .attr('width', 200)
  //     .attr('height', 200);
  
  //   const radius = 80;
  //   const startAngle = -Math.PI / 2;
  //   const endAngle = Math.PI / 2;
  //   const range = endAngle - startAngle;
  
  //   const arc = d3.arc()
  //     .innerRadius(0)
  //     .outerRadius(radius)
  //     .startAngle(startAngle);
  
  //   const backgroundArc = d3.arc()
  //     .innerRadius(0)
  //     .outerRadius(radius)
  //     .startAngle(startAngle)
  //     .endAngle(endAngle);
  
  //   svg.append('path')
  //     .datum({ endAngle: endAngle })
  //     .style('fill', 'lightgray')
  //     .attr('d', backgroundArc as any);
  
  //   svg.append('path')
  //     .datum({ endAngle: (range * data) / 100 + startAngle })
  //     .style('fill', 'lightblue')
  //     .attr('d', arc as any);
  
  //   svg.append('text')
  //     .text(data + '%')
  //     .attr('x', 100)
  //     .attr('y', 100)
  //     .attr('text-anchor', 'middle')
  //     .attr('alignment-baseline', 'middle')
  //     .style('font-size', '24px')
  //     .style('font-weight', 'bold');
  // }
  
  
  
  
  
  
  
  


  // draw() {
  //   var self = this;
  //   var gauge = function (container: string, configuration: { size: number; clipWidth: number; clipHeight: number; ringWidth: number; maxValue: number; transitionMs: number; }) {

  //     var config = {
  //       size: 710,
  //       clipWidth: 200,
  //       clipHeight: 110,
  //       ringInset: 20,
  //       ringWidth: 20,

  //       pointerWidth: 10,
  //       pointerTailLength: 5,
  //       pointerHeadLengthPercent: 0.9,

  //       minValue: 0,
  //       maxValue: 10,

  //       minAngle: -90,
  //       maxAngle: 90,

  //       transitionMs: 750,

  //       majorTicks: 5,
  //       labelFormat: d3.format('d'),
  //       labelInset: 10,

  //       arcColorFn: d3.interpolateHsl(d3.rgb('#e8e2ca'), d3.rgb('#3e6c0a'))
  //     };
  //     var range: number | undefined = undefined;
  //     var r: string | number | undefined = undefined;
  //     var pointerHeadLength: number | undefined = undefined;
  //     var value = 0;

  //     var svg: d3.Selection<d3.BaseType, unknown, HTMLElement, any> | undefined = undefined;
  //     var arc: string | number | boolean | d3.Arc<any, d3.DefaultArcObject> | readonly (string | number)[] | d3.ValueFn<SVGPathElement, unknown, string | number | boolean | readonly (string | number)[] | null> | null | undefined = undefined;
  //     var scale: d3.ScaleLinear<number, number, never> | { (arg0: unknown): any; ticks: (arg0: number) => any; } | undefined = undefined;
  //     var ticks: Iterable<unknown> | d3.ValueFn<SVGGElement, unknown, unknown[] | Iterable<unknown>> | undefined = undefined;
  //     var tickData: Iterable<unknown> | d3.ValueFn<SVGGElement, unknown, Iterable<unknown> | unknown[]> | undefined = undefined;
  //     var pointer: (string & d3.Selection<SVGPathElement, number[][], HTMLElement, any>) | undefined = undefined;

  //     var donut = d3.pie();

  //     function deg2rad(deg: number) {
  //       return deg * Math.PI / 180;
  //     }

  //     function newAngle(d: d3.NumberValue) {
  //       var ratio = scale(d);
  //       var newAngle = config.minAngle + (ratio * range);
  //       return newAngle;
  //     }

  //     function configure(configuration) {
  //       var prop = undefined;
  //       for (prop in configuration) {
  //         config[prop] = configuration[prop];
  //       }

  //       range = config.maxAngle - config.minAngle;
  //       r = config.size / 2;
  //       pointerHeadLength = Math.round(r * config.pointerHeadLengthPercent);

  //       // a linear scale this.gaugemap maps domain values to a percent from 0..1
  //       scale = d3.scaleLinear()
  //         .range([0, 1])
  //         .domain([config.minValue, config.maxValue]);

  //       ticks = scale.ticks(config.majorTicks);
  //       tickData = d3.range(config.majorTicks).map(function () { return 1 / config.majorTicks; });

  //       arc = d3.arc()
  //         .innerRadius(r - config.ringWidth - config.ringInset)
  //         .outerRadius(r - config.ringInset)
  //         .startAngle(function (d, i) {
  //           var ratio = d * i;
  //           return deg2rad(config.minAngle + (ratio * range));
  //         })
  //         .endAngle(function (d, i) {
  //           var ratio = d * (i + 1);
  //           return deg2rad(config.minAngle + (ratio * range));
  //         });
  //     }
  //     self.gaugemap.configure = configure;

  //     function centerTranslation() {
  //       return 'translate(' + r + ',' + r + ')';
  //     }

  //     function isRendered() {
  //       return (svg !== undefined);
  //     }
  //     self.gaugemap.isRendered = isRendered;

  //     function render(newValue) {
  //       svg = d3.select(container)
  //         .append('svg:svg')
  //         .attr('class', 'gauge')
  //         .attr('width', config.clipWidth)
  //         .attr('height', config.clipHeight);

  //       var centerTx = centerTranslation();

  //       var arcs = svg.append('g')
  //         .attr('class', 'arc')
  //         .attr('transform', centerTx);

  //       arcs.selectAll('path')
  //         .data(tickData)
  //         .enter().append('path')
  //         .attr('fill', function (d, i) {
  //           return config.arcColorFn(d * i);
  //         })
  //         .attr('d', arc);

  //       var lg = svg.append('g')
  //         .attr('class', 'label')
  //         .attr('transform', centerTx);
  //       lg.selectAll('text')
  //         .data(ticks)
  //         .enter().append('text')
  //         .attr('transform', function (d) {
  //           var ratio = scale(d);
  //           var newAngle = config.minAngle + (ratio * range);
  //           return 'rotate(' + newAngle + ') translate(0,' + (config.labelInset - r) + ')';
  //         })
  //         .text(config.labelFormat);

  //       var lineData = [[config.pointerWidth / 2, 0],
  //       [0, -pointerHeadLength],
  //       [-(config.pointerWidth / 2), 0],
  //       [0, config.pointerTailLength],
  //       [config.pointerWidth / 2, 0]];
  //       var pointerLine = d3.line().curve(d3.curveLinear)
  //       var pg = svg.append('g').data([lineData])
  //         .attr('class', 'pointer')
  //         .attr('transform', centerTx);

  //       pointer = pg.append('path')
  //         .attr('d', pointerLine/*function(d) { return pointerLine(d) +'Z';}*/)
  //         .attr('transform', 'rotate(' + config.minAngle + ')');

  //       update(newValue === undefined ? 0 : newValue);
  //     }
  //     self.gaugemap.render = render;
  //     function update(newValue, newConfiguration?) {
  //       if (newConfiguration !== undefined) {
  //         configure(newConfiguration);
  //       }
  //       var ratio = scale(newValue);
  //       var newAngle = config.minAngle + (ratio * range);
  //       pointer.transition()
  //         .duration(config.transitionMs)
  //         .ease(d3.easeElastic)
  //         .attr('transform', 'rotate(' + newAngle + ')');
  //     }
  //     self.gaugemap.update = update;

  //     configure(configuration);

  //     return self.gaugemap;
  //   };

  //   var powerGauge = gauge('#power-gauge', {
  //     size: 300,
  //     clipWidth: 300,
  //     clipHeight: 300,
  //     ringWidth: 60,
  //     maxValue: 10,
  //     transitionMs: 4000,
  //   });
  //   powerGauge.render(6);

  // }

  



}
