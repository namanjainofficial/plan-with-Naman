import React from 'react'
import Card from './Card'

const Tours = ({tours, removeTour}) => {
  return (
      <div className="container">
          <div className="heading">
              <h2 className="title">Plan with Naman</h2>
          </div>
          <div className="cards">
              {
                  tours.map((tour) => {
                      return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                  })
              }

          </div>
      </div>
  )
}

export default Tours
