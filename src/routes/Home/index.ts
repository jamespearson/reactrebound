import { compose } from "redux";
import { connect } from "react-redux";

import { IArticleState } from "../../reducers/articles";

import HomeView from "./components/HomeView"

const mapDispatchToProps = {

};

const mapStateToProps = ({ articles: { data } }: { articles: IArticleState }) => ({
    data
})


export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(HomeView);