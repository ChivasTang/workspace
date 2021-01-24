import React, {Fragment} from "react";

class TodoItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete() {
        const {index, handleDelete} = this.props;
        handleDelete(index);
    }

    render() {
        const {content} = this.props;
        return (
            <Fragment>
                <li onClick={this.handleDelete}>{content}</li>
            </Fragment>
        );
    }
}

export default TodoItem;
