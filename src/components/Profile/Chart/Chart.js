import React, {Component} from 'react'
import Chart from 'react-apexcharts'
import styles from './Chart.scss'
class PropsChart extends Component {
    state = {
        options: {
          chart: {
            toolbar: {
                show: true,
                tools: {
                  download: true,
                  selection: false,
                  zoom: true,
                  zoomin: true,
                  zoomout: true,
                  pan: false,
                  reset: true
                },
                autoSelected: 'zoom' 
              },
            zoom: {
                enabled: true,
                type: 'x',  
                zoomedArea: {
                  fill: {
                    color: '#90CAF9',
                    opacity: 0.4
                  },
                  stroke: {
                    color: '#0D47A1',
                    opacity: 0.4,
                    width: 1
                  }
                },
            id: "basic-bar",
            background: 'white',
            foreColor: 'black',
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
            },
            
        }
    },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 1.5,
            dashArray: 0,      
        },
        colors: ['#E74A4A', '#6fe74a'],
        xaxis: {
            type: "datetime",
        },
        yaxis: {
            tickAmount: 6,
            min: 0,
            max: 12
        },
        dataLabels: {
            enabled: false,
        },
        title: {
            text: 'Статистика успішності користувача',
            align: 'center',
            margin: 20,
            offsetY: 20,
            style: {
                fontSize: '1.2em'
            }
        },
        legend: {
            show: true,
            position: 'bottom',
            onItemHover: {
                highlightDataSeries: true
              },
        },
    },
    
    series: []
};
componentWillMount(){
    let testArr = [
        {
            name: "Успішність",
            data: [],
        },
        {
            name: 'План виконання',
            data: []
        },
    ];
    let values = [[
        4,3,10,9,8,11,2,4,5,7,9,5,8,9,10,3,7,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ], [
        2,4,6,7,8,6,9,7,9,11,9,7,5,4,3,2,6,2,5,5,5,6,7,6,6,4,6,8,9,8,7,7
      ]];
    for(let s = 0; s < testArr.length; s++){
      let i = 0;
      let series = [];
      const curentMonth = 'Jan';
      let x = new Date(`1 ${curentMonth} 2019`).getTime();
      for(let i = 0; i < values[s].length; i++) {
        series.push([x, values[s][i]]);
        x += 86400000;
      }
      if(s === 0){
        testArr = [{...testArr[s],  data: series}, {...testArr[s+1]}]
      }else{
        testArr = [{...testArr[s-1]}, {...testArr[s],  data: series}]
      }
    }
    this.setState({
        series: testArr
    })
}
    render(){
        return <Chart
        options={this.state.options}
        series={this.state.series}
        height="332px"
        width='100%'
        type={'area'}
      />
    }
}

export default PropsChart