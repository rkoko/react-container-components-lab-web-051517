import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews'

const NYT_API_KEY = '4153fd25609f460c806f83cbf84bda03';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
  constructor(){
    super();

    this.state = {
      reviews: []
    }
  }


  componentWillMount(){
    fetch(URL)
      .then(response => response.json())
      .then(response => response.results)
      .then(reviews => this.setState({ reviews })
    );
  }


  render(){
    // console.log(this.state.reviews)
    return(
      <div className="latest-movie-reviews">
      <MovieReviews reviews={this.state.reviews}/>
    </div>
    )

  }


}

export default LatestMovieReviewsContainer;
