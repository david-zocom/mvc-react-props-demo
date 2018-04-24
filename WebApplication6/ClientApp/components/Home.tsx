import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Trivia } from './Trivia';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        let x: string;
        x = 'Is that an african or aeuropean swallow?';
        return <div>
            <h1>Hello, world!</h1>
            <Trivia question="What is the flight speed of a swallow?" />
            <Trivia question="When is the next break?" />
            <Trivia question={x} />
        </div>;
    }
}
