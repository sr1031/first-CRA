import { useState as st } from 'react';
import PropTypes from 'prop-types';

function Btn({ banana, big, click }) {
    const children = (banana === undefined) ? "save!" : banana;
    const [value, setValue] = st(children);

    function onClick() {
        setValue((current) => {
            return (current === children) ? "revert!" : children;
        });
    }

    return (
        <button
            style={{
                color: 'white',
                backgroundColor: 'tomato',
                border: 0,
                borderRadius: 10,
                padding: "10px 20px",
                fontSize: big ? 30 : undefined,
            }}
            onClick={click ? onClick : undefined}
        >
            {value}
        </button >
    );
}

Btn.propTypes = {
    banana: PropTypes.string,
    big: PropTypes.bool.isRequired,
    click: PropTypes.bool.isRequired
};

export default Btn;