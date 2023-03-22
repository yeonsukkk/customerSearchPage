import { FiCheck } from "react-icons/fi";

const SortOpt = ({sortBy, sortFlag, getSort}) => {
    if(!sortFlag){
        return null;
    }
    return(
        <>
            <ul>
                <li onClick={e => getSort('people')}>이름순 {sortBy === 'people' &&<FiCheck />}</li>
                <li onClick={e => getSort('date')}>날짜순 {sortBy === 'date' && <FiCheck />}</li>
                <li onClick={e => getSort('title')}>제목순 {sortBy === 'title' &&<FiCheck />}</li>
            </ul>
        </>
    )
}

export default SortOpt;