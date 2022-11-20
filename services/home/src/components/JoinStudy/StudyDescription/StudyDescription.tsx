import { DescriptionBox, DescriptionText, DescriptionWrapper } from "./style";

export function StudyDescription({descriptionText}:{descriptionText:string}){
    return (
        <DescriptionWrapper>
            <DescriptionBox/>
            <DescriptionText>{descriptionText}</DescriptionText>
        </DescriptionWrapper>
    )
}