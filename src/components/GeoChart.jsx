import React, { useEffect } from 'react'
import * as ChartGeo from 'chartjs-chart-geo'
import { Chart as ChartJS, CategoryScale, Tooltip, Title, Legend } from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  ChartGeo.ChoroplethController,
  ChartGeo.ProjectionScale,
  ChartGeo.ColorScale,
  ChartGeo.GeoFeature
)

export const GeoChart = () => {
  //   const chartRef = React.createRef();
  //   const myChartRef = this.chartRef.current.getContext("2d");
  // https://github.com/sgratzl/chartjs-chart-geo/issues/67

  useEffect(() => {
    fetch('https://unpkg.com/world-atlas/countries-50m.json')
      .then((r) => r.json())
      .then((data) => {
        const countries = ChartGeo.topojson.feature(data, data.objects.countries).features
        // console.log(countries)

        const labels = countries.map((d) => d.properties.name)

        const newChart = new ChartJS(document.getElementById('canvas2').getContext('2d'), {
          type: 'choropleth',
          data: {
            labels,

            datasets: [
              {
                label: 'Countries',
                data: countries.map((d) => ({
                  feature: d,
                  value: Math.random()
                }))
              }
            ]
          },

          options: {
            showOutline: false,
            showGraticule: false,
            plugins: {
              legend: {
                display: false
              }
            },
            scales: {
              projection: {
                axis: 'x',
                projection: 'naturalEarth1'
              }
            }
          }
        })
      })
  }, [])

  return <canvas id="canvas2"></canvas>
}

export default GeoChart
