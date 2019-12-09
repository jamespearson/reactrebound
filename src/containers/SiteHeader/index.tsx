import { compose } from "redux";
import { connect } from "react-redux";
import { IState } from "../../reducers";

import SiteHeaderView from "./components/SiteHeaderView"

const mapDispatchToProps = {

};

const mapStateToProps = ({ currentUser }: IState) => {
  return {
    currentUser
  }
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SiteHeaderView);