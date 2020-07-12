import React, {useCallback, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import './carousel.css'
import $ from 'jquery'; 
import Right from '../../assets/right.png'
import Left from '../../assets/left.png'

const carousel = props => {
    const history = useHistory();
    const dispatch = useDispatch()
    // the animation for the horizontal carousel
    const scroll = useCallback(
        (direction) => {
            let far = $( '.card_carousel' ).width()/0.99*direction;
            let pos = $('.card_carousel').scrollLeft() + far;
            $('.card_carousel').animate( { scrollLeft: pos }, 1000)
        },
        [], // Tells React to memoize regardless of arguments
    );
    // store the id of the movie to redux store on click in one movie
    const setMovieRequest = (id) => {
        const setMovie = () => (
            { type: "MOVIEID", obj: id }
        );
        dispatch(setMovie()); 
        localStorage.setItem('movieID', id);
        history.push('/movie')
    }
    let data = Array.from(props.images);
    // shuffle the images of the data array
    const shuffled = data.sort(() => 0.5 - Math.random());
    // get the first five elements of shuffled array
    let selected = shuffled.slice(0, 5);
    return (
        <>
            <div className="main_carousel">
                <a className="prev_carousel" onClick={()=>{scroll(-0.99)}}><img src={Left} alt="left arrow" width="30" height="50" /></a>
                <section className="card_carousel">
                {selected.map((item,i) => {
                        return (
                            <div className="card_carousel--content" key={i}>
                                <div className="title_carousel_div">
                                    <p className="title_carousel">{item.title}</p>
                                </div>
                                <img onClick={()=>{setMovieRequest(item.id)}} src={item.images.snapshot}  width="100%" height="400px" />
                            </div>
                        )
                    })} 
                </section>
                <a className="next_carousel" onClick={()=>{scroll(0.99)}}><img src={Right} alt="right arrow" width="30" height="50" /></a>
            </div>
        </>
    )
}

export default carousel;