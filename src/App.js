import { projects } from "./data/data";
import "./styles/styles.css";
import Card from "./components/Card";
import { Grid, Spacer } from "./components/GenericStyled";

function App() {
    return (
        <Spacer style={{ paddingBottom: "2rem" }}>
            <h1>30 Projects in 30 Days</h1>
            <div>
                <span>Hi! </span>
                I'm Troy Marchesseault and I'm making
                <span> 30 projects in 30 days. </span>
                Follow the progress here!
            </div>
            <Spacer>
                <h2>Projects</h2>
                <Grid>
                    {projects.map((projectName, i) => (
                        <Card
                            key={projectName}
                            index={i + 1}
                            text={projectName}
                        />
                    ))}
                </Grid>
            </Spacer>
        </Spacer>
    );
}

export default App;
