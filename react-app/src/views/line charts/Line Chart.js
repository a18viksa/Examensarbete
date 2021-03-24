import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvasjs.stock.react";
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

class LineChart extends Component {

	constructor(props) {
		super(props);
		this.state = { dataPoints: [], isLoaded: false };
		//this.state = { dataPoints1: [], isLoaded: false };
		//this.state = { dataPoints2: [], isLoaded: false };
	  }

	componentDidMount() {
		fetch('aapl.json')
		  .then(res => res.json())
		  .then(
			(data) => {
			  var dps = [];
			  for (var i = 0; i < data.length; i++) {
				dps.push({
				  x: new Date(data[i].date),
				  y: Number(data[i].open)
				});
			  }
			  this.setState({
				isLoaded: true,
				dataPoints: dps
			  });
			}
		  )

		  fetch('fb.json')
		  .then(res => res.json())
		  .then(
			(data) => {
			  var dps1 = [];
			  for (var i = 0; i < data.length; i++) {
				dps1.push({
				  x: new Date(data[i].date),
				  y: Number(data[i].open)
				});
			  }
			  this.setState({
				isLoaded: true,
				dataPoints1: dps1
			  });
			}
		  )

		  fetch('amzn.json')
		  .then(res => res.json())
		  .then(
			(data) => {
			  var dps2 = [];
			  for (var i = 0; i < data.length; i++) {
				dps2.push({
				  x: new Date(data[i].date),
				  y: Number(data[i].open)
				});
			  }
			  this.setState({
				isLoaded: true,
				dataPoints2: dps2
			  });
			}
		  )
	  }

  render() {
    const options = {
      animationEnabled: true,
	  zoomEnabled: true,
	  title:{
        text:"CanvasJS Line Chart"
      },
      theme: "light2",
	  legend: {
		cursor: "pointer",
		fontSize: 16,
	},
	toolTip: {
		enabled: true,
		shared: true,
	},
      charts: [{
          data: [{
            type: "line",
			showInLegend: true,
			name: "Apple",
			yValueFormatString: "$####.00",
            dataPoints : this.state.dataPoints
          },
		  {
			type: "line",
			showInLegend: true,
			name: "Facebook",
			yValueFormatString: "$####.00",
            dataPoints : this.state.dataPoints1
		  },
		  {
			type: "line",
			showInLegend: true,
			name: "Amazon",
			yValueFormatString: "$####.00",
            dataPoints : this.state.dataPoints2
		  },
		],
      }],
      navigator: {
        slider: {
          minimum: new Date("2018-02-01"),
          maximum: new Date("2020-10-27")
        }
      }
    };
    const containerProps  = {
      width: "100%",
      height: "600px"
    };

    return (
      <div>
        <CanvasJSStockChart
          options={options}
          containerProps  = {containerProps }
        />
      </div>
    );
  }
  
}

export default LineChart;
