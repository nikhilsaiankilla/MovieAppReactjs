import { useParams } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";

import './Explore.scss'
import MovieCard from "../../components/movieCard/MovieCard";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import { useEffect, useState } from "react";
import axios from "axios";

const Explore = () => {
  const { mediaType } = useParams();
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [pageNum, setPageNum] = useState(1);
  const fetchIntialData = () => {
    setLoading(true)
    axios.get(`https://api.themoviedb.org/3/discover/${mediaType}?include_adult=true&page=${pageNum}&sort_by=popularity.desc`, {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODUyNzU4OWYxMjViNmM2NTNhM2FkMTczZGVhNTk2ZCIsInN1YiI6IjY0NDk1MWY3NmEyMjI3MDRmOGQxOTBlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d6vKuR85bAQsfAWzfTynm_TerPbUqxidmlH5fRVIxpY",
      }
    }).then((res) => {
      setData(res.data);
      setPageNum(prev => prev + 1);
      setLoading(false)
    })
  }

  const fetchNextPage = () => {
    setLoading(true)
    axios.get(`https://api.themoviedb.org/3/discover/${mediaType}?include_adult=true&page=${pageNum}&sort_by=popularity.desc`, {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODUyNzU4OWYxMjViNmM2NTNhM2FkMTczZGVhNTk2ZCIsInN1YiI6IjY0NDk1MWY3NmEyMjI3MDRmOGQxOTBlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d6vKuR85bAQsfAWzfTynm_TerPbUqxidmlH5fRVIxpY",
      }
    }).then((res) => {
      if (data?.results) {
        setData({
          ...data,
          results: [...data?.results, ...res.data.results],
        });
      }else{
        setData(res);
      }
      setPageNum((prev) => prev + 1);
    })
  }

  useEffect(() => {
    setPageNum(1)
    fetchIntialData();
  }, [mediaType])

  return (
    <div className="explorePage">
      <ContentWrapper>
        <h1>Explore the {mediaType === 'movie' ? "Movies" : "Tv Shows"}</h1>
        <div className="exploreItems">
          {loading && <Spinner initial={true} />}
          {
            data?.results?.map((item, index) => {
              return (
                <MovieCard
                  key={index}
                  data={item}
                  mediaType={mediaType}
                  fromSearch={true}
                />
              )
            })
          }
        </div>
        {data?.total_pages > 1 ? <button className="loadMoreBtn" onClick={fetchNextPage}>Load more</button> : ""}
      </ContentWrapper>
    </div>
  )
}

export default Explore