# React

React is a declarative, component-based library for building user interfaces. Combined with Redux, it is an MVVM framework for front-end developing. 

## Why do we choose React+Redux?

- Clear documentation and strong community support

  Official documentation of both React and Redux are clear and easy to understand. Very strong community, almost everything needed in developing is already there.

- Data-driven

  React maintains its `state` (data) of components and in order to bind DOM change with data change. 

- Fast

  Virtual DOM is lightweight, avoiding the browser-specific implementation details.

  `diff` algorithm to calculate the minimum change.

- Component-based

  New era of front-end development. 

  Goal of low cohesion and high coupling. 

  Reduce code length, easy to test and maintain. 

  JSX tags are convenient and efficient for development.

- Lightweight but powerful

  Webpack + React + Redux + react-router.

  Redux controls data flow and react-router is used for front-end routing, it can handle complicated logic and fulfill production needs. 

- Playground for new technology

  Thanks to Webpack, React applications are incredibly flexible to accept all new technologies. 

  ES7 syntax, CSS pre-processers (SASS, Less), etc. 

## Node.js/Yarn

- Pain of developing front-end page without API ready. 

  Node.js + Express `->` simple mock server (Life saver!)

  This helped me a lot to push the front-end development forward.

- Yarn by Facebook. 

  Same source as NPM but performs much better. 

  Automatically creates yarn.lock file (similar to npm-shrinkwrap) storing the specific versions of dependencies.

## Websocket

- Usage

  Communication between agent and client machines

  Instant notification and response between the two. 

  File transfers and remaining both sides' step synchronized 

  Paho-mqtt and AWS IoT. 

  Another option: socket.io-client works perfectly with Node.js backend socket.io 

- Reconnection

  With information in session and cookies, also used for reconnecting

## Ant Design

- Substantial UI library 

  UI libraries improve developing efficiency and quality. 

  Material Design + Bootstrap = Ant design 

  The documentation is detailed and easy to follow. 

- Before using Ant Design

  Great for desktop web apps, but there are still bugs in their css when screen resolution changes. Ant Design Mobile is available

  Some of its components have dependencies from other libraries

  Since the developer team of Ant Design is from Alibaba, some of the issues on GitHub are in Chinese.