import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import ArticleService from '../../services/article.service'

export default function ArticleSearch() {

   const [query, setQuery] = useState('');
   const [articles, setArticles] = useState([]);

   const handleSubmit = async (e, query) => {
      try {
         const response = await ArticleService.getSearchArticles(query)
         console.log(response.data);
         setArticles(response.data.articles)
      } catch (error) {
         console.log(error);
      }
   }

   return (
      <Form className="d-flex ml-auto">
         <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 search-width"
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
         />
         <Button variant="outline-success"
            onClick={(e) => handleSubmit(e, query)}
            disabled={!query}
         ><i className="fa fa-search" /></Button>
      </Form>
   )
}
