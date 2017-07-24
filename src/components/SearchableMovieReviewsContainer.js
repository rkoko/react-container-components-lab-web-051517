// Code SearchableMovieReviewsContainer Here
import React, {Component} from 'react';
// import LatestMovieReviewsContainer from './LatestMovieReviewsContainer'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '4153fd25609f460c806f83cbf84bda03';

class SearchableMovieReviewsContainer extends Component {
  constructor(){
    super();

    this.state = {
      searchTerm: null,
      reviews: []
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
    console.log(this.state.searchTerm)
  }

  handleClick = (event) => {
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`)
      .then(response => response.json())
      .then(response => response.results)
      .then(reviews => this.setState({ reviews })
    );
  }



  render(){
    return(
      <div className="searchable-movie-reviews">
        <input type="text" placeholder="search for a keyword" onChange={this.handleChange} />
        <input type="submit" value="search" onClick={this.handleClick} />
        <MovieReviews reviews={this.state.reviews}/>
      </div>

    )
  }



}

export default SearchableMovieReviewsContainer;
