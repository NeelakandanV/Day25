import BaseApp from "./Base";

export default function CardComp(){

    let TopCard = [{Name:'EARNINGS',Rate:'$40,000',class:'EarnCard'},{Name:'EARNINGS (ANNUAL)',Rate:'$215,000',class:'EarnAnnCard'},{Name:'TASKS',Rate:'Completion ratio : 50%',class:'TaskCard'},{Name:'PENDING REQUESTS',Rate:'18',class:'PendCard'}]

    return(
        <BaseApp title="Cards"
        searchDisplay="block"
        dropdownDisplay="block">
            <div className="CardMainComp">
                <div className="TopCard">
                    {TopCard.map((val,id)=>(
                    <div key={id} className={val.class}>
                        <p><b>{val.Name}</b></p>
                        <p><strong>{val.Rate}</strong></p>
                    </div>))}
                </div>
                <div className="DefaultCard">
                    <h4><strong>Default Card Example</strong></h4>
                    <p>This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example.</p>
                </div>

                <div className="DropdownCard">
                    <h4><strong>Dropdown Card Example</strong></h4>
                    <p>Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu.</p>
                </div>

                <div className="BasicCard">
                    <h4><strong>Basic Card Example</strong></h4>
                    <p>The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!</p>
                </div>

                <div className="CollapseCard">
                    <h4><strong>Collapse Card Example</strong></h4>
                    <p>This is a collapsable card example using Bootstrap's built in collapse functionality. Click on the card header to see the card body collapse and expand!</p>
                </div>
            </div>
        </BaseApp>
    );
}