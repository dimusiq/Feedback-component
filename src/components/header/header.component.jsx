import React from 'react';
import PropTypes from 'prop-types';
import {
    HeaderContainer,
    HeaderTextColor
} from './header.styles';

function Header({ text }) {
    return (
        <HeaderContainer>
            <div className="container">
                <HeaderTextColor>{text}</HeaderTextColor>
            </div>
        </HeaderContainer>
    )
}

Header.defaultProps = {
    text: 'Feedback App',
}

Header.propTypes = {
    text: PropTypes.string,
}


export default Header;

