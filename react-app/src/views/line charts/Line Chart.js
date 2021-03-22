import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
var dataPoints =[];
var dataPoints1 =[];
var dataPoints2 =[];
class LineChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Stock Line Chart"
			},
			axisY: {
				title: "Stock Price",
				includeZero: false,
				labelFontSize: 20,
			},
			axisX: {
				title: "Datapoints",
				interval: 200,
			},

			legend: {
				cursor: "pointer",
				fontSize: 16,
			},
			toolTip: {
				enabled: true,
				shared: true,
				animationEnabled: true,
			},

			data: [{
				type: "line",
				showInLegend: true,
				name: "fb",
				yValueFormatString: "$####.00",
				dataPoints: dataPoints,
			},
			{
				type: "line",
				showInLegend: true,
				name: "shop",
				yValueFormatString: "$####.00",
				dataPoints: dataPoints1,
			},
			{
				type: "line",
				showInLegend: true,
				name: "amzn",
				yValueFormatString: "$####.00",
				dataPoints: dataPoints2,
			}
		]
		}
		
		return (
		<div>
			<h1>React Line Chart</h1>
			<CanvasJSChart options = {options} 
			/>
		</div>
		);
	}
	componentDidMount(){
		var chart = this.chart;
		fetch('fb.json')
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			for (var i = 0; i < data.length; i++) {
				dataPoints.push({
					x: data[i].x,
					y: data[i].y
				});
			}
			chart.render();
		});

		fetch('shop.json')
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			for (var i = 0; i < data.length; i++) {
				dataPoints1.push({
					x: data[i].x,
					y: data[i].y
				});
			}
			chart.render();
		});

		fetch('amzn.json')
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			for (var i = 0; i < data.length; i++) {
				dataPoints2.push({
					x: data[i].x,
					y: data[i].y
				});
			}
			chart.render();
		});

		
	}

}

export default LineChart;