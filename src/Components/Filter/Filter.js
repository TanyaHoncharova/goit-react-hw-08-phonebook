import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import propsTypes from 'prop-types'
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import styles from './Filter.module.css';


const Filter = ({ value, onChange }) => {

    return (
        <div>

            <p> Find contacts by name</p>
            <input
                type="text"
                className={styles.input}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

Filter.defaultProps = {
    value: ' '
}
Filter.propsTypes = {
    value: propsTypes.string,
    onChange: propsTypes.isPequired
}

const mapStateToProps = state => ({
    value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
    onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

