import data from "../json/navItems.json"

// Defining the datatype for the json data
type NavItemData = {
    title: string;
    link: string;
};

function NavItem(){
    return (
        <ul className="nav-sec">
            {/* Mapping the json data and display the data */}
           {data.map((item: NavItemData) => (
          <div key={item.title}>
            <a href={item.link}><p>{item.title}</p></a>
          </div>
        ))} 
            
        </ul>
    )
}
export default NavItem;