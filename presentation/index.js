// Import React
import React from "react";
// Import Spectacle Core tags
import {
    Appear,
    BlockQuote,
    CodePane,
    Cite,
    Deck,
    Heading,
    Layout,
    Fill,
    ListItem,
    List,
    Quote,
    Slide,
    Text,
    Markdown,
    Image,
} from "spectacle";
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("../assets/style/index.css");
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

import reactlogo from "../assets/image/react-logo.png";
const images = {
    reactLogo: require("../assets/image/reactlogo.png"),
    reactRedux: require("../assets/image/react-redux.png"),
    reduxvsMobx: require("../assets/image/mobxredux.png"),
    sizeCompare: require("../assets/image/sizeCompare.png"),
};

preloader(images);

const theme = createTheme({
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE",
    redux: "#7E50FC",
    hightLight: "#ffc000",
}, {
    primary: "Montserrat",
    secondary: "Helvetica",
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
                <Slide transition={["zoom"]} bgColor="primary">
                    {/*<Heading size={6} fit caps lineHeight={1} textColor="secondary">*/}
                    {/*<Appear><span style={{color: "#03A9FC"}}>React</span></Appear> <Appear>+ <span style={{color: "#7E50FC"}}>Redux</span></Appear><Appear> = Awesome</Appear>*/}
                    {/*</Heading>*/}
                    <Layout>
                        <Appear>
                            <Fill>
                                <Heading size={4} caps textColor="tertiary" margin={10}>
                                    React
                                </Heading>
                            </Fill>
                        </Appear>
                        <Appear>
                            <Fill>
                                <Heading size={4} caps textColor="secondary" margin={10}>
                                    +
                                </Heading>
                            </Fill>
                        </Appear>
                        <Appear>
                            <Fill>
                                <Heading size={4} caps textColor="redux" margin={10}>
                                    Redux
                                </Heading>
                            </Fill>
                        </Appear>
                        <Appear>
                            <Fill>
                                <Heading size={4} caps textColor="secondary" margin={10}>
                                    =
                                </Heading>
                            </Fill>
                        </Appear>
                        <Appear>
                            <Fill>
                                <Heading size={4} caps textColor="secondary" margin={10}>
                                    <span style={{color: "#4445fa"}}>Awesome</span>
                                </Heading>
                            </Fill>
                        </Appear>
                    </Layout>
                    <Appear>
                        <Text margin="10px 0 0" textColor="hightLight" size={1} fit bold>
                            Summary for Front-end Development of Harmony MDM Key Exchange Process
                        </Text>
                    </Appear>
                </Slide>
                <Slide transition={["zoom"]} bgColor="primary">
                    <img src={reactlogo} className="App-logo" alt="logo" />
                    <Heading size={2} textColor="secondary">
                        React
                    </Heading>
                    <Appear>
                        <Text textAlign="left" margin="10px 0 0" textColor="tertiary" size={3} bold>
                            React is a <span className="highlight">declarative</span>, <span className="highlight">component-based</span> library for building user interfaces. Combined with Redux, it is an MVVM framework for front-end developing.
                        </Text>
                    </Appear>
                </Slide>
                <Slide transition={["fade"]} bgColor="secondary">
                    <Heading size={2} fit textColor="primary">
                        Why do we choose
                    </Heading>
                    <img src={images.reactRedux.replace('/','')}/>
                    <List>
                        <Appear><ListItem textColor="primary">Documentation and community</ListItem></Appear>
                        <Appear><ListItem textColor="primary">Data-driven</ListItem></Appear>
                        <Appear><ListItem textColor="primary">Fast</ListItem></Appear>
                        <Appear><ListItem textColor="primary">Component-based</ListItem></Appear>
                        <Appear><ListItem textColor="primary">Lightweight but powerful</ListItem></Appear>
                    </List>
                </Slide>
                <Slide transition={["zoom"]} bgColor="primary">
                    <Heading size={2} fit textColor="secondary">
                        Size of popular front-end frameworks
                    </Heading>
                    <Image src={images.sizeCompare.replace("/", "")} margin="40px auto 40px" height="450px"/>
                </Slide>
                <Slide transition={["fade"]} bgColor="secondary">
                    <Heading size={2} fit textColor="primary">
                        Why do we choose
                    </Heading>
                    <img src={images.reactRedux.replace('/','')}/>
                    <List>
                        <ListItem textColor="primary">Documentation and community</ListItem>
                        <ListItem textColor="primary">Data-driven</ListItem>
                        <ListItem textColor="primary">Fast</ListItem>
                        <ListItem textColor="primary">Component-based</ListItem>
                        <ListItem textColor="primary">Lightweight but powerful</ListItem>
                        <Appear><ListItem textColor="primary">Playground for new technology</ListItem></Appear>
                    </List>
                </Slide>

                <Slide transition={["slide"]} bgColor="secondary">
                    <Heading size={2} fit textColor="primary">
                        Dealing with data
                    </Heading>
                    <List>
                        <Appear><ListItem textColor="primary">A predictable state container for JavaScript apps.</ListItem></Appear>
                        <Appear><ListItem textColor="primary">Before we start to use Redux</ListItem></Appear>
                        <Appear><List>
                            <ListItem style={{marginLeft: '10%'}} textColor="hightLight">Install Redux DevTools Chrome plugin</ListItem>
                        </List></Appear>
                        <Appear><List>
                            <ListItem style={{marginLeft: '10%'}} textColor="hightLight">Action, Reducer and State</ListItem>
                        </List></Appear>
                        <Appear><List>
                            <ListItem style={{marginLeft: '10%'}} textColor="hightLight">Keep the state flat</ListItem>
                        </List></Appear>
                        <Appear><List>
                            <ListItem style={{marginLeft: '10%'}} textColor="hightLight">Immutable states</ListItem>
                        </List></Appear>
                        <Appear><ListItem textColor="primary">Understand component lifecycle and use it with Redux</ListItem></Appear>
                        <Appear><ListItem textColor="primary">Stop using states in components except for input, textarea and select</ListItem></Appear>
                    </List>
                </Slide>
                <Slide transition={["zoom"]} bgColor="secondary">
                    <Heading size={2} textColor="primary">
                        Redux vs MobX
                    </Heading>
                    <Appear><Image src={images.reduxvsMobx.replace("/", "")} margin="0px auto 40px" height="293px"/></Appear>
                    <Appear>
                        <Text textAlign="center" margin="10px 0 0" textColor="primary" size={3} bold>
                            <a style={{color: "#ffc000"}} href="https://youtu.be/76FRrbY18Bs">MobX</a> (2017 React Conference)
                        </Text>
                    </Appear>
                </Slide>
                <Slide transition={["slide"]} bgColor="secondary">
                    <Heading size={2} fit textColor="primary">
                        Routing - react-router
                    </Heading>
                    <List>
                        <Appear><ListItem textColor="primary">For larger applications, routing is necessary</ListItem></Appear>
                        <Appear><List>
                            <ListItem style={{marginLeft: '10%'}} textColor="hightLight">Lazy loading</ListItem>
                        </List></Appear>
                        <Appear><ListItem textColor="primary">Keep routers synced with store</ListItem></Appear>
                    </List>
                </Slide>
                <Slide transition={["slide"]} bgColor="secondary">
                    <Heading size={2} fit textColor="primary">
                        Webpack2, Babel, ESLint and etc...
                    </Heading>
                    <List>
                        <Appear><ListItem textColor="primary">Component-level hot reload (see react-transform-boilerplate)</ListItem></Appear>
                        <Appear><ListItem textColor="primary">ES6/7 can be translated through Babel</ListItem></Appear>
                        <Appear><ListItem textColor="primary">Use eslint-plugin-react and Airbnb JavaScript standard</ListItem></Appear>
                        <Appear><ListItem textColor="primary">Great <a style={{color: '#ffc000'}} href="https://github.com/davezuko/react-redux-starter-kit">toolkit</a> for fast development of React application from nwb</ListItem></Appear>
                        <Appear><ListItem textColor="primary">An awesome <a style={{color: '#ffc000'}} href="https://github.com/davezuko/react-redux-starter-kit">starter kit</a> with everything you needed by davezuko</ListItem></Appear>
                    </List>
                </Slide>
                <Slide transition={["slide"]} bgColor="secondary">
                    <Heading size={5} textColor="primary">
                        File Structures
                    </Heading>
                    <Text textAlign="left" margin="10px 0 0" textColor="tertiary" size={3} bold>
                        <Layout>
                            <Fill>
                                <CodePane
                                    textColor="#fff"
                                    bgColor="#1F2022"
                                    lang="txt"
                                    source={require("../assets/code/file_structure_1.txt")}
                                    margin="auto"
                                />
                            </Fill>
                            <Fill>
                                <CodePane
                                    textColor="#fff"
                                    bgColor="#1F2022"
                                    lang="txt"
                                    source={require("../assets/code/file_structure_2.txt")}
                                    margin="auto"
                                />
                            </Fill>
                        </Layout>
                    </Text>
                </Slide>
                <Slide transition={["slide"]} bgColor="secondary">
                    <Heading size={2} fit textColor="primary">
                        Node.js is front-end developers' friend
                    </Heading>
                    <List>
                        <Appear><ListItem textColor="primary">Pain of developing front-end page without API ready for use</ListItem></Appear>
                        <Appear><List>
                            <ListItem style={{marginLeft: '10%'}} textColor="hightLight">Mock Server</ListItem>
                        </List></Appear>
                        <Appear><ListItem textColor="primary">Yarn from Facebook</ListItem></Appear>
                        <Appear><List>
                            <ListItem style={{marginLeft: '10%'}} textColor="hightLight">New package management tool</ListItem>
                        </List></Appear>
                    </List>
                </Slide>
                <Slide transition={["slide"]} bgColor="secondary">
                    <Heading size={2} fit textColor="primary">
                        Websocket is cool!
                    </Heading>
                    <List>
                        <Appear><ListItem textColor="primary">Instant notification and response between pages</ListItem></Appear>
                        <Appear><ListItem textColor="primary">Paho-mqtt, socket.io-client</ListItem></Appear>
                        <Appear><ListItem textColor="primary">Reconnection is easy with Websocket</ListItem></Appear>
                        <Appear><ListItem textColor="primary">Keep security in mind</ListItem></Appear>
                    </List>
                </Slide>
            </Deck>
        );
    }
}
