import './Hero.css'
export default function Hero({imgbg ,location ,loc,hery,desc}) {
  return (
    <div className='hero'>
        <img src={imgbg} alt="" />
        <div className='hi'>
        <span>{location}
        <em>{loc}</em>
        </span>
        <h2>{hery}<br>
        </br>{desc}</h2>
        </div>
    </div>
  )
}
