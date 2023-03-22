import { RiDeleteBin6Fill } from 'react-icons/ri';

const yoil = ['일', '월', '화', '수', '목', '금', '토']
function changeDate(get){ // milliseconds -> date change
    const d = new Date(get);
    const date = `${d.getFullYear()}년 ${d.getMonth()+1}월 ${d.getDate()}일 ${yoil[d.getDay()]}요일`;
    return date;
}
const Personal = ({item, handleClick}) => {

    return(
        <>
            <dl>
                <dt>고객이름 :</dt>
                <dd>{item.people}</dd> 
            </dl>
            <dl>
                <dt>등록일 :</dt>
                <dd>{changeDate(item.date)}</dd> 
            </dl>
            <dl>
                <dt>제목 :</dt>
                <dd>{item.title}</dd> 
            </dl>
            <dl>
                <dt>내용 :</dt>
                <dd>{item.body}</dd> 
            </dl>
            <button
                type="button" title="삭제하기"
                onClick={
                    e => handleClick(item.id)
                }
            ><RiDeleteBin6Fill /></button>
        </>
    )
}

const List = ({clients, handleClick}) => { 
    if(clients.length <= 0) {
        return(
            <p style={{fontSize: '20px', fontWeight: 'bold', textAlign: 'center'}}>고객 리스트가 없습니다.</p>
        )
    }
    return(
        <>
            <ul className="clientWrap">
                {
                    clients.map(item => {
                        return(
                            <li key={item.id}>
                                <Personal
                                    item={item}
                                    handleClick={getId => handleClick(getId)}
                                 />
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default List;