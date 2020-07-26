import React, {useState, useEffect } from 'react'
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import { Form, Field, Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import EpisodeGrid from '../Episode/EpisodeGrid'





function Episodes() {

    const [singleEpisode, setSingleEpisode] = useState("")
    const [episodeData, setEpisodeData] = useState([])
    const [isLoading, setIsLoading] = useState(true)



    const initialValues = {

        episode:''

    }



    const validationSchema = Yup.object({

        episode: Yup.string()

    }) 


    const onSubmit = async values => {

        await new Promise(r => setTimeout(r, 1000));
        // console.log(values)
        setSingleEpisode(values.episode)

    }


    const episodeURL = `https://rickandmortyapi.com/api/episode/?name=${singleEpisode}`

    useEffect(() => {

        const fetchItems = async () => {

       
          
            const items = await axios(episodeURL)


            setEpisodeData(items.data.results)

            // console.log(episodeData)
            // console.log(singleEpisode)

            setIsLoading(false)


        }

        fetchItems()

        
       
    }, [singleEpisode, episodeURL])



    
    return (
        <div>
            <Header/>

            <div className="container">
                <div className="center-align">
                    <Formik initialValues={initialValues} onSubmit={onSubmit} enableReinitialize onReset validationSchema={validationSchema}>
                        <Form>
                            <Field type="text" name="episode" id="episode" placeholder="Search For Your Favorite Episode & Press Enter ..........."/>
                        </Form>

                    </Formik>
                </div>
            </div>


            <div>
            
                <EpisodeGrid isLoading={isLoading} episodes={episodeData} />
            
            </div>


            <Footer/>


        </div>
    )
}

export default Episodes
