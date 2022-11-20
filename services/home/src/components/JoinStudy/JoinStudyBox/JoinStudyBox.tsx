import { JoinInput } from "../JoinInput/JoinInput";
import { DetailDescription } from "../StudyDescription/DetailDescription";
import { StudyDate } from "../StudyDescription/StudyDate";
import { StudyDescription } from "../StudyDescription/StudyDescription";
import {StudyStack} from "../StudyStack/StudyStack";
import { StyudyTitle } from "../StudyTitle/StudyTitle";
import { DateWrapper, DescriptionContainer, JoinMessage, Wrapper } from "./style";

export function JoinStudyBox(){
    const ourStudy='우리 스터디는'
    const studyLength='스터디 기간은'
    const studyPersonnel='스터디 인원은'
    const toksStudy='나는 똑스 스터디에서'
    const ourStudyDescription='아티텍쳐 크리너스로 소프트웨어 구조와 설계의 원칙 제대로 이해하기 '
    const personnelDescription='5-7명을 계획하고 있어요.'
    const start='시작일'
    const startDate='2022. 10. 13'
    const done='종료일'
    const doneDate='2022. 12. 03'
    return (
        <Wrapper>
            <StyudyTitle/>
            <StudyStack/>
            <DescriptionContainer>
            <StudyDescription descriptionText={ourStudy}/>
            <DetailDescription detailDescription={ourStudyDescription}/>
            <StudyDescription descriptionText={studyLength}/>
            <DateWrapper>
            <StudyDate when={start} date={startDate}/>
            <StudyDate when={done} date={doneDate}/>
            </DateWrapper>
            <StudyDescription descriptionText={studyPersonnel}/>
            <DetailDescription detailDescription={personnelDescription}/>
            <StudyDescription descriptionText={toksStudy}/>
            <JoinInput/>
            <JoinMessage>똑스와 8주간 함께해볼까요?</JoinMessage>
            </DescriptionContainer>            
        </Wrapper>
    )
}
