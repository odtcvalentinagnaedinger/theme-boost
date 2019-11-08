import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import Translatable from 'frontastic-catwalk/src/js/component/translatable'

class OrganismsPromoboxWithPositioning extends Component {
    render () {
        const { children, vertical, horizontal, height, image } = this.props

        let style = {}
        if (typeof height !== 'undefined') { style = { ...style, height } }

        if (typeof image === 'undefined') { return null }

        return (
            <div className='c-promobox t-spotlight u-aspect-ratio-16x9' style={style}>
                <img
                    src={image.media.file}
                    alt={<Translatable value={image.media.title} />} className='c-promobox__backdrop' />
                <div className={`c-promobox__overlay c-promobox__overlay--${vertical}-${horizontal}`}>
                    <div className='c-promobox__overlay__inner'>
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}

OrganismsPromoboxWithPositioning.defaultProps = {
    vertical: 'middle',
    horizontal: 'center',
}

OrganismsPromoboxWithPositioning.propTypes = {
    children: PropTypes.node.isRequired,
    vertical: PropTypes.string,
    horizontal: PropTypes.string,
    height: PropTypes.string,
    image: PropTypes.object.isRequired,
}

export default ComponentInjector.return('OrganismsPromoboxWithPositioning', OrganismsPromoboxWithPositioning)
