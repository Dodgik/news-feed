import * as React from 'react';
import * as style from './style.css';
import { ArticleModel } from 'app/models';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

export namespace ArticleView {
  export interface Props {
    article: ArticleModel;
  }
}

export class ArticleView extends React.Component<ArticleView.Props> {
  
  render() {
    const { article } = this.props;
    
    return (
      <div className={style.view}>
        <Card>
          <CardHeader title={article.title} />
          <div><img className={style.image} src={article.urlToImage} /></div>
          <CardContent>
            <Typography component="p">
              {article.description}
            </Typography>
          </CardContent>
          <CardActions className={style.actions} disableActionSpacing>
            URL: <a href={article.url} target="_blank">{article.url}</a>
          </CardActions>
        </Card>
      </div>
    );
  }
}
