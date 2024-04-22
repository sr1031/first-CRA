import { useState as st } from 'react';
import PropTypes from 'prop-types';
import styles from './Btn.module.css';

function Btn({ banana, big, click }) {
    const children = (banana === undefined) ? "save!" : banana;
    const [value, setValue] = st(children);

    function onClick() {
        setValue((current) => {
            return (current === children) ? "revert!" : children;
        });
    }

    //css module 사용전 코드
    return (
        <button
            className={styles.Button}
            style={{
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