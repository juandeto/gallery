import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import Thumbnail from './Thumbnail'
import Grid from '../Ul/Grid'
import '../../styles/gallery.scss'

const Gallery = () => {
    const dispatch = useDispatch()
    const { 
        page, 
        section_view, 
        sort, 
        window,
        show_viral,
        album_previews,
        show_mature
    } = useSelector(state => state)
    const [images, setImages] = React.useState([])

    React.useEffect(() =>{
        const getImages = async () => {
            console.log("CLIENT ID: ", process.env.REACT_APP_CLIENT_ID_IMGUR)
            const headers = {
                'Authorization': `Client-ID 6eb75e0bca63b94` ,
                'Accept': "application/json",
            }
            const url = `https://api.imgur.com/3/gallery/${section_view}/${sort}/${window}/${page}?showViral={${show_viral}}&mature=${show_mature}&album_previews=${album_previews}`

            // const service = axios.create({
            //     baseURL: url,
            //     delayed: true  // use this custom option to allow overrides
            //   });

            //   let req = service.interceptors.request.use( config => { 
            //     if (config.delayed) {
            //         return new Promise(resolve => setTimeout(() => resolve(config), 600));
            //       }
            //       return config;
            //     })
            // console.log('DATA IMGS: ', req)
            try {
                let data = await axios.get(url, headers)
                console.log('DATA IMGS: ', data)
                setImages()
            } catch (error) {
                console.log(error)
                return console.log(error)
            }
        }
        
        getImages()
    }, [])
   


    return(
        <Grid>
            {
                Array.from({length: 12}, (_,i) => i).map((i) => <Thumbnail key={i}/>)
            }
        </Grid>
        )
}

export default Gallery;