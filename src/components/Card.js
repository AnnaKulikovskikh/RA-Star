import React from "react"
import Star from './Star'

export default function Card(props) {
    const rating = parseInt(props.rating)
    let ratingValidate = false
    if (rating && rating > 0 && rating < 6) {
        ratingValidate = true
    }

    const countArr = Array(props.rating).fill('s')
    const stars = countArr.map((item, index) => {
      return (
        <Star key={index}/>
      )
    })

    return (
      <ul className="card-body-stars u-clearfix">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <span className="stars">{ratingValidate && stars}</span>
      </ul>
    )
}