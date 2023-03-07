import SortOpt from './SortOpt';

import { HiChevronDoubleDown } from "react-icons/hi";
import { useState } from 'react';

const Search = ({sortBy, sortByChange, search, onChangeSearch}) => {
    const [sortFlag, setSortFlag] = useState(false); // 정렬하기 버튼 활성화
    return(
        <>
            <article>
                <h2 className="hide">검색하기</h2>
                <div className="searchArea">
                    <input
                        type="search" placeholder="검색하기"
                        value={search}
                        onChange={e => onChangeSearch(e.target.value)}
                    />
                    <div className="sortBox">
                        <h3 onClick={() => setSortFlag(!sortFlag)}>정렬하기 <HiChevronDoubleDown style={{paddingLeft: '5px'}} /></h3>
                        <SortOpt
                            sortBy={sortBy}
                            sortFlag={sortFlag}
                            getSort={sort => sortByChange(sort)}
                        />
                    </div>
                </div>
            </article>
        </>
    )
}

export default Search;