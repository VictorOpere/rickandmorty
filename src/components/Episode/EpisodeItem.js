import React from 'react'

function EpisodeItem({episode}) {
    return (
        <div>
        
      
                <div className="col s12 m6">
                    <div className="card green darken-2 hoverable">
                        <div className="card-content white-text">
                            <span className="card-title">{ episode.name }</span>
                            <p>Air Date: { episode.air_date }</p>
                            <p>Episode: { episode.episode }</p>
                        </div>
                        <div className="card-action">
                        
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default EpisodeItem
