import React from "react";
import ChildMyCombonent from "./ChildMyCombonent";
import AddComponent from "./AddCombonent";

class MyCombonent extends React.Component {

    state = {
        arrayJob: [
            { id: 'job1', title: 'DEV', salary: '500' },
            { id: 'job2', title: 'TEST', salary: '400' },
            { id: 'job3', title: 'Manager', salary: '1000' }
        ]
    }

    handleRootFunction = (job) => {
        this.setState({
            arrayJob: [...this.state.arrayJob, job]
        })
    }

    addNewJob = (job) => {


        // let currenJobs = this.state.arrayJob;
        // currenJobs.push(job);

        this.setState({

            arrayJob: [...this.state.arrayJob, job]

            // arrayJob: currenJobs
        })

        console.log('Check data job 1', job);
        console.log('Check data job 2', ...this.state.arrayJob);
    }

    deleteAJob = (job) => {
        //let currenJobs  = this.state.arrayJob;
        let { currenJobs } = this.state;
        currenJobs = currenJobs.filter(item => item.id !== job.id);
        this.setState({
            arrayJob: currenJobs
        })

    }
    render() {
        console.log('>>> check call', this.state);
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                    handleRootFunction={this.handleRootFunction}
                />
                <ChildMyCombonent
                    arrayJob={this.state.arrayJob}
                    deleteAJob={this.deleteAJob}
                />
            </>
        )
    }
}

export default MyCombonent;