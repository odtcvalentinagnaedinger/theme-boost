import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import OrganismsProduct from '../products/product'
import MoleculesHeading from '../../molecules/headings/heading'

class OrganismsProductListing extends Component {
    render () {
        return (
            <div>
                <section className='o-distance o-prevent-space'>
                    <MoleculesHeading />
                    <div className='o-grid o-grid--large-forth'>
                        <OrganismsProduct />
                        <OrganismsProduct />
                        <OrganismsProduct />
                        <OrganismsProduct />
                    </div>
                </section>
            </div>
        )
    }
}

OrganismsProductListing.propTypes = {}

OrganismsProductListing.defaultProps = {}

export default ComponentInjector.return('OrganismsProductListing', OrganismsProductListing)
