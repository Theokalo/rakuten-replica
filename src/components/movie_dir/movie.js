import React, {  useEffect, useReducer } from 'react'
import { useSelector } from 'react-redux'
import Axios from 'axios'
import './movie.css'
import StarIMDb from '../../assets/starImdb.png'
import Year from '../../assets/year.png'
import Time from '../../assets/time.png'
import Flag from '../../assets/flag.png'
import Original from '../../assets/original.png'
import Subtitles from '../../assets/subtitles.png'
import MovieClipart from '../../assets/movie-clipart.png'
import StarMoviedb from '../../assets/star_movie.png'
import Genres from '../../assets/genres.png'
import DirectorsAndActors from '../directorsAndActors_list_dir/directorsAndActors_list'

const movie = () => {
    const movieID = useSelector(state => state.movies_Red.MID)
    const [movieDetails, setMovieDetails] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
        image: '',
        title: '',
        description: '',
        scoreImdb: '',
        scoreTheMovieDb: '',
        originalTitle: '',
        year: '',
        duration: '',
        country: [],
        audio: [],
        subtitles: [],
        directors: [],
        actors: [],
        genres: []
        }
      );
    useEffect( () => { 
        // get data from the third party api
        let url = ''
        if(Object.keys(movieID).length === 0) {
            url = 'http://127.0.0.2:8080/https://gizmo.rakuten.tv/v3/movies/'+localStorage.movieID+'?classification_id=5&device_identifier=web&locale=es&market_code=es'
        } else {
            url = 'http://127.0.0.2:8080/https://gizmo.rakuten.tv/v3/movies/'+movieID+'?classification_id=5&device_identifier=web&locale=es&market_code=es'
        }
        const fetch = async () => {
            await Axios.get(url)
            .then(function (response) {
                // initialize local state
                const photo = JSON.stringify(response.data.data.images.snapshot);
                const title = JSON.stringify(response.data.data.title);
                const description = JSON.stringify(response.data.data.plot);
                const original_Title = JSON.stringify(response.data.data.original_title)
                const year = JSON.stringify(response.data.data.year)
                const duration = JSON.stringify(response.data.data.duration)
                const test = JSON.stringify(response.data.data)
                console.log(JSON.parse(test))
                JSON.stringify(response.data.data.genres.map(item=> {
                    movieDetails.genres.push({
                        icon:item.additional_images.icon,
                        name:item.name
                    })
                }))
                JSON.stringify(response.data.data.directors.map(item =>{
                    movieDetails.directors.push({
                        name:item.name,
                        image:item.photo
                    })
                }))
                JSON.stringify(response.data.data.actors.map(item =>{
                    movieDetails.actors.push({
                        name:item.name,
                        image:item.photo
                    })
                }))
                JSON.stringify(response.data.data.view_options.private.streams[0].subtitle_languages.map(item => {
                    movieDetails.subtitles.push(item.name)
                }))
                JSON.stringify(response.data.data.view_options.private.streams[0].audio_languages.map(item=> {
                    movieDetails.audio.push(item.name)
                }))
                JSON.stringify(response.data.data.countries.map(item => {
                     movieDetails.country.push(item.name)
                    }))
                JSON.stringify(response.data.data.scores.map(item => {
                    if(item.site.name === "IMDb") {
                        setMovieDetails({
                            scoreImdb: item.score
                        })
                    } else {
                        setMovieDetails({
                            scoreTheMovieDb: item.score
                        })
                    }
                }))
                setMovieDetails({
                    image: JSON.parse(photo),
                    title: JSON.parse(title),
                    description: JSON.parse(description),
                    originalTitle: JSON.parse(original_Title),
                    year: JSON.parse(year),
                    duration: JSON.parse(duration)
                })
            });
        }
        fetch();
    }, []);
    return (
        <>
        {console.log(movieDetails.genres)}
            <div className="container_movie">
                <img src={movieDetails.image} alt="" width="100%" height="600px"/>         
            </div>
            <div className="intro">                
                <h2 className="score_text"><img src={StarIMDb} alt='imdb' width="2.5%" height="2.5%" />{movieDetails.scoreImdb}</h2>
                <h1 className="text_title">{movieDetails.title}</h1>
            </div> 
            <div className="text_container">
                <div className="text_inner">
                    <div className="details">                        
                        <p className="box_text details_text"><img src={Time} width="18px" height="16px" alt="time"/>{" "+movieDetails.duration}</p>
                        <p className="box_text details_text"><img src={Year} width="18px" height="16px" alt="time"/>{" "+movieDetails.year}</p>
                        <p className="box_text details_text"><img src={Flag} width="18px" height="16px" alt="time"/>{" "+movieDetails.country.map(item => {return item})}</p>
                        <p className="box_text details_text"><img src={Original} width="18px" height="16px" alt="time"/>{" "+movieDetails.originalTitle}</p>
                    </div>
                    <div className="details">
                        <p className="box_text">{movieDetails.description}</p>
                    </div>
                    <p className="lang_title"><img src={Subtitles} width="20px" height="20px" alt="time"/> Languages ​​and subtitles</p>
                    <table>
                        <thead>
                            <tr>
                                <th align="left"><p className="lang_title_table">Audio</p></th>
                                <th align="left"><p className="lang_title_table">Subtitles</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            {movieDetails.audio.map((item,i)=>{
                                return (
                                    <tr key={i}>
                                        <td><p className="audio_subtitles" >{item}</p></td>
                                        <td className="audio_subtitles">
                                            {" "+movieDetails.subtitles.map((item,i) => {
                                                return item
                                            })}                                      
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>                    
                    <div className="DA_div">
                        <p className="DA_title"><img src={MovieClipart} width="16px" height="15px" alt="time"/> Directors and casting</p>
                        <DirectorsAndActors id="DA_id" directors={movieDetails.directors} actors={movieDetails.actors}/>
                    </div>
                    <div className="detail_content_block--float">
                        <p className="detail_content_block_title"><img src={StarMoviedb} width="20px" height="20px" alt="time"/> Note</p>
                        <div className="roundscore">
                            <div className="roundscore_circle_layer">
                                <div className="roundscore_content">
                                    <div className="roundscore_content_score">
                                        <p>{movieDetails.scoreTheMovieDb}</p>
                                    </div>
                                </div>                                 
                            </div>
                        </div>
                                              
                    </div>
                    <div className="detail_content_block--float">
                        <p className="detail_content_block_title"><img src={Genres} width="20px" height="20px" alt="time"/> Genres</p>
                        {movieDetails.genres.map((item,i)=> {
                            return(
                                <div className="genreicon" key={i}>
                                <img className="genreicon_round" src={item.icon} width="10%" alt="time"/>
                                <p className="genreicon_name">{item.name}</p>
                                </div>
                            ) 
                        })}                        
                    </div>
                </div>                
            </div>
        </>
    )
}

export default movie;