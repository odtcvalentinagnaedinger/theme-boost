import React from 'react'
import PropTypes from 'prop-types'

import OrganismsPromoboxWithPositioning from '../../patterns/molecules/promobox/promobox-with-positioning'
import Button from '../../patterns/atoms/buttons/button'
import Slider from '../../patterns/templates/slider'
import { useWindowWidth } from '@react-hook/window-size'
import { buttonBoxesDesktop } from './category-button-boxes.module.scss'

const CategoryButtonBoxesTastic = (props) => {
    const width = useWindowWidth()

    // eslint-disable-next-line no-unused-vars
    const { firstImage, firstButtonLabel, firstButtonLink, secondImage, secondButtonLabel, secondButtonLink, thirdImage, thirdButtonLabel, thirdButtonLink } = props.data
    let options = {
        height: '204px',
        vertical: 'middle',
        horizontal: 'center',
    }

    const buttonBoxes = () => {
        return [
            <OrganismsPromoboxWithPositioning
                key='1'
                image={firstImage}
                {... options}
                >
                <Button type='primary'>
                    {firstButtonLabel}
                </Button>
            </OrganismsPromoboxWithPositioning>,
            <OrganismsPromoboxWithPositioning
                key='2'
                image={secondImage}
                {... options}
                >
                <Button type='primary'>
                    {secondButtonLabel}
                </Button>
            </OrganismsPromoboxWithPositioning>,
            <OrganismsPromoboxWithPositioning
                key='3'
                image={thirdImage}
                {... options}
                >
                <Button type='primary'>
                    {thirdButtonLabel}
                </Button>
            </OrganismsPromoboxWithPositioning>,
        ]
    }

    if (width < 880) {
        return (
            <div className='button-boxes-slider display-grid'>
                <Slider options={{ fixedWidth: 290 }}>
                    {buttonBoxes()}
                </Slider>
            </div>
        )
    } else {
        return (
            <div className={buttonBoxesDesktop}>
                {buttonBoxes()}
            </div>
        )
    }
}

CategoryButtonBoxesTastic.propTypes = {
    data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

CategoryButtonBoxesTastic.defaultProps = {}

export default CategoryButtonBoxesTastic
