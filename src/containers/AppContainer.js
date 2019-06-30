import { connect } from 'react-redux';
import App from '../App'
import * as listActions from '../redux/modules/list'
import Dnd from '../dnd'

const mapStateToProps = (state) => {
  return {
    data: state.list
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  orderList: ({oldIndex, newIndex}) => {
    dispatch(listActions.orderList(oldIndex, newIndex))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Dnd)
