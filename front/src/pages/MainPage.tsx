import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTab } from "../store/movieAppStore";
import MediaItemComponent from "../components/MediaItem";
import '../styles/MainPage.scss';
import { RootState } from "../store";
interface MainPageProps {
  moviesList?: Array<any>;
  showsList?: Array<any>;
}
const MainPage = (props: MainPageProps) => {

//  const [activeTab, setActiveTab] = useState('movies');
  const dispatch = useDispatch();
  const selectedTab = useSelector((state: RootState) => state.movieAppSlice.selectedTab);

  return(
    <div className="main-page-container">
      <div className="button-group-container">
        <div className="button-group">
          <button className={`button-group_btn ${selectedTab === 'movies' ? 'selected' :''}`}
            onClick={() => dispatch(setSelectedTab('movies'))}>Movies</button>
          <button className={`button-group_btn ${selectedTab === 'shows' ? 'selected' :''}`}
            onClick={() => dispatch(setSelectedTab('shows'))}>Shows</button>
        </div>
      </div>
      <div className="list-container">
        {
          /**
           * TODO: Although the layout below makes sense, it feels
           * a bit clumsy. If there's enough time, consider refactoring it
           * so that the layout part is more readable or easier to maintain
           */
          selectedTab === 'movies' ?
          <div className="movielist-container">
            {
              props.moviesList?.length ?
                props.moviesList.map((item, index) => <MediaItemComponent key={'movieitem-'+index} media={item} />) :
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