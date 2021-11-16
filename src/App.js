import { projects } from "./data/data";

function App() {
    return (
        <div className="App">
            <h1>30 Projects in 30 Days</h1>
            <span>Hi! </span>
            I'm Troy Marchesseault and I'm making
            <span> 30 projects in 30 days. </span>
            Follow the progress here!
            <ol>
                {projects.map((projectName) => (
                    <li>{projectName}</li>
                ))}
            </ol>
        </div>
    );
}

export default App;
