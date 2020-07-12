import React, { useState, useCallback } from 'react'
import './directorsAndActors_list.css'
import $ from 'jquery'; 
import Right from '../../assets/right.png'
import Left from '../../assets/left.png'

const directorsAndActors_list =  props => {
    const [posValue, setPosValue] = useState(0)
    let directors = Array.from(props.directors);
    let actors = Array.from(props.actors);
    let data = directors.concat(actors);
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
    return (
        <>
            <div className="main_DA">
                <a className={posValue > 0?"prev_DA":"prev_hidden_DA"} onClick={()=>{scroll(-1,props.id)}}><img src={Left} alt="left arrow" width="20" height="35" /></a>
                <section className="card_DA" id={props.id}>
                    {data.map((item,i) => {
                        return (
                            <div className="card_DA--content" key={i}>
                                <img src={item.image}  width="80" height="120"/>
                                <p className="card_title_DA">{item.name}</p>
                            </div>                                
                        )
                    })}                    
                </section>
                <a className="next_DA" onClick={()=>{scroll(1,props.id)}}><img src={Right} alt="right arrow" width="20" height="35" /></a>
            </div>
        </>
    )
}

export default directorsAndActors_list;