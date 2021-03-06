import React from 'react'
import { FormattedMessage } from 'react-intl'

import { ReactComponent as IconStar } from 'Icons/tailwind-icons/icon-star.svg'
import { ReactComponent as IconStarFull } from 'Icons/tailwind-icons/icon-star-full.svg'

const StarRating = () => {
    return (
        <div className='flex py-1'>
            <IconStarFull />
            <IconStarFull />
            <IconStar />
            <IconStar />
            <IconStar />
            <div className='text-sm text-neutral-700 pl-2'>
                <FormattedMessage id='product.reviewsWithCount' values={{ count: 23 }} />
            </div>
        </div>
    )
}

export default StarRating
