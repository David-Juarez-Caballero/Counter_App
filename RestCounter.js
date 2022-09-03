import React from 'react'
import PropTypes from 'prop-types'


export const RestCounter = ({onAddPress}) => {
    return (
        <button
            onClick={onAddPress}>
            -1
        </button>
    )
}

RestCounter.propTypes = {
    onAddPress : PropTypes.func.isRequired
}