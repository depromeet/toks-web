import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';
import { ComponentProps, HTMLAttributes, ReactNode } from 'react';

type User = {
    image: string;
    id: string;
    userName: string;
    size?: string;
}

interface QuizItemProps {
    weekNumber: number;
    title: string;
    openDate: Date;
    creator: User;
    absentee: User[];
}

export function QuizItem({ weekNumber, title, openDate, creator, absentee } : QuizItemProps) {
  return (
    <li></li>
  );
}

// interface ListProps extends HTMLAttributes<HTMLUListElement> {
//   children: ReactNode;
// }

// // TODO: maxView 개수 받도록
// function List({ children, ...props }: ListProps) {
//   return <StyledList {...props}>{children}</StyledList>;
// }

// QuizItem.List = List;

// const StyledList = styled.ul`

// `;
