import BaseApp from "./Base";


export default function ColorComp(){

    return(
        <BaseApp title="Color Utilities"
        searchDisplay="block"
        dropdownDisplay="block">
            <div className="ColorMainPar">
                <p>Bootstrap's default utility classes can be found on the official Bootstrap Documentation page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>

                <div className="CustomText">
                    <h4>Custom Text Color Utilities</h4>
                    <div className="Darkgr">
                        <p style={{filter:"grayscale(20%)"}}>.text-gray-100</p>
                        <p style={{filter:"grayscale(30%)"}}>.text-gray-200</p>
                        <p style={{filter:"grayscale(40%)"}}>.text-gray-300</p>
                        <p style={{filter:"grayscale(50%)"}}>.text-gray-400</p>
                    </div>
                    <div className="Lightgr">
                        <p style={{filter:"grayscale(60%)"}}>.text-gray-500</p>
                        <p style={{filter:"grayscale(70%)"}}>.text-gray-600</p>
                        <p style={{filter:"grayscale(80%)"}}>.text-gray-700</p>
                        <p style={{filter:"grayscale(90%)"}}>.text-gray-800</p>
                        <p style={{filter:"grayscale(100%)"}}>.text-gray-900</p>
                    </div>
                </div>

                <div className="CustomBackground">
                    <h4>Custom Background Color Utilities</h4>
                    <p style ={{backgroundColor:"dodgerblue"}}>.bg-gradient-primary</p>
                    <p style ={{backgroundColor:"darkgray"}}>.bg-gradient-secondary</p>
                    <p style ={{backgroundColor:"lightgreen"}}>.bg-gradient-success</p>
                    <p style ={{backgroundColor:"skyblue"}}>.bg-gradient-info</p>
                    <p style ={{backgroundColor:"yellow"}}>.bg-gradient-warning</p>
                    <p style ={{backgroundColor:"crimson"}}>.bg-gradient-danger</p>
                    <p style ={{backgroundColor:"whitesmoke"}}>.bg-gradient-light</p>
                    <p style ={{backgroundColor:"black",color:"whitesmoke"}}>.bg-gradient-dark</p>
                </div>

                <div className="CustomGrayScale">
                    <h4>Custom Grayscale Background Utilities</h4>
                    <p style={{filter:"grayscale(20%)",backgroundColor:"rgb(184, 184, 184)"}}>.bg-gray-100</p>
                    <p style={{filter:"grayscale(30%)",backgroundColor:"rgb(172, 172, 172)"}}>.bg-gray-200</p>
                    <p style={{filter:"grayscale(40%)",backgroundColor:"rgb(163, 161, 161)"}}>.bg-gray-300</p>
                    <p style={{filter:"grayscale(50%)",backgroundColor:"rgb(155, 153, 153)"}}>.bg-gray-400</p>
                    <p style={{filter:"grayscale(60%)",backgroundColor:"rgb(141, 138, 138)"}}>.bg-gray-500</p>
                    <p style={{filter:"grayscale(70%)",backgroundColor:"rgb(118, 116, 116)"}}>.bg-gray-600</p>
                    <p style={{filter:"grayscale(80%)",backgroundColor:"rgb(110, 108, 108)"}}>.bg-gray-700</p>
                    <p style={{filter:"grayscale(90%)",backgroundColor:"rgb(95, 93, 93)"}}>.bg-gray-800</p>
                    <p style={{filter:"grayscale(100%)",backgroundColor:"rgb(67, 65, 65)"}}>.bg-gray-900</p>
                </div>

                <div className="CustomFont">
                    <h4>Custom Font Size Utilities</h4>
                    <p style={{fontSize:"small"}}>.text-s</p>
                    <p style={{fontSize:"x-large"}}>.text-lg</p>
                </div>
            </div>
        </BaseApp>
    );
}