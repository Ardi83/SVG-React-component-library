import React from 'react';
import PropTypes from 'prop-types'

class IMG extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {src, width} = this.props;
        return (
            <div dangerouslySetInnerHTML={{ __html: src }} style={{ width: width}} />
        );
    }
}

IMG.propTypes = {
    src: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired,
}

IMG.defaultProps = {
    src: 'Image no defined'
}

export default IMG;