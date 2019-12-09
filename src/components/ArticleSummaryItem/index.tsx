import React from 'react';
import { IArticle } from '../../reducers/articles';

interface IProps extends IArticle {

}

export default (props: IProps) => {
    const { title, description } = props
    return (<article>
        <header>
            <h2>{title}</h2>
        </header>
        <div>
            {description}
        </div>
    </article>)

}