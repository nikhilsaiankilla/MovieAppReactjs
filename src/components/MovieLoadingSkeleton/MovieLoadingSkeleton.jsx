import './MovieLoadingSkeleton.scss'

const MovieLoadingSkeleton = () => {
    return (
        <div className="skeletonItem">
            <div className="posterBlock">
            </div>
            <div className="textBlock">
                <div className="title"></div>
                <div className="date"></div>
            </div>
        </div>
    )
}

export default MovieLoadingSkeleton