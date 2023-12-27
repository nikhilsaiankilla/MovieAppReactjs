import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from './../../components/lazyLoadImages/Img'
import PosterFallback from "../../assets/no-poster.png";
import CircleRating from "../circleRating/CircleRating";
import MovieLoadingSkeleton from "../MovieLoadingSkeleton/MovieLoadingSkeleton";
import Genres from "../genres/Genres";
import './Carousel.scss'

const Carousel = ({ data, loading, endpoint, title }) => {
    const carouselContainer = useRef();
    const navigate = useNavigate();

    const navigation = (direction) => {
        const container = carouselContainer.current;

        const scrollAmount = direction === 'left'
            ?
            container.scrollLeft - (container.offsetWidth + 20)
            :
            container.scrollLeft + (container.offsetWidth + 20)

        container.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        })
    }


    return (
        <div className="carousel">
            <ContentWrapper>
                {title && <div className="carouselTitle">
                    {title}
                </div>}
                <BsFillArrowLeftCircleFill
                    className="carouselLeftNav arrow"
                    onClick={() => navigation("left")}
                />
                <BsFillArrowRightCircleFill
                    className="carouselRighttNav arrow"
                    onClick={() => navigation("right")}
                />
                {!loading ?
                    <div className="carouselItems" ref={carouselContainer}>
                        {
                            data?.map((item) => {
                                const posterUrl = item.poster_path ? 'https://image.tmdb.org/t/p/original' + item.poster_path : PosterFallback
                                return (
                                    <div
                                        key={item.id}
                                        className="carouselItem"
                                        onClick={() => {
                                            navigate(`${item.media_type || endpoint}/${item.id}`);
                                        }}
                                    >
                                        <div className="posterBlock">
                                            <Img src={posterUrl} />
                                            <CircleRating rating={item.vote_average.toFixed(1)} />
                                            <Genres data={item.genre_ids.slice(0, 2)} />
                                        </div>
                                        <div className="textBlock">
                                            <span className="title">
                                                {
                                                    item.title || item.name
                                                }
                                            </span>
                                            <span className="date">
                                                {
                                                    dayjs(item.release_date).format("MMM D, YYYY")
                                                }
                                            </span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    :
                    <div className="loadingSkeleton">
                        <MovieLoadingSkeleton />
                        <MovieLoadingSkeleton />
                        <MovieLoadingSkeleton />
                        <MovieLoadingSkeleton />
                        <MovieLoadingSkeleton />
                    </div>}
            </ContentWrapper>
        </div>
    )
}

export default Carousel