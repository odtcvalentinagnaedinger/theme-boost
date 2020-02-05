import React from 'react'
// import PropTypes from 'prop-types'
import DeliveryFeatures from '../../patterns/organisms/blocks/delivery-features.jsx'
import { useWindowWidth } from '@react-hook/window-size'

const DeliveryFeaturesTastic = () => {
    const width = useWindowWidth()

    if (width > 600) { return null }

    return (
        <DeliveryFeatures />
    )
}

DeliveryFeaturesTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

DeliveryFeaturesTastic.defaultProps = {}

export default DeliveryFeaturesTastic