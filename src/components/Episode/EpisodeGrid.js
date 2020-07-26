import React from 'react'
import EpisodeItem from '../Episode/EpisodeItem'
import Spinner from '../partials/Spinner'

function EpisodeGrid({isLoading, episodes}) {
    return isLoading ? (<Spinner/>) : (
        <div className="container">
            <div className="row"> 

            {
                episodes.map( episode => 

                    (<EpisodeItem key={episode.id} episode={episode}/>)
                )
            }

            </div>
        </div>
    )
}

export default EpisodeGrid
