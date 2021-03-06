import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { useSpring, animated } from 'react-spring'

import EmptyState, { icons } from 'Organisms/EmptyState'

const EmptyWishlist = ({ returnToHomePage }) => {
    const fading = useSpring({ opacity: 1, from: { opacity: 0 } })

    return (
        <animated.div style={fading} className='z-50 pt-2 mt-10'>
            <EmptyState
                icon={icons.EMOTION_SAD}
                iconColor='text-neutral-900'
                title={<FormattedMessage id='wishlist.emptyWishlist' />}
                action={returnToHomePage}
                actionLabel={<FormattedMessage id='wishlist.keepBrowsing' />}
            />
        </animated.div>
    )
}

EmptyWishlist.propTypes = {
    returnToHomePage: PropTypes.func.isRequired,
}

export default EmptyWishlist
