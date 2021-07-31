import React, {useState, useEffect} from 'react';
import './DetailCard.css';
import {Carousel} from '3d-react-carousal';

const DetailCard = ({title, advDesc, allImg, gifs, repo, deployed}) => {
  const [imageDisplay, setImageDisplay] = useState([])
  const [gifDisplay, setGifDisplay] = useState([])

  useEffect(() => {
    if (allImg !== undefined) {
      setImageDisplay(allImg)
    } else {
      setImageDisplay([])
    }
  }, [allImg])

  useEffect(() => {
    if (gifs !== undefined) {
      setGifDisplay(gifs)
    } else {
      setGifDisplay([])
    }
  }, [gifs])

  const displayImg = imageDisplay.map((img, i) => {
    return (
      <img src={img} alt={`${title} image ${i}`} className='DetailImage'/>
    )
  })

  const displayGif = gifDisplay.map((gif, i) => {
    return (
      <img src={gif} alt={`${title} gif ${i}`} className='Detail Gif'/>
    )
  })

  return (
    <article className='detailLayout'>
      <h1 className='detailTitle'>{title}</h1>
      <p className='detailedDesc'>{advDesc}</p>
      <Carousel slides={displayImg} />
      <Carousel slides={displayGif} />
      <a href={repo} className='linkRepo' target='_blank'>Repo</a>
      <a href={deployed} className='linkDeployed' target='_blank'>Site</a>
    </article >
  )
}

export default DetailCard;
