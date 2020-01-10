import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class Coupon extends Component {
    render () {
        return (<div>
            <form method=''>
                <div className='o-form-area'>
                    <div className='o-form-area__column-6-6 o-form-area__new-row'>
                        <label htmlFor='coupon-code' className='c-form-label'>Couponcode</label>
                        <input type='text' name='couponcode' id='coupon-code' className='o-distance-xs' />
                    </div>
                </div>
            </form>
        </div>)
    }
}

Coupon.propTypes = {
}

Coupon.defaultProps = {
}

export default ComponentInjector.return('Coupon', Coupon)