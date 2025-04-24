import React from 'react';
import PropTypes from 'prop-types';
import Selected_Players_Card from './Selected_Players_Card';

const Selected_Players_Container = () => {
    return (
        <>
            <center><h3>Total Selected Players is {length}</h3></center>
            <Selected_Players_Card></Selected_Players_Card>
        </>
    );
};

Selected_Players_Container.propTypes = {

};

export default Selected_Players_Container;