import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import OrganismsBundleListing from '../../organisms/listings/bundle-listing'
import OrganismsPaymentListingIcons from '../../organisms/listings/payment-listing-icons'

const CartListing = ({ cartItems, outerClassName }) => {
    return (
        <div className={outerClassName}>
            <section className='c-frame-large-up'>
                <h1 className='c-title-area'><FormattedMessage id='cart.myCart' /></h1>
                <div>
                    <OrganismsBundleListing cartItems={cartItems} />
                </div>
            </section>
            <div className='o-with-sidebar__boundless o-distance u-hidden-large-up'>
                <span className='c-divider c-divider--break' />
            </div>
            <section className='o-container o-distance-l c-frame-large-up'>
                <h2 className='c-title-area'><FormattedMessage id='cart.paymentMethods' /></h2>
                <OrganismsPaymentListingIcons image={''} />
            </section>
            <div className='o-with-sidebar__boundless o-distance u-hidden-large-up'>
                <span className='c-divider c-divider--break' />
            </div>
        </div>
    )
}

CartListing.propTypes = {
    cartItems: PropTypes.array.isRequired,
    outerClassName: PropTypes.string,
}

export default CartListing
