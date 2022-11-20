import { StyudyTitle } from "../StudyTitle/StudyTitle";
import { Wrapper } from "./style";

export function JoinStudyBox(){
    const studyName="아키텍쳐 크리너스"
    return (
        <Wrapper>
            <StyudyTitle studyName={studyName}/>
        </Wrapper>
    )
}

