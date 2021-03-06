import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { FormattedMessage } from 'react-intl'

import LoaderButton from 'Molecules/Loaders/LoaderButton/index'
import Price from 'Atoms/price'
import Button from 'Atoms/button'

const Summary = ({ sum, subtotal = '', disabled = false, isLoading = false, onClick, label, showVouchers = true }) => {
    return (
        <section>
            <div className='mb-4 grid grid-cols-2 col-gap-6 row-gap-2'>
                {subtotal ?
                    <Fragment>
                        <p className='text-md text-neutral-900 leading-normal'>
                            <FormattedMessage id='cart.subtotal' />
                        </p>
                        <p className='text-md text-right text-neutral-900 leading-normal'>
                            <Price value={sum} />
                        </p>
                    </Fragment>
                : null}
                <p className='text-md text-neutral-900 leading-normal'>
                    <FormattedMessage id='cart.shippingCosts' />
                </p>
                <p className='text-md text-right text-neutral-900 uppercase leading-normal'>
                    <FormattedMessage id='cart.gratis' />
                </p>

                <span className='mb-3 block w-full h-px bg-neutral-300 col-start-auto col-end-span-2' />

                <p className='mb-1 text-md text-neutral-900 leading-none font-bold'>
                    <FormattedMessage id='cart.totalAmount' />
                </p>

                <p className='text-md text-right text-neutral-900 leading-none font-bold'>
                    <Price value={sum} />
                </p>
            </div>

            <Button
                name={label}
                variant={classnames({
                    'btn btn-primary w-full h-10': true,
                    'cursor-default': isLoading || disabled,
                })}
                onClick={onClick}
                disabled={disabled || isLoading}
            >
                {isLoading ? <LoaderButton /> : label}
            </Button>

            {showVouchers &&
            <p className='mt-4 text-xs text-neutral-900 text-center'>
                <FormattedMessage id='cart.enterVouchers' />
            </p>
            }
        </section>
    )
}

Summary.propTypes = {
    subtotal: PropTypes.string,
    sum: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    showVouchers: PropTypes.bool,
    isLoading: PropTypes.bool,
}

export default Summary
