import { POPULARATTHEBOXOFFICE, PREMIERESFORTHEWHOLEFAMILY, PREMIERESMUSTHAVEATTHEBOXOFFICE, SPANISHPREMIERES, IFYOUMISSED, OURFAVORITESOFTHEWEEK, MOVIEID } from './action-types/rakuten-actions'

// popular at the box office action
export const popularAtTheBoxOffice = (obj) => {
  return {
    type: POPULARATTHEBOXOFFICE,
    obj
  }
}

// premieres for the whole family action
export const premiersForTheWholeFamily = (obj) => {
  return {
    type: PREMIERESFORTHEWHOLEFAMILY,
    obj
  }
}

// premieres must have at the box office action
export const premieresMustHaveAtTheBoxOffice = (obj) => {
  return {
    type: PREMIERESMUSTHAVEATTHEBOXOFFICE,
    obj
  }
}

// spanish premieres action
export const spanishPremieres = (obj) => {
  return {
    type: SPANISHPREMIERES,
    obj
  }
}

// if you missed action
export const ifYouMissed = (obj) => {
  return {
    type: IFYOUMISSED,
    obj
  }
}

// our favorites of the week action
export const ourFavoritesOfTheWeek = (obj) => {
  return {
    type: OURFAVORITESOFTHEWEEK,
    obj
  }
}

// movie id action
export const ourFavoritesOfTheWeek = (obj) => {
  return {
    type: MOVIEID,
    obj
  }
}