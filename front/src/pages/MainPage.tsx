import React, {useState} from "react";
import MediaItemComponent from "../components/MediaItem";
import '../styles/MainPage.scss';
interface MainPageProps {
  movieList?: Array<any>;
  showsList?: Array<any>;
}
const MainPage = (props: MainPageProps) => {

  const [activeTab, setActiveTab] = useState('movies');
  return(
    <div className="main-page-container">
      <div className="button-group-container">
        <div className="button-group">
          <button className="button-group_btn" onClick={() =>setActiveTab('movies')}>Movies</button>
          <button className="button-group_btn" onClick={() =>setActiveTab('shows')}>Shows</button>
        </div>
      </div>
      <div className="list-container">
        {
          /**
           * TODO: Although the layout below makes sense, it feels
           * a bit clumsy. If there's enough time, consider refactoring it
           * so that the layout part is more readable or easier to maintain
           */
          activeTab === 'movies' ?
          <div className="movielist-container">
            {
              props.movieList?.length ?
                props.movieList.map((item, index) => <MediaItemComponent key={'movieitem-'+index} media={item} />) :
                <p>
                  <h3>No movies available currently</h3>
                  <span>Reload the page or try again later!</span>
                </p>
            }
          </div>
            :
          <div className="showslist-container">
            {
              props.showsList?.length ?
                props.showsList.map((item, index) => <MediaItemComponent key={'movieitem-'+index} media={item}/>) :
                <p>
                  <h3>No shows available currently</h3>
                  <span>Reload the page or try again later!</span>
                </p>
            }
          </div>
        }

      </div>
    </div>
  )
}

export default MainPage;