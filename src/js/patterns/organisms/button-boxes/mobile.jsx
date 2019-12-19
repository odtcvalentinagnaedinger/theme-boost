import React from 'react'
import PropTypes from 'prop-types'
import Slider from '../../templates/slider'

const ButtonBoxesMobile = ({ children }) => {
    return (
        <div className='o-tiny-slider-wrapper'>
            <Slider options={{ fixedWidth: 290 }}>
                {children}
            </Slider>
        </div>
    )
}

ButtonBoxesMobile.propTypes = {
    children: PropTypes.object.isRequired,
}

export default ButtonBoxesMobile
