import React, { useState, useCallback} from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import './scroll_list.css'
import $ from 'jquery'; 
import Right from '../../assets/right.png'
import Left from '../../assets/left.png'

const scroll_list =  props => {
    const history = useHistory();
    const [posValue, setPosValue] = useState(0)
    let data = Array.from(props.images);
    const dispatch = useDispatch()
    // the animation for the horizontal lists
    const scroll = useCallback(
        (direction,id) => {
            let far = $("section[id*="+id+"]").width()/2*direction;
            let pos = $("section[id*="+id+"]").scrollLeft() + far;
            $("section[id*="+id+"]").animate( { scrollLeft: pos }, 1000)
            setPosValue(pos)
        },
        [], // Tells React to memoize regardless of arguments.
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
    // Check bounding in order to display movie details on mouse over
    const checkBounding = () => {
        $('.tooltip').on('mouseenter', function() {
            var $this = $(this);
            var tooltip = $(this).find('.right');
            var offset = $this.offset();
            if (offset.left - tooltip.width() > 0) {
                $('.right').addClass('left').removeClass('right');
            } else {
                $('.left').addClass('right').removeClass('left');
            }
          });
    }
    return (
        <>
            <div className="main">
                <a className={posValue > 0?"prev":"prev_hidden"} onClick={()=>{scroll(-1,props.id)}}><img src={Left} alt="left arrow" width="30" height="50" /></a>
                <section className="card" id={props.id}>
                    {data.map((item,i) => {
                        return (
                            <div className="tooltip" key={i}>
                                <img onMouseOver={()=>{checkBounding()}} onClick={()=>{setMovieRequest(item.id)}} src={item.images.artwork} className="card--content" width="180" height="250" />
                                <div className="right">
                                    <img src={item.images.snapshot} width="120" height="100"/>
                                    <div className="text-content">
                                        <h3>{item.title}</h3>
                                        <ul>
                                            <li>Duration: {item.duration} min</li>
                                            <li>Year: {item.year}</li>
                                            <li>Price: {item.label}</li>
                                        </ul>
                                    </div>
                                    <i></i>
                                </div>
                            </div>
                        )
                    })}                    
                </section>
                <a className="next" onClick={()=>{scroll(1,props.id)}}><img src={Right} alt="right arrow" width="30" height="50" /></a>
            </div>
        </>
    )
}

export default scroll_list;