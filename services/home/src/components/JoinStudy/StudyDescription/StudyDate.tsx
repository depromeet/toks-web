import { DateText, DateWrapper, WhenText } from "./style"

type StudyDateProps={
    when: string,
    date:string
}
export function StudyDate({when, date}:StudyDateProps){
    return (
            <DateWrapper>
                <WhenText>{when}</WhenText>
                <DateText>{date}</DateText>
            </DateWrapper>
    )
}
