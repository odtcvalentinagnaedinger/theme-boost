import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import app from '@frontastic/catwalk/src/js/app/app'

import Summary from './Summary'
import MiniSummary from './MiniSummary'
import Payments from './Payments'
import ProductList from './ProductList'
import StickyRightColumn from 'Molecules/Layout/StickyRightColumn'

const FullCart = ({ intl, items, sum, isLoading = false }) => {
    const buttonLabel = intl.formatMessage({ id: 'cart.checkout' })

    return (
        <StickyRightColumn
            variant='my-4 max-w-960px md:px-4 mx-auto'
            leftColumn={
                <div className=''>
                    <div className='md:hidden border-b-4 border-neutral-100'>
                        <MiniSummary
                            isLoading={isLoading}
                            sum={sum}
                            label={buttonLabel}
                            onClick={() => { return app.getRouter().push('Frontastic.Frontend.Master.Checkout.checkout') }}
                        />
                    </div>

                    <div className='md:shadow-md md:rounded'>
                        <div className='p-4 border-b-4 border-neutral-100'>
                            <h1 className='hidden md:block md:px-2 md:pt-1 md:pb-5 text-2xl text-neutral-900 font-bold leading-none'>
                                <FormattedMessage id='cart.myCart' />
                            </h1>

                            <ProductList items={items} />
                        </div>

                        <div className='px-4 py-5 border-b-4 border-neutral-100 md:border-0'>
                            <h2 className='text-lg text-neutral-900 font-bold leading-none'>
                                <FormattedMessage id='cart.paymentMethods' />
                            </h2>

                            <div className='mt-4'>
                                <Payments />
                            </div>
                        </div>
                    </div>
                </div>
            }

            rightColumn={
                <div className='p-4 border-b-4 border-neutral-100 md:border-0 md:shadow-md md:rounded'>
                    <Summary
                        isLoading={isLoading}
                        sum={sum}
                        label={buttonLabel}
                        onClick={() => { return app.getRouter().push('Frontastic.Frontend.Master.Checkout.checkout') }}
                    />
                </div>
            }
        />
    )
}

FullCart.propTypes = {
    intl: intlShape.isRequired,
    items: PropTypes.array.isRequired,
    sum: PropTypes.number.isRequired,
    isLoading: PropTypes.bool,
}

export default injectIntl(FullCart)
