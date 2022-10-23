import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID ='movie-popular' title='Popular' fetchURL={requests.requestPopular}/>
      <Row rowID ='movie-trending' title='Trending' fetchURL={requests.requestTrending}/>
      <Row rowID ='movie-top' title='Top Rated' fetchURL={requests.requestTopRated}/>
      <Row rowID ='movie-coming' title='Up Coming' fetchURL={requests.requestUpcoming}/>
    </>
  )
}

export default Home