import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SmallStars = ({ saveRating }) => {
    const [ ratingHighlighted, setRatingHighlighted ] = useState(0)
    const [ rating, setRating ] = useState(0)

    const handleMouseEnter = (rating) => {
        setRatingHighlighted(rating)
    }

    const handleMouseLeave = () => {
        setRatingHighlighted(rating)
    }

    return (
        <div className='stars o-distance-xs'>
            {[1, 2, 3, 4, 5].map((s, i) => {
                const fill = i < ratingHighlighted ? '#FFCE18' : 'none'
                return (
                    <span
                        key={i}
                        onMouseEnter={() => { handleMouseEnter(i + 1) }}
                        onMouseLeave={() => { handleMouseLeave() }}
                        onClick={() => {
                            setRating(i + 1)
                            saveRating(i + 1)
                        }}
                    >
                        <svg width='16' height='16' viewBox='0 0 16 16' fill={fill} xmlns='http://www.w3.org/2000/svg'>
                            <path d='M10.1258 5.11988L10.364 5.57908L10.8764 5.64994L14.5551 6.15864C14.5556 6.1587 14.556 6.15877 14.5565 6.15884C14.6617 6.17404 14.7562 6.21649 14.8304 6.27667C14.9039 6.33634 14.9536 6.40998 14.9797 6.48627C15.0043 6.56116 15.0065 6.63976 14.9867 6.71509L15.9538 6.96948L14.9867 6.7151C14.9666 6.79139 14.9232 6.86639 14.8555 6.92911L14.8542 6.93028L12.1948 9.40035L11.7939 9.77272L11.8914 10.3111L12.5231 13.8017C12.5368 13.8781 12.5284 13.9574 12.4968 14.032C12.4651 14.1071 12.4094 14.1782 12.3304 14.2334C12.2511 14.2888 12.1531 14.3244 12.0473 14.3319C11.9414 14.3393 11.8372 14.318 11.7474 14.2729L11.7473 14.2728L8.44793 12.6177L7.99985 12.3929L7.55164 12.6174L4.25536 14.2687L4.2549 14.2689C4.16518 14.3139 4.06109 14.3352 3.95529 14.3278C3.84953 14.3203 3.7516 14.2848 3.6723 14.2295C3.59332 14.1744 3.53767 14.1033 3.50586 14.0283C3.4743 13.9539 3.46573 13.875 3.47923 13.7987C3.47926 13.7986 3.47929 13.7984 3.47932 13.7982L4.10783 10.3094L4.20476 9.77127L3.80407 9.39924L1.1447 6.93014L1.1447 6.93014L1.14254 6.92815C1.07509 6.86589 1.03221 6.79136 1.01265 6.7157C0.993217 6.6405 0.996123 6.562 1.02172 6.48739C1.04822 6.41046 1.09849 6.33626 1.17278 6.27628C1.24704 6.21633 1.34138 6.17404 1.44637 6.15873L5.12494 5.64893L5.63789 5.57784L5.87585 5.1179L7.52151 1.93699C7.52162 1.93677 7.52173 1.93656 7.52184 1.93635C7.56018 1.86291 7.62224 1.79519 7.70632 1.74532C7.79094 1.69512 7.89208 1.66666 7.99801 1.66666C8.10393 1.66666 8.20507 1.69512 8.2897 1.74532C8.3738 1.79521 8.43588 1.86297 8.47421 1.93643C8.47431 1.93661 8.47441 1.9368 8.4745 1.93698L10.1258 5.11988Z' stroke='#97A5BA' strokeWidth='2' />
                        </svg>
                    </span>
                )
            })}
        </div>
    )
}

SmallStars.propTypes = {
    saveRating: PropTypes.func,
}

SmallStars.defaultProps = {
    saveRating: () => {},
}

export default SmallStars