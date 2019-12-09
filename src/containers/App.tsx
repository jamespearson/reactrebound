import * as React from 'react';
import SiteHeader from '../containers/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import ArticleForm from './ArticleForm';

export default class App extends React.Component {
  render() {
    const { children } = this.props;
    return <React.Fragment>
      <SiteHeader />
      <ArticleForm />
      {children}
      <SiteFooter />
    </React.Fragment>;
  }
}
