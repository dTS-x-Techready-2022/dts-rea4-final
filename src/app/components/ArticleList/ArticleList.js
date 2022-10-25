import React, { Component } from 'react';
import Article from '../../components/Article/Article';
import './ArticleList.css';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { Button, Form } from 'react-bootstrap';
import ArticleSearch from '../Article/ArticleSearch';

const EmptyView = () =>
   <div>
      <img src="https://cataas.com/cat/cute/says/WOAH%20SUCH%20EMPTY" alt="cat" />
   </div>


const subCategories = ['business', 'technology', 'entertainment', 'sports'];

class ArticleList extends Component {
   constructor(props) {
      super(props);
      this.state = {
         error: null,
         isLoaded: false,
         articles: [],
         query: '',
         count: 0
      };
   }

   handleIncrement = () => {
      this.setState({ count: this.state.count + 1 });
   };

   handleSubCategoryClick(category) {
      let url = 'https://newsapi.org/v2/top-headlines?category=' + category +
         '&apiKey=77e9030d67f34b2e918af2623154e668';
      this.getArticles(url);
   }

   handleQueryChange(e) {
      this.setState({ query: e.target.value });
   }

   handleQuerySearch(query) {
      let url = 'https://newsapi.org/v2/top-headlines?q=' + query +
         '&apiKey=77e9030d67f34b2e918af2623154e668';
      this.getArticles(url);
      this.setState({ query: '' });
   }

   getArticles(url) {
      this.setState({
         isLoaded: false
      });

      fetch(url)
         .then(response => response.json())
         .then(

            (result) => {
               this.setState({
                  isLoaded: true,
                  articles: result.articles
               });
            },

            (error) => {
               this.setState({
                  isLoaded: true,
                  error
               })
            }
         )
   }

   componentDidMount() {
      ;
      this.getArticles('https://newsapi.org/v2/top-headlines?country=us&apiKey=77e9030d67f34b2e918af2623154e668');
   }

   render() {
      const { error, isLoaded, articles } = this.state;

      if (error) {
         return <div>Error in Loading</div>
      } else if (!isLoaded) {
         return <LoadingSpinner />
      } else {
         return (
            <div>
               <div className="search-wrap">
                  <ArticleSearch />
               </div>

               <div className="subcategory-list-div">
                  {subCategories.map((subCategory, index) =>
                     <div key={index} className="individual-subcategory"
                        onClick={() => this.handleSubCategoryClick(subCategory)}>
                        <button
                           className="subcategory-pill">{subCategory}</button>
                     </div>
                  )}
               </div>
               {
                  articles.length === 1 ?
                     <h4>{articles.length} RESULT FOUND</h4> :
                     <h4>{articles.length} RESULTS FOUND</h4>
               }
               {

                  articles.length ? <div className="article-list-div" onClick={this.handleIncrement}>
                     {articles.map((article, i) => (
                        article.author ?
                           <Article article={article} key={i} classes="col-lg-3" /> : null
                     ))}
                  </div> : <EmptyView />
               }
            </div>
         )
      }
   }
}

export default ArticleList;
