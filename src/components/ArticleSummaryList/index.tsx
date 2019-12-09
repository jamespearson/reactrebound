import React from 'react';
import { IArticlesData } from '../../reducers/articles';
import ArticleSummaryItem from '../ArticleSummaryItem';


interface IProps {
    data: IArticlesData
}

export default (props: IProps) => {
    const { data } = props
    return (<div>
        {Object.keys(data).map((articleId) => {
            const article = data[articleId]
            return (<ArticleSummaryItem key={articleId} {...article} />)

        })}
    </div>)

}