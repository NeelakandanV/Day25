import BaseApp from "./Base";

export default function Dashboard(){
    
    let TopCard = [{Name:'EARNINGS',Rate:'$40,000',class:'EarnCard'},{Name:'EARNINGS (ANNUAL)',Rate:'$215,000',class:'EarnAnnCard'},{Name:'TASKS',Rate:'Completion ratio : 50%',class:'TaskCard'},{Name:'PENDING REQUESTS',Rate:'18',class:'PendCard'}]
    let colorCard = [{color:"Primary",hex:"#4e73df"},{color:"Success",hex:"#1cc88a"},{color:"Info",hex:"#36b9cc"},{color:"Warning",hex:"#f6c23e"},{color:"Danger",hex:"#e74a3b"},{color:"Secondary",hex:"#858796"},{color:"Light",hex:"#f8f9fc"},{color:"Dark",hex:"#5a5c69"}]

    return(
        <BaseApp title="Dashboard"
        searchDisplay="block"
        dropdownDisplay="block">
            <div className="DashPar">
                <div className="TopCard">
                    {TopCard.map((val,id)=>(
                    <div key={id} className={val.class}>
                        <p><b>{val.Name}</b></p>
                        <p><strong>{val.Rate}</strong></p>
                    </div>))}
                </div>
                
                <div className="colorCard">
                    {colorCard.map((val,id)=>(
                    <div key={id} className={val.color}>
                        <p><b>{val.color}</b></p>
                        <p>{val.hex}</p>
                    </div>))}
                </div>
                
                <div className="IlluCont">
                    <h5>Illustrations</h5>
                    <hr></hr>
                    <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" src="https://img.freepik.com/free-vector/students-using-e-learning-platform-video-laptop-graduation-cap-online-education-platform-e-learning-platform-online-teaching-concept_335657-795.jpg" alt="..."></img>
                    <p>Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
                    <a href='#'>Browse Illustrations on unDraw →</a>
                </div>

                <div className="DevelopCont">
                    <h5>DEVELOPMENT APPROACH</h5>
                    <hr></hr>
                    <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes</p>
                    <br></br>
                    <p>Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
                </div>
            </div>

        </BaseApp>
    )
}