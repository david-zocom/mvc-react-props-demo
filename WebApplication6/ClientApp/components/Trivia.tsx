import * as React from 'react'; 

interface ITriviaProps {
    question: string;
    answer?: string;
}

export class Trivia extends React.Component<ITriviaProps, {}> {
    public render() {
        return <div>{this.props.question}</div>;
    }
}