const yoil = ['일','월','화','수','목','금','토']

const Modal = ({modalState, closeModal, handleGetLastClient}) => {
    if(!modalState){
        return null;
    }
    function changeDate(getDate){
        const d = new Date(getDate)
        return `${d.getFullYear()}년 ${d.getMonth()+1}월 ${d.getDate()}일 ${yoil[d.getDay()]}요일`
    }
    return(
        <div id="modalWrap">
            <section className="cnt">
                <h3>등록이 완료되었습니다.</h3>
                <div>
                    <dl>
                        <dt>고객이름 :</dt>
                        <dd>{handleGetLastClient.people}</dd>
                    </dl>
                    <dl>
                        <dt>등록일 :</dt>
                        <dd>{changeDate(handleGetLastClient.date)}</dd>
                    </dl>
                    <dl>
                        <dt>제목 :</dt>
                        <dd>{handleGetLastClient.title}</dd>
                    </dl>
                    <dl>
                        <dt>내용 :</dt>
                        <dd>{handleGetLastClient.body}</dd>
                    </dl>
                </div>
                <p className="btnClose">
                    <button type="button" onClick={(e) => closeModal(false)}>닫기</button>
                </p>
            </section>
        </div >
    )
}
export default Modal;