import BaseApp from "./Base";


export default function WrongPageComp(){

    return(
        <BaseApp
        searchDisplay="Block"
        dropdownDisplay="Block">
            <div className="errMainPar">
                <div className="errCon">
                    <h1>404</h1>
                    <span><b>Page Not Found😓</b></span>
                </div>
                <div className="divertCon">
                    <label>It looks like you found a glitch in the matrix...</label>
                    <br></br>
                    <a href="/"><b>⬅️Back to Dashboard</b></a>
                </div>
            </div>

        </BaseApp>
    );
}