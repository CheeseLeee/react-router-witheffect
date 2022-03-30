import {routes} from './src/typed'
declare module 'react-router-witheffect' {
    export const RouterWithEffect:(props:routes) => JSX.Element
}