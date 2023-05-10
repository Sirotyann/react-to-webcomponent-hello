import React from "react";
import PropTypes from "prop-types";

function Text(props) {
    const value = props?.value;
    console.log("# props", props)
    return <div style={{padding: '5px 15px 5px', border: '1px solid #dcdcdc'}}>
        Text from Tj: {value}
    </div>
}

Text.propTypes = {
    value: PropTypes.string
}

export default Text;