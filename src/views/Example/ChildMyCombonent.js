import React from "react";

class ChildMyCombonent extends React.Component{

    state = {
        showJobs: false
    }

    handleShowHide = ()=>{
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job)=>{
        console.log('handleOnClickDelete',job);
        this.props.deleteAJob(job);
    }

    render(){
        let {arrayJob} = this.props;
        let {showJobs} = this.state;

        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        console.log('Check conditional :' , check);

        return(
            <>
            {showJobs === false ? <div><button onClick={()=>this.handleShowHide()}>Show</button></div>
            :
            <>
                <div className="job-lists">
                    {
                        arrayJob.map((item,index)=>{
                            return(
                                <div key={item.id}>
                                   {item.title} - {item.salary} <></> <span onClick={()=>this.handleOnClickDelete(item)}>x</span>
                                </div>
                            )
                        })
                    }
                </div>
            <div><button onClick={()=>this.handleShowHide()} >Hide</button></div>
            </>
            }
            </>
        )
    }
}

// const ChildMyCombonent = (props)=>{
//             let {arrayJob} = props;
//         return(
//             <>
//                 <div className="job-lists">
//                     {
//                         arrayJob.map((item,index)=>{
//                             if(item.salary >= 500){
//                             return(
//                                 <div key={item.id}>
//                                    {item.title} - {item.salary} $
//                                 </div>
//                             )
//                         }
//                         })
//                     }
//                 </div>
//             </>
//         )
// }

export default ChildMyCombonent;