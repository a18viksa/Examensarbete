import React, { Component } from 'react';
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

class PlotlyLineChart extends Component {

    constructor(props) {
        super(props);
        this.state = { data: []}
    }

    componentDidMount() {

        const endpoint = 'data.json';

        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                this.setState({data:data})
            })
    }

    addTraces(data) {
        let traces = [];
        let date = [];
        let company = {'Bg': {'y': []}};

        data.forEach(e => {
            date.push(e.date)

            company.Bg.y.push(e.Bg);
        })

        for (const [key, value] of Object.entries(company)) {
            traces.push({
                type: 'scatter',
                mode: 'lines',
                x: date,
                y: value.y,
                name: key
            })
        }

        return traces;
    }


    render() {
        return(
            <div>
                <Plot
                    data = {this.addTraces(this.state.data)}
                    layout={{ width: 1400,
                                height: 800,
                                margin: {
                                  l: 300,
                                  r: 50,
                                  b: 100,
                                  t: 150,
                                  pad: 4
                                },

                                paper_bgcolor: '#f8f8f8',
                                xaxis: {
                                    autorange: true,
                                    range: ['2000-02-01', '2005-07-23'],
                                    rangeselector: {buttons: [
                                        {
                                          count: 1,
                                          label: '1m',
                                          step: 'month',
                                          stepmode: 'backward'
                                        },
                                        {
                                          count: 3,
                                          label: '3m',
                                          step: 'month',
                                          stepmode: 'backward'
                                        },
                                        {
                                          count: 6,
                                          label: '6m',
                                          step: 'month',
                                          stepmode: 'backward'
                                        },
                                        {
                                          count: 1,
                                          label: 'YTD',
                                          step: 'year',
                                          stepmode: 'todate'
                                        },
                                        {
                                          count: 1,
                                          label: '1y',
                                          step: 'year',
                                          stepmode: 'backward'
                                        },
                                        {
                                          count: 3,
                                          label: '3y',
                                          step: 'year',
                                          stepmode: 'backward'
                                        },

                                        {label: 'All', step: 'all'}
                                      ]},
                                    rangeslider: {range: ['2000-02-01', '2005-07-23']},
                                    type: 'date'
                                  },}}
                />
            </div>
            
        )
    }
}

export default PlotlyLineChart;
