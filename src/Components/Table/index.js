import React from "react";
import {ReactComponent as DeleteSvg} from "../../Assets/delete.svg";
import {ReactComponent as EditSvg} from "../../Assets/edit.svg";

const Table = ({posts,remove}) => {
    console.log(posts)
    return (
            <table className={'main-table'}>
                <thead>
                <tr><td>#</td>
                    <td>Programming</td>
                    <td>Stack</td>
                    <td className={'action'}>Action</td>
                    <td >Action</td>
                </tr>
                </thead>
                <tbody>
                {posts.map((item,index)=>(
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.stack}</td>
                        <td>
                            <button className={'edit-btn'}  >
                                <EditSvg/>
                            </button>
                        </td>
                        <td className={''}>
                            <button onClick={()=> remove(item)} >
                                <DeleteSvg/>
                            </button>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
    )
}
export default Table;