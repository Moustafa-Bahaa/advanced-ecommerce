import "../../styles/sort.css"
import { BiSort } from 'react-icons/bi'

const Sort = ({ sortByprice }) => {

    return (
        <div className='sort'>
            <div className='btn-container'>

            </div>
            <p>Products</p>
            <hr />
            <button onClick={sortByprice} className='sort-btn'  ><BiSort /></button>
        </div>
    );
};



export default Sort;
