import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface IForestProps {

}
interface IForestState {
    squirrel: boolean;
    isHidden: boolean;
}

export class Forest extends React.Component<RouteComponentProps<IForestProps>, IForestState> {
    state = {squirrel: false, isHidden: false}
    /*constructor(props) {
        super(props);
        this.state = {
            squirrel: false
        }
    }*/
    public render() {
        let info, squirrelStatus;
        if (this.state.squirrel)
            info = <span>A squirrel is here</span>;
        else
            info = <span>No squirrel in sight</span>;
        if (this.state.isHidden)
            squirrelStatus = <div>Squirrel has hidden</div>;
        else
            squirrelStatus = <div>Squirrel is not hidden</div>;

        let stuff = ['blueberries', 'stones', 'grass']
            .map((x, index) => <ForestStuff key={x+index}>{x}</ForestStuff>);
        return <div>
            Welcome to the forest! <br />
            <button onClick={() => this.callSquirrel()}>Call the squirrel!</button>
            <br />
            {info}
            <br />
            <br />
            <ul>{stuff}</ul>
            <Squirrel squirrelHide={() => this.squirrelHide()} />
            {squirrelStatus}
        </div>;
    }
    squirrelHide() {
        this.setState({ isHidden: true });
    }

    callSquirrel() {
        this.setState({
            squirrel: true
        });
    }
}
interface ISquirrelProps {
    squirrelHide: any;
}
class Squirrel extends React.Component<ISquirrelProps, {}> {
    render() {
        return <button onClick={() => this.clickedHideButton()}>Hide</button>;
    }
    clickedHideButton() {
        // informera Forest-komponenten om vad som hänt
        this.props.squirrelHide();
    }
}

interface IForestStuffProps {
    //stuff: string;
    children?: any;
}
function ForestStuff(props : IForestStuffProps) {
    //return <li>{props}</li>;
    //let x = { value: 5 };
    return <li>{props.children}</li>;
}
