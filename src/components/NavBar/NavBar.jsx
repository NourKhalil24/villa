import './NavBar.css'
export default function NavBar({logo , navitems}) {
  return (
    <nav>
        <h1>{logo}</h1>
        <div className="items">
            <ul>
                {navitems.map((element , index)=>{return(
                    <li key={index}>{element}</li>
                )})}
                  <li><i className="fa fa-calender"> </i>
                  Schedule a visit
                    </li>
            </ul>
          
        </div>
    </nav> 
     )
}
