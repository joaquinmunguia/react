import React from 'react'
import PropTypes from 'prop-types'
import '../component/css/cards.css'




function Card({title, imageSource, text}) {
    return (
        <div className="card text-center">
      <div className="overflow">
      <img src={imageSource} alt="" className="card-img-top" />
      </div>

            <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary"> {text } </p>
        <a href="#!" className="btn btn-outline-secondary"> compra aqui </a>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    imageSource: PropTypes.string,
    text: PropTypes.string
}

export default Card
