import React, {useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { movieDbImagesUrl } from "../config/config-data";
import '../styles/DetailPage.scss';

const DetailPage = () => {
  const {state} = useLocation();
  const navigate = useNavigate();
  const {mediaDetail} = state;
  const [mediaPoster, setMediaPoster] = useState('');
  const [productionCompanies, setProductionCompanies] = useState('');

  useEffect(() => {
    if (mediaDetail.poster_path) {
      setMediaPoster(`${movieDbImagesUrl}${mediaDetail.poster_path}`)
    }
    if (mediaDetail.production_companies?.length) {
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
    console.log(mediaDetail);
  }, [mediaDetail]);

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
          <div className="media-releasedate">{mediaDetail.release_date}</div>
          <p>{mediaDetail.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailPage;