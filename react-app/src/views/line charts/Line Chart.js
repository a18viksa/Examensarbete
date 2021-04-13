import React, { Component } from 'react';
import Plotly from "plotly.js-basic-dist";

class Lines extends Component {

    constructor(props) {
        super();
        this.state = { data: []}
    }

    componentDidMount() {
        const endpoint = 'ja.json';

        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                this.setState({data:data})
            })
    }

    addTraces(data) {
        let traces = [];

        let dates = [];
        let lines = {'Facebook': {'y': []},
                    'Shopify': {'y': []}};

        data.map(each => {
            dates.push(each.date)

            lines.Facebook.y.push(each.Facebook);
            lines.Shopify.y.push(each.Shopify);
        })

        console.log(lines);

        for (const [key, value] of Object.entries(lines)) {
            traces.push({
                type: 'scatter',
                mode: 'lines',
                x: dates,
                y: value.y,
                name: key
            })
        }

        return traces;
    }


    render() {
        return(
            <div>
                <Plotly
                    data = {this.addTraces(this.state.data)}
                    layout={{ width: 1600,
                                height: 700,
                                margin: {
                                  l: 100,
                                  r: 50,
                                  b: 100,
                                  t: 100,
                                  pad: 4
                                },
                                paper_bgcolor: '#f5f5f5',
                                title: 'Plotly Line Chart',
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

export default Lines;