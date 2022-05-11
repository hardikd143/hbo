import React from 'react'

const TableSingle = ({data}) => {
    const {tbody}= data
  return (
      <table>
          <tbody>
              {tbody.map((item,index)=>{
                  return <tr key={index}>
                      <td>{item.tData}</td>
                  </tr>
              })}
          </tbody>
      </table>
  )
}

export default TableSingle