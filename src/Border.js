import BaseApp from "./Base";

export default function BorderComp(){

    return(
        <BaseApp title="Border Utilities"
        searchDisplay="block"
        dropdownDisplay="block">
            <div className="BorderMainPar">
                <p>Bootstrap's default utility classes can be found on the official Bootstrap Documentation page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>
                <div className="SideBorder">
                    <p style={{borderLeft:'10px solid dodgerblue'}}>.border-left-primary</p>
                    <p style={{borderLeft:'10px solid darkgray'}}>.border-left-secondary</p>
                    <p style={{borderLeft:'10px solid lightgreen'}}>.border-left-success</p>
                    <p style={{borderLeft:'10px solid skyblue'}}>.border-left-info</p>
                    <p style={{borderLeft:'10px solid yellow'}}>.border-left-warning</p>
                    <p style={{borderLeft:'10px solid crimson'}}>.border-left-danger</p>
                    <p style={{borderLeft:'10px solid black'}}>.border-left-dark</p>
                </div>

                <div className="BottomBorder">
                    <p style={{borderBottom:'12px solid dodgerblue'}}>.border-bottom-primary</p>
                    <p style={{borderBottom:'12px solid darkgray'}}>.border-bottom-secondary</p>
                    <p style={{borderBottom:'12px solid lightgreen'}}>.border-bottom-success</p>
                    <p style={{borderBottom:'12px solid skyblue'}}>.border-bottom-info</p>
                    <p style={{borderBottom:'12px solid yellow'}}>.border-bottom-warning</p>
                    <p style={{borderBottom:'12px solid crimson'}}>.border-bottom-danger</p>
                    <p style={{borderBottom:'12px solid black'}}>.border-bottom-dark</p>
                </div>
            </div>
        </BaseApp>
    );
}