import React, { Component } from 'react'
import PropTypes from 'prop-types';

 class ProductInput extends Component {
    render() {
        const { type, style, id, onChange, placeHolder, className, name,value } = this.props;
       
        return (
            <div>
                <input  
                              type={type}
                              name={name}
                              id={id}
                              placeholder={placeHolder}
                              className={className}
                              value = {value}
                              onChange = {onChange}
                              style = {style}
                              >
                      </input>
            </div>
        )
    }
}
Text.propTypes = {
    disabled: PropTypes.bool,
    type: PropTypes.string,
};
Text.defaultProps = {
    disabled: false,
    type: "text",
    placeHolder: "gelmedi"
};
export default ProductInput;