import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import NodeLink from '@frontastic/catwalk/src/js/app/nodeLink'

import { topCategoryType } from '../types'

const TopCategories = ({ topCategories, currentTopCategory, handleClick }) => {
    return (
        <div className='flex items-center'>
            {topCategories.map((item, i) => {
                if (!item.tree) {
                    return null
                }

                return (
                    <NodeLink
                        key={item.tree.nodeId}
                        node={item.tree}
                        className={classnames({
                            'mr-4 font-bold text-neutral-600 text-sm py-2': true,
                            'text-neutral-900 border-b-2 border-neutral-900': i === currentTopCategory,
                        })}
                        onClick={(e) => {
                            return handleClick(e, i)
                        }}
                    >
                        {item.name}
                    </NodeLink>
                )
            })}
        </div>
    )
}

TopCategories.propTypes = {
    topCategories: PropTypes.arrayOf(topCategoryType),
    currentTopCategory: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
}

export default TopCategories
