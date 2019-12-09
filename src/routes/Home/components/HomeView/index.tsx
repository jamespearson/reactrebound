import React from 'react';
import { IArticlesData } from '../../../../reducers/articles';
import ArticleSummaryList from '../../../../components/ArticleSummaryList';

interface IProps {
    data: IArticlesData
}
export default (props: IProps) => {
    const { data } = props
    return (<div>
        <ArticleSummaryList data={data} />
    </div>)

}