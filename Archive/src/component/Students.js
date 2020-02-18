import React from 'react';

import { withRouter } from 'react-router-dom';

import { connect } from "react-redux";
import { addStudent, editStudent, delStudent } from "../redux/actions";

class Students extends React.Component {
	constructor() {
		super();

		this.state = {
			selectId: -1,
			students: []
		}
	}

	addStudent(event) {
		event.preventDefault();
		let target = event.target;

		this.props.addStudent({
			name: target[0].value,
			age: parseInt(target[1].value),
			group: parseInt(target[2].value)
		});
	}

	selectId(index) {
		this.setState({...this.state, selectId: index});
	}

	editStudent(event, index) {
		event.preventDefault();
		let target = event.target;

		this.props.editStudent({
			index: index,
			student: {
				name: target[0].value,
				age: parseInt(target[1].value),
				group: parseInt(target[2].value)
			}
		});
		this.setState({...this.state, selectId: -1});
	}

	delStudent(index) {
		console.log(this);
		this.props.delStudent(index);
	}

	render() {
		const { students } = this.props;
		const { selectId } = this.state;

		return (
			<div>
				<form onSubmit={ event => this.addStudent(event) }>
					<label>
						Name : <input type="text" />
					</label>
					<label>
						Age : <input type="number" />
					</label>
					<label>
						Group : <input type="number" />
					</label>
					<button>Add</button>
				</form>
				<table className="style"><thead><tr><th>Nom</th><th>Age</th><th>Group</th><th>Action</th></tr></thead><tbody>
				{students.map((student , index) => {
					if (index === selectId) {
						return (
							<tr key={index}><td colSpan="4">
								<form onSubmit={ event => this.editStudent(event, index) }>
									<table><tbody><tr>
									<td><label>
										<input type="text" defaultValue={student.name} />
									</label></td>
									<td><label>
										<input type="number" defaultValue={student.age} />
									</label></td>
									<td><label>
										<input type="number" defaultValue={student.group} />
									</label></td>
									<td><button>Edit</button></td>
									</tr></tbody></table>
								</form>
							</td></tr>
						);
					}
					return (
						<tr key={index}>
							<td>{student.name}</td>
							<td>{student.age}</td>
							<td>{student.group}</td>
							<td>
								<button onClick={() => this.selectId(index)}>Edit</button>
								<button onClick={() => this.delStudent(index)}>Delete</button>
							</td>
						</tr>
					);
				})}
				</tbody></table>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		students: state.students
	};
}

const mapDispatchToProps = dispatch => {
	return {
		addStudent: student => {
			dispatch(addStudent(student))
		},
		editStudent: datas => {
			dispatch(editStudent(datas))
		},
		delStudent: index => {
			dispatch(delStudent(index))
		}
	};
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Students));






