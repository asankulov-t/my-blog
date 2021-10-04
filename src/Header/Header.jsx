import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className={'header'}>
            <div className="header-titles">
                <span className={'header-small-title'}>React and Node</span>
                <span className={'header-large-title'}>Blog</span>
            </div>
            <img className={'headerImg'} src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" alt=""/>
        </div>
    );
};

export default Header;