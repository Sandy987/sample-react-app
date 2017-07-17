import { connect } from 'react-redux';

import WidgetScene from './WidgetScene';
import { allWidgets } from 'selectors/widgets';
import { fetchWidgets, makeWidget } from 'ducks/widgets';

const mapStateToProps = state => ({ widgets: allWidgets(state) });
const mapDispatchToProps = dispatch => ({
  fetchWidgets: () => dispatch(fetchWidgets()),
  makeWidget: widget => dispatch(makeWidget(widget)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WidgetScene);
