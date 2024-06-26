import React, {useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { movieDbImagesUrl } from "../config/config-data";
import { fetchRelatedMovies } from "../services/movies-service";
import { fetchRelatedShows } from "../services/tvshows-service";
import MediaItemComponent from "../components/MediaItem";
import '../styles/DetailPage.scss';

const DetailPage = () => {
  const {state} = useLocation();
  const navigate = useNavigate();
  const {mediaDetail} = state;
  const [mediaPoster, setMediaPoster] = useState('');
  const [productionCompanies, setProductionCompanies] = useState('');
  const [relatedContent, setRelatedContent] = useState([])

  useEffect(() => {
    if (mediaDetail.poster_path) {
      setMediaPoster(`${movieDbImagesUrl}${mediaDetail.poster_path}`)
    }
    if (mediaDetail.production_companies?.length) {
      setProductingCompaniesString();
    }
    if (mediaDetail.first_air_date) {
      similarShows(mediaDetail.id);
    } else {
      similarMovies(mediaDetail.id);
    }
  }, [mediaDetail]);

  const setProductingCompaniesString = () => {
    let prodCompaniesString = '';
    for (const [index, company] of mediaDetail.production_companies.entries()) {
      if (index === (mediaDetail.production_companies.length - 1)) {
        prodCompaniesString += company.name;
      } else {
        prodCompaniesString += company.name + ', '
      }
    }
    setProductionCompanies(prodCompaniesString);
  }


  const similarMovies = (movieId: number) => {
    fetchRelatedMovies(movieId).then((res: any) => {
      if (res?.results) {
        setRelatedContent(res.results.slice(0,4));
      }
    });
  }

  const similarShows = (showId: number) => {
    fetchRelatedShows(showId).then((res: any) => {
      if (res?.results) {
        setRelatedContent(res.results.slice(0,4));
      }
    });
  }

  const goBack = () => {
    navigate('/');
  }

  return(
    <div className="detail-page-container">
      <div className="detail-page_backbtn-container">
        <button className="detail-page_backbtn" onClick={()=> goBack()}>
          {mediaDetail.first_air_date ? '< Shows list' : '< Movies list'}
        </button>
      </div>
      <div className="media-details-container">
        <img src={mediaPoster} />
        <div className="media-details-textelements">
          <div className="media-title">{mediaDetail.title ? mediaDetail.title : mediaDetail.name}</div>
          <div className="media-production-companies">{productionCompanies}</div>
          <div className="media-releasedate">
            {mediaDetail.first_air_date? 'First aired on' + mediaDetail.first_air_date : mediaDetail.release_date}
          </div>
          <p className="media-overview">{mediaDetail.overview}</p>
          <div className="related-content-container">
            <p>{relatedContent?.length ? 'You may also like:':''}</p>
            <div className="related-content-row">
            {
              relatedContent?.length ? 
                relatedContent.map((content, index) => <MediaItemComponent key={'movieitem-'+index} media={content} />)
                : null
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPage;