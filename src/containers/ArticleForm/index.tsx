import { compose } from "redux";
import { connect } from "react-redux";
import { IState } from "../../reducers";

import { articleCreate } from "../../sagas/articles"

import ArticleFormView from "./components/ArticleFormView"


const mapDispatchToProps = {
  articleCreate
};

const mapStateToProps = ({ currentUser }: IState) => {
  return {
    isLoggedIn: currentUser.uid !== null,
    currentUser
  }
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ArticleFormView);