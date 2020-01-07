import React from 'react'
import PropTypes from 'prop-types'
import blackBackArrow from '../../../../icons/black-back-arrow.svg'

const ArrowPanelBack = ({ title }) => {
    return (
        <div className='mo-back'>
            <img src={blackBackArrow} alt='back' />
            {title}
        </div>
    )
}

ArrowPanelBack.propTypes = {
    title: PropTypes.string.isRequired,
}

export default ArrowPanelBack
