class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisible = this.handleToggleVisible.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisible() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisible}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && <p>Here are some details that were hidden</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));