

export default function Navbar(props) {
    const tabs = ["About", "Project", "Contact"]
    return (
        <>
        {tabs.map(tab =>
            
            <a href={"#"+ tab}
            onClick= {()=>props.setPage(tab)}
            >{tab} |{"      "}</a>)}
        </>
    )
}