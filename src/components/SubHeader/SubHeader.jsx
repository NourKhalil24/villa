import './SubHeader.css'

export default function SubHeader() {
  return (
    <div className='nk-sub-header'>
        <div className='firstDiv'>
            <ul className="info">
            <li><i className="fa fa-envelope"></i> 
                info@company.com
             </li>
             <li><i className="fa fa-map"></i> 
             Sunny Isles Beach, FL 33160
             </li>
            </ul>
        </div>
        <div className='SecondDiv'><ul className="social-links">
            <li><i className="fab fa-facebook"></i></li>
            <li><i className="fab fa-twitter"></i></li>
            <li><i className="fab fa-linkedin"></i></li>
            <li><i className="fab fa-instagram"></i></li>
            </ul></div>
    </div>
  )
}
