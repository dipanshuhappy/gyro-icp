// import React from "react"
// import logo from "./assets/dfinity.svg"
// /*
//  * Connect2ic provides essential utilities for IC app development
//  */
// import { createClient } from "@connect2ic/core"
// import { defaultProviders } from "@connect2ic/core/providers"
// import { ConnectButton, ConnectDialog, Connect2ICProvider } from "@connect2ic/react"
// import "@connect2ic/core/style.css"
// /*
//  * Import canister definitions like this:
//  */
import * as gyro from "../.dfx/local/canisters/gyro"
// /*
//  * Some examples to get you started
//  */
// import { Counter } from "./components/Counter"
// import { Transfer } from "./components/Transfer"
// import { Profile } from "./components/Profile"

// function App() {
//   return (
//     <div className="App">
//       <div className="auth-section">
//         <ConnectButton />
//       </div>
//       <ConnectDialog />

//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p className="slogan">
//           React+TypeScript Template
//         </p>
//         <p className="twitter">by <a href="https://twitter.com/miamaruq">@miamaruq</a></p>
//       </header>

//       <p className="examples-title">
//         Examples
//       </p>
//       <div className="examples">
//         <Counter />
//         <Profile />
//         <Transfer />
//       </div>
//     </div>
//   )
// }

// const client = createClient({
//   canisters: {
//     counter,
//   },
//   providers: defaultProviders,
//   globalProviderConfig: {
//     dev: import.meta.env.DEV,
//   },
// })

// export default () => (
//   <Connect2ICProvider client={client}>
//     <App />
//   </Connect2ICProvider>
// )

import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter as Router } from "react-router-dom"
import Layout from "./lib/layout"
import Routings from "./lib/router/Routings"


// import { theme } from "lib/styles/theme";

import React from "react"
import { theme } from "./lib/styles/theme"
import { createClient } from "@connect2ic/core"
import { InternetIdentity, NFID } from "@connect2ic/core/providers"
import { Connect2ICProvider, ConnectDialog } from "@connect2ic/react"
import { ToastContainer } from "react-toastify"
const client = createClient({
  canisters: {
    gyro,
  },
  providers: [
    new NFID({
      appName: "Gyro"
    })
  ],
})
console.log(client.actors, "accotss")
console.log("client dfx network", import.meta.env.DFX_NETWORK)

const App = () => (
  <>
    <ChakraProvider theme={theme}>
      <Router>
        <Connect2ICProvider client={client} >
          <Layout>
            <Routings />

          </Layout>
        </Connect2ICProvider>
      </Router>
      <ToastContainer />
    </ChakraProvider>

  </>
)

export default App
