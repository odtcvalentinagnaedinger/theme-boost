import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({ value='', className='', label='', onClick = () => {} }) => {
    return (
        <>
            <input type="checkbox" className={className} value={value} onClick={onClick} /> 
            <label>{label}</label>
        </>
    )
}

Checkbox.propTypes = {
    label: PropTypes.string,
    variant: PropTypes.string,
    onClick: PropTypes.func
}

export default Checkbox
