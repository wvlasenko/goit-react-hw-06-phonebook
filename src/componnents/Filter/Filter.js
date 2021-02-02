import { connect } from 'react-redux';
import { filterContacts } from '../../redux/contacts-actions';
import PropTypes from 'prop-types';
import FilterStl from './Filter.module.css';

function Filter({ filter, onChangeFilter }) {
  return (
    <div className={FilterStl.filterContainer}>
      <label className={FilterStl.label}>
        Find contact by name:
        <input
          type="text"
          value={filter}
          onChange={onChangeFilter}
          name="filter"
          className={FilterStl.input}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  filter: state.contacts.filter,
});
const mapDispatchToProps = dispatch => ({
  onChangeFilter: e => dispatch(filterContacts(e.target.value)),
});

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
