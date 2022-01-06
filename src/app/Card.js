import React, { Component } from 'react';


class Card extends Component{
    constructor(){
        super();
        this.state = {
            title: '',
            description: '',
            tasks: [],
            _id: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    handleChange(e){
        const { id, value } = e.target;
        this.setState({
            [id]: value
        });
    }

    addTask(e){
        e.preventDefault();

        if(this.state._id){
            fetch(`/api/tasks/${this.state._id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' 
                }
            })
            .then(res => res.json())
            .then(data => {
                swal({
                    title: "Task Updated!",
                    icon: "success",
                });
                this.setState({title: '', description: '', _id: ''});
                this.getTasks();
            })
            .catch(err => console.error(err));
        } else{
            fetch('/api/tasks', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' 
                }
            })
                .then(res => res.json())
                .then(data => {
                    //console.log(data);
                    swal({
                        title: "Task Saved!",
                        icon: "success",
                    });
                    this.setState({title: '', description: ''});
                    this.getTasks();
                }) //message of server node
                .catch(err => console.error(err));
        }
    }

    componentDidMount(){ //this method is executed inmedetly start app
        this.getTasks();
    }

    deleteTask(id){
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                fetch(`/api/tasks/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json' 
                    }
                })
                .then(res => res.json())
                .then(data => {
                    //console.log(data);
                    swal({
                        title: "Task Deleted!",
                        icon: "success",
                      });
                    this.setState({title: '', description: '', _id: ''})
                    this.getTasks();
                });
            }
        });
    }

    updateTask(id){
        fetch(`/api/tasks/${id}`)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                this.setState({
                    title: data.title,
                    description: data.description,
                    _id: data._id
                })
            })
            .catch(err => console.error(err));
    }

    getTasks(){
        fetch('api/tasks')
            .then(res => res.json())
            .then(data => {
                //console.log(data);

                this.setState({
                    tasks: data
                });
            })
            .catch(err => console.error(err));
    }

    render() {
        return(
            <div className='container py-3'>
                <div className='row'>
                    <div className='col-4'>
                        <div className='card'>
                            <div className='card-header'>
                                <strong>New Card</strong>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={this.addTask}>
                                    <div className='row py-2'>
                                        <div className='input-field col-12'>
                                            <input type="text" id='title' onChange={this.handleChange} placeholder='Task Title' className='w-100' value={this.state.title} required/>
                                        </div>
                                    </div>

                                    <div className='row py-2'>
                                        <div className='input-field col-12'>
                                            <textarea id="description" onChange={this.handleChange} placeholder='Task Description' className='materialize-textarea' value={this.state.description} required></textarea>
                                        </div>
                                    </div>
                                    
                                    <div className='text-center'>
                                        <button type='submit' className='btn btn-light darken-4'>Send</button>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className='col-8'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.tasks.map(task => {
                                        return(
                                            <tr className='py-2' key={task._id}>
                                                <td className='py-3'>{task.title}</td>
                                                <td className='py-3'>{task.description}</td>
                                                <td className='text-end'>
                                                    <button onClick={() => this.deleteTask(task._id)} className="btn btn-light darken-4">
                                                        <i className="material-icons">delete</i> 
                                                    </button>   
                                                    <button onClick={() => this.updateTask(task._id)} className="btn btn-light darken-4" style={{margin: '4px'}}>
                                                        <i className="material-icons">edit</i>
                                                    </button>
                                                </td>  
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;