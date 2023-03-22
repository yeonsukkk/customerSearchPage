import { useState } from "react"

const dataFrame = { // 고객등록 틀
    "people": "",
    "id": "",
    "date": "",
    "title": "",
    "body": ""
}

const AddInfo = ({addClient, lastId, handleAddLastClient, modalState}) => {
    let warningName = false;
    let warningTitle = false;
    let warningDate = false;

    
    const [frame, setFrame] = useState(dataFrame); // 비어있는 객체 담기
    const sendForm = () => {
        // DOM
        let userName= document.querySelector('#userName');
        let userTitle = document.querySelector('#userTitle');
        let userDate = document.querySelector('#userDate');
        let userTxt = document.querySelector('#userTxt');

        

        // 비어있는 칸 체크
        if(userName.value === '' || userTitle.value ==='' || userDate.value ===''){
            console.log(warningName, warningTitle, warningDate)
            // userName
            userName.value === '' ? warningName = true : warningName = false
            // userTitle
            userTitle.value === '' ? warningTitle = true : warningTitle = false
            // userDate
            userDate.value === '' ? warningDate = true : warningDate = false

            return false;
        }

        

        const chagneDate = new Date(frame.date)
        // 합본 객체
        const addData = {
            people: frame.people,
            id: lastId+1,
            date: chagneDate.getTime(),
            title: frame.title,
            body: frame.body
        }
        // 데이터 보내기
        addClient(addData)
        handleAddLastClient(addData)
        modalState(true)

        //dataFrame reset
        setFrame(dataFrame);


        // form reset
        userName.value = userName.defaultValue;
        userTitle.value = userTitle.defaultValue;
        userDate.value = userDate.defaultValue;
        userTxt.value = userTxt.defaultValue;

        //warning 없애기
        //document.querySelector('.warning').style.display = 'none'
    }

    return(
        <>
            <form>
                <fieldset>
                    <legend>고객 등록</legend>
                    <ul>
                        <li>
                            <div>
                                <label htmlFor="userName">고객이름.</label>
                                <input
                                    type="text" id="userName" placeholder="고객이름" required
                                    onChange={e => setFrame({...frame, people: e.target.value})}
                                />
                            </div>
                            {warningName === true && <p className="warning warningName">&#42; 이름을 입력해주세요.</p>}
                        </li>
                        <li>
                            <div>
                                <label htmlFor="userTitle">제목.</label>
                                <input 
                                    type="text" id="userTitle" placeholder="제목" required
                                    onChange={e => setFrame({...frame, title: e.target.value})}
                            />
                            </div>
                            {warningTitle === true && <p className="warning warningTitle">&#42; 제목을 입력해주세요.</p>}
                        </li>
                        <li>
                            <div>
                                <label htmlFor="userDate">등록일.</label>
                                <input
                                    type="date" id="userDate" required
                                    onChange={e => setFrame({...frame, date: e.target.value})}
                            />
                            </div>
                            {warningDate === true && <p className="warning warningDate">&#42; 날짜를 입력해주세요.</p>}
                        </li>
                        <li>
                            <div>
                                <label htmlFor="userTxt">특이사항.</label>
                                <textarea 
                                    id="userTxt" placeholder="특이사항"
                                    onChange={e => setFrame({...frame, body: e.target.value})}
                                ></textarea>
                            </div>
                        </li>
                    </ul>
                    <p>
                        <button type="button" onClick={sendForm}>등록하기</button>
                    </p>
                </fieldset>
            </form>
        </>
    )
}

export default AddInfo;