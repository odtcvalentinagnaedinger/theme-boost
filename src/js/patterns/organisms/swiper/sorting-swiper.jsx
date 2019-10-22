import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

const OrganismsSortingSwiper = ({ sorting }) => {
    return (
        <div className='o-swiper'>
            <div className='o-swiper__holder'>
                {sorting.map((c) => {
                  return <button className='o-swiper__item c-chip u-text-nowrap'>{c}</button>
              })}
            </div>
        </div >
    )
}

OrganismsSortingSwiper.propTypes = {
    sorting: PropTypes.array.isRequired,
}

OrganismsSortingSwiper.defaultProps = {
    sorting: ['Topseller', 'Neu hinzugefügt', 'Niedrigster Preis', 'Höchster Preis'],
}

export default ComponentInjector.return('OrganismsSortingSwiper', OrganismsSortingSwiper)
