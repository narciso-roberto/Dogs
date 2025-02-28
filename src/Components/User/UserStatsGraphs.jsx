import React from 'react'
import styles from './UserStatsGraphs.module.css'
import {VictoryPie,VictoryBar,VictoryChart} from 'victory'


const UserStatsGraphs = ({data}) => {
    const [graph,setGraph] = React.useState([])
    const [total,setTotal] = React.useState(0)

    const graphData = data.map((item) => ({x:item.title,y:item.acessos}))
    
    
    React.useEffect(() => {
        if(data.length){
            setTotal(data.map(i => +i.acessos).reduce((acumu,valor) => acumu + valor))
            setGraph(graphData)
        }
            
    },[data])


  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={styles.graphItem}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#333',
            },
          }}
        />
      </div>
      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  )
}

export default UserStatsGraphs
