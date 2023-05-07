import React, { Component } from 'react'
import BookService from '../services/BookService'

class ViewBookComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            book: {}
        }
    }

    componentDidMount(){
        BookService.getBookById(this.state.id).then( res => {
            this.setState({book: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Book Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Book title: </label>
                            <div> { this.state.book.title }</div>
                        </div>
                        <div className = "row">
                            <label> Book description: </label>
                            <div> { this.state.book.description }</div>
                        </div>
                        <div className = "row">
                            <label> Book Price: </label>
                            <div> { this.state.book.price }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewBookComponent
