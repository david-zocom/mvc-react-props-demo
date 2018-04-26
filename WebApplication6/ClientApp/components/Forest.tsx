import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface IForestProps {

}
interface IForestState {
    squirrel: boolean;
}

export class Forest extends React.Component<RouteComponentProps<IForestProps>, IForestState> {
    state = {squirrel: false}
    /*constructor(props) {
        super(props);
        this.state = {
            squirrel: false
        }
    }*/
    public render() {
        let info;
        if (this.state.squirrel)
            info = <span>A squirrel is here</span>;
        else
            info = <span>No squirrel in sight</span>;
        return <div>
            Welcome to the forest! <br />
            <button onClick={() => this.callSquirrel()}>Call the squirrel!</button>
            <br />
            {info}
        </div>;
    }

    callSquirrel() {
        this.setState({
            squirrel: true
        });
    }
}
