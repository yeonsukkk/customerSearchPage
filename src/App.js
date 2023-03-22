import { useCallback, useEffect, useState } from 'react';

// component
import Search from './component/Search';
import AddInfo from './component/AddInfo';
import List from './component/List';
import Modal from './component/Modal';

// style
import './index.css';

const viewPort = document.getElementById('viewPort')
function winSize(e){
    if(e.innerWidth < 350) {
        viewPort.setAttribute('content', 'width=350')
    }else if(e.innerWidth > 351) {
        viewPort.setAttribute('content', 'width=device-width, initial-scale=1.0')
    }
}
// window사이즈 체크
window.addEventListener('load', function(e){
    winSize(this)
})
window.addEventListener('resize', function(e){
    winSize(this)
})

const yoil = ['일', '월', '화', '수', '목', '금', '토']

const App = () => {
    const [clients, setClients] = useState([]); // 고객정보
    const [sortBy, setSortBy] = useState('id'); // 정렬기준
    const [search, setSearch] = useState(''); // 검색한 문자열

    // 고객정보 데이터 가져오기
    const fetchData = useCallback(() => {
        fetch('./data.json')
        .then(response => response.json())
        .then(data => setClients(data))
    }, []);
    useEffect(fetchData, [fetchData]);

    // 데이터 정렬시키기
    const sortClients = clients.filter(item => {
        const d = new Date(item.date)
        const day = `${d.getFullYear()} ${d.getMonth()+1} ${d.getDate()} ${yoil[d.getDay()]}`
        return (
            item.people.toLowerCase().includes(search) || item.title.toLowerCase().includes(search) || item.body.toLowerCase().includes(search) || day.includes(search)
        )
    }).sort((a,b) => {
        return(
            (sortBy === 'id' || sortBy === 'date') ? a[sortBy] < b[sortBy] ? -1 : 1 : a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 : 1
        )
    })

    // Modal
    const [modalFlag, setModalFlag] = useState(false);

    // 추가된 데이터 가져오기
    const [addLastClient, setAddLastClient] = useState([]);

    // 데이터 등록 없을 시 경고창
    const [warningName, setWarningName] = useState(false); // 이름 기존값
    const [warningTitle, setWarningTitle] = useState(false); // 이름 기존값
    const [warningDate, setWarningDate] = useState(false); // 이름 기존값

    return(
        <div id="wrap">
            <h1>고객 등록 페이지</h1>
            <Search
                sortBy={sortBy}
                sortByChange={sort => setSortBy(sort)}

                search={search}
                onChangeSearch={mySearch => setSearch(mySearch)}
            />
            <div className="cntWrap">
                <div>
                    <AddInfo
                        addClient={myInfo => setClients([...clients, myInfo])}
                        lastId={
                            clients.reduce((max, item) => {
                                //console.log(Number(item.id) > Number(max) ? Number(item.id) : max);
                                return Number(item.id) > Number(max) ? Number(item.id) : max;
                            }, 0)
                        }
                        modalState={state => setModalFlag(state)}
                        handleAddLastClient={lastInfo => setAddLastClient(lastInfo)}
                        // warning
                        warningNameState={warningName}
                        setWarningNameState={state => setWarningName(state)}
                        warningTitleState={warningTitle}
                        setWarningTitleState={state => setWarningTitle(state)}
                        warningDateState={warningDate}
                        setWarningDateState={state => setWarningDate(state)}
                    />
                </div>
                <div>
                    <h3>고객 리스트</h3>
                    <List
                        clients={sortClients}
                        handleClick={getId => {
                            setClients(
                                sortClients.filter(item => item.id !== getId)
                            )
                        }} 
                    />
                </div>
            </div>
            <Modal
                modalState={modalFlag}
                closeModal={state => setModalFlag(state)}
                handleGetLastClient={addLastClient}
             />
        </div>
    )
}

export default App;