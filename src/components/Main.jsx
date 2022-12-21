import {Routes, Route} from 'react-router-dom'
import People from '../pages/People'
import Show from '../pages/Show'
const Main = (props) => {
    return (
    <main>
        <Routes>
            <Route path="/" element={<People/>}/>
            <Route path="/people/:id" element={<Show />}/>
            {/* <Route path="/people/:id/edit" element={{<}} */}
        </Routes>
    </main>
    )
}


export default Main