import React from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

const MoleculesRating = ({ className }) => {
    return (
        <div className={`c-rating o-flex o-flex--center ${className}`}>
            <ul className='o-list-inline o-list-inline--xs'>
                <li className='o-list-inline__item'>
                    <svg className='c-icon c-rating__symbol is-active' width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g>
                            <path d='M16.2612 6.16849C16.1734 5.90834 16.0115 5.67687 15.7938 5.50019C15.5761 5.32352 15.3112 5.20866 15.029 5.16859L11.3467 4.65938L9.69504 1.47565C9.56866 1.23263 9.37411 1.02818 9.13321 0.885278C8.89231 0.742374 8.61462 0.666672 8.33132 0.666672C8.04802 0.666672 7.77032 0.742374 7.52943 0.885278C7.28853 1.02818 7.09397 1.23263 6.9676 1.47565L5.32098 4.65841L1.63971 5.16859C1.35885 5.20876 1.09514 5.32287 0.877945 5.4982C0.660753 5.67354 0.498607 5.90323 0.409568 6.16168C0.32015 6.42155 0.309132 6.70034 0.377782 6.96595C0.446433 7.23156 0.59196 7.47319 0.797605 7.663L3.45698 10.1321L2.8282 13.6225C2.7803 13.8908 2.8116 14.1667 2.91856 14.4188C3.02552 14.671 3.20389 14.8895 3.43354 15.0497C3.66319 15.2099 3.93497 15.3053 4.21822 15.3253C4.50147 15.3453 4.78491 15.289 5.03656 15.1628L8.33284 13.5115L11.6322 15.1667C11.884 15.2931 12.1677 15.3494 12.4511 15.3294C12.7346 15.3093 13.0066 15.2137 13.2363 15.0533C13.466 14.8928 13.6444 14.674 13.7512 14.4215C13.8579 14.169 13.8889 13.8929 13.8405 13.6245L13.2087 10.1331L15.8681 7.663C16.0725 7.4738 16.2176 7.23359 16.2871 6.9695C16.3565 6.70541 16.3476 6.42796 16.2612 6.16849Z' />
                        </g>
                    </svg>
                </li>
                <li className='o-list-inline__item'>
                    <svg className='c-icon c-rating__symbol is-active' width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g>
                            <path d='M16.2612 6.16849C16.1734 5.90834 16.0115 5.67687 15.7938 5.50019C15.5761 5.32352 15.3112 5.20866 15.029 5.16859L11.3467 4.65938L9.69504 1.47565C9.56866 1.23263 9.37411 1.02818 9.13321 0.885278C8.89231 0.742374 8.61462 0.666672 8.33132 0.666672C8.04802 0.666672 7.77032 0.742374 7.52943 0.885278C7.28853 1.02818 7.09397 1.23263 6.9676 1.47565L5.32098 4.65841L1.63971 5.16859C1.35885 5.20876 1.09514 5.32287 0.877945 5.4982C0.660753 5.67354 0.498607 5.90323 0.409568 6.16168C0.32015 6.42155 0.309132 6.70034 0.377782 6.96595C0.446433 7.23156 0.59196 7.47319 0.797605 7.663L3.45698 10.1321L2.8282 13.6225C2.7803 13.8908 2.8116 14.1667 2.91856 14.4188C3.02552 14.671 3.20389 14.8895 3.43354 15.0497C3.66319 15.2099 3.93497 15.3053 4.21822 15.3253C4.50147 15.3453 4.78491 15.289 5.03656 15.1628L8.33284 13.5115L11.6322 15.1667C11.884 15.2931 12.1677 15.3494 12.4511 15.3294C12.7346 15.3093 13.0066 15.2137 13.2363 15.0533C13.466 14.8928 13.6444 14.674 13.7512 14.4215C13.8579 14.169 13.8889 13.8929 13.8405 13.6245L13.2087 10.1331L15.8681 7.663C16.0725 7.4738 16.2176 7.23359 16.2871 6.9695C16.3565 6.70541 16.3476 6.42796 16.2612 6.16849Z' />
                        </g>
                    </svg>
                </li>
                <li className='o-list-inline__item'>
                    <svg className='c-icon c-rating__symbol is-active' width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g>
                            <path d='M16.2612 6.16849C16.1734 5.90834 16.0115 5.67687 15.7938 5.50019C15.5761 5.32352 15.3112 5.20866 15.029 5.16859L11.3467 4.65938L9.69504 1.47565C9.56866 1.23263 9.37411 1.02818 9.13321 0.885278C8.89231 0.742374 8.61462 0.666672 8.33132 0.666672C8.04802 0.666672 7.77032 0.742374 7.52943 0.885278C7.28853 1.02818 7.09397 1.23263 6.9676 1.47565L5.32098 4.65841L1.63971 5.16859C1.35885 5.20876 1.09514 5.32287 0.877945 5.4982C0.660753 5.67354 0.498607 5.90323 0.409568 6.16168C0.32015 6.42155 0.309132 6.70034 0.377782 6.96595C0.446433 7.23156 0.59196 7.47319 0.797605 7.663L3.45698 10.1321L2.8282 13.6225C2.7803 13.8908 2.8116 14.1667 2.91856 14.4188C3.02552 14.671 3.20389 14.8895 3.43354 15.0497C3.66319 15.2099 3.93497 15.3053 4.21822 15.3253C4.50147 15.3453 4.78491 15.289 5.03656 15.1628L8.33284 13.5115L11.6322 15.1667C11.884 15.2931 12.1677 15.3494 12.4511 15.3294C12.7346 15.3093 13.0066 15.2137 13.2363 15.0533C13.466 14.8928 13.6444 14.674 13.7512 14.4215C13.8579 14.169 13.8889 13.8929 13.8405 13.6245L13.2087 10.1331L15.8681 7.663C16.0725 7.4738 16.2176 7.23359 16.2871 6.9695C16.3565 6.70541 16.3476 6.42796 16.2612 6.16849Z' />
                        </g>
                    </svg>
                </li>
                <li className='o-list-inline__item'>
                    <svg className='c-icon c-rating__symbol c-icon--outline' viewBox='0 0 17 16' xmlns='http://www.w3.org/2000/svg'>
                        <g>
                            <path d='M10.7924 5.11989L11.0307 5.5791L11.5431 5.64996L15.2218 6.15865C15.2222 6.15872 15.2227 6.15879 15.2231 6.15885C15.3284 6.17405 15.4229 6.2165 15.497 6.27669C15.5706 6.33635 15.6202 6.41 15.6464 6.48628C15.6709 6.56118 15.6731 6.63978 15.6533 6.71511L16.6204 6.9695L15.6533 6.71511C15.6333 6.79141 15.5899 6.8664 15.5221 6.92912L15.5209 6.93029L12.8615 9.40036L12.4606 9.77273L12.558 10.3111L13.1897 13.8017C13.2035 13.8782 13.195 13.9574 13.1635 14.032C13.1317 14.1071 13.0761 14.1782 12.9971 14.2334C12.9178 14.2888 12.8198 14.3244 12.7139 14.3319C12.6081 14.3394 12.5039 14.318 12.4141 14.2729L12.4139 14.2728L9.11459 12.6177L8.66651 12.3929L8.2183 12.6174L4.92201 14.2687L4.92156 14.2689C4.83184 14.3139 4.72775 14.3353 4.62195 14.3278C4.51618 14.3203 4.41826 14.2848 4.33895 14.2295C4.25998 14.1744 4.20432 14.1034 4.17251 14.0284C4.14095 13.9539 4.13238 13.875 4.14589 13.7988C4.14592 13.7986 4.14595 13.7984 4.14598 13.7983L4.77448 10.3094L4.87142 9.77128L4.47073 9.39926L1.81135 6.93016L1.81135 6.93016L1.8092 6.92817C1.74174 6.8659 1.69886 6.79137 1.67931 6.71571C1.65987 6.64051 1.66278 6.56202 1.68838 6.4874C1.71488 6.41047 1.76514 6.33627 1.83944 6.27629C1.9137 6.21635 2.00804 6.17405 2.11302 6.15875L5.7916 5.64894L6.30455 5.57786L6.5425 5.11791L8.18816 1.937C8.18827 1.93679 8.18839 1.93657 8.1885 1.93636C8.22684 1.86293 8.2889 1.79521 8.37297 1.74533C8.45759 1.69513 8.55874 1.66667 8.66466 1.66667C8.77058 1.66667 8.87173 1.69513 8.95635 1.74533C9.04046 1.79523 9.10253 1.86298 9.14087 1.93644C9.14097 1.93663 9.14106 1.93681 9.14116 1.937L10.7924 5.11989Z' strokeWidth='2' />
                        </g>
                    </svg>
                </li>
                <li className='o-list-inline__item'>
                    <svg className='c-icon c-rating__symbol c-icon--outline' viewBox='0 0 17 16' xmlns='http://www.w3.org/2000/svg'>
                        <g>
                            <path d='M10.7924 5.11989L11.0307 5.5791L11.5431 5.64996L15.2218 6.15865C15.2222 6.15872 15.2227 6.15879 15.2231 6.15885C15.3284 6.17405 15.4229 6.2165 15.497 6.27669C15.5706 6.33635 15.6202 6.41 15.6464 6.48628C15.6709 6.56118 15.6731 6.63978 15.6533 6.71511L16.6204 6.9695L15.6533 6.71511C15.6333 6.79141 15.5899 6.8664 15.5221 6.92912L15.5209 6.93029L12.8615 9.40036L12.4606 9.77273L12.558 10.3111L13.1897 13.8017C13.2035 13.8782 13.195 13.9574 13.1635 14.032C13.1317 14.1071 13.0761 14.1782 12.9971 14.2334C12.9178 14.2888 12.8198 14.3244 12.7139 14.3319C12.6081 14.3394 12.5039 14.318 12.4141 14.2729L12.4139 14.2728L9.11459 12.6177L8.66651 12.3929L8.2183 12.6174L4.92201 14.2687L4.92156 14.2689C4.83184 14.3139 4.72775 14.3353 4.62195 14.3278C4.51618 14.3203 4.41826 14.2848 4.33895 14.2295C4.25998 14.1744 4.20432 14.1034 4.17251 14.0284C4.14095 13.9539 4.13238 13.875 4.14589 13.7988C4.14592 13.7986 4.14595 13.7984 4.14598 13.7983L4.77448 10.3094L4.87142 9.77128L4.47073 9.39926L1.81135 6.93016L1.81135 6.93016L1.8092 6.92817C1.74174 6.8659 1.69886 6.79137 1.67931 6.71571C1.65987 6.64051 1.66278 6.56202 1.68838 6.4874C1.71488 6.41047 1.76514 6.33627 1.83944 6.27629C1.9137 6.21635 2.00804 6.17405 2.11302 6.15875L5.7916 5.64894L6.30455 5.57786L6.5425 5.11791L8.18816 1.937C8.18827 1.93679 8.18839 1.93657 8.1885 1.93636C8.22684 1.86293 8.2889 1.79521 8.37297 1.74533C8.45759 1.69513 8.55874 1.66667 8.66466 1.66667C8.77058 1.66667 8.87173 1.69513 8.95635 1.74533C9.04046 1.79523 9.10253 1.86298 9.14087 1.93644C9.14097 1.93663 9.14106 1.93681 9.14116 1.937L10.7924 5.11989Z' strokeWidth='2' />
                        </g>
                    </svg>
                </li>
            </ul>
            <p className='u-text-s t-text-quiet padding-left--8'>23 Bewertungen</p>
        </div>
    )
}

MoleculesRating.propTypes = {
    className: PropTypes.string,
}

MoleculesRating.defaultProps = {
    className: '',
}

export default ComponentInjector.return('MoleculesRating', MoleculesRating)
