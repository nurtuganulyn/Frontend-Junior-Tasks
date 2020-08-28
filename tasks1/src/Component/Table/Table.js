        import React from 'react'

        export default props => (
            <table className ="table">
                <thead>
                    <th onClick = {props.onSort.bind(null, 'id')}>ID</th>
                    <th onClick = {props.onSort.bind(null, 'firstName')}>FirstName</th>
                    <th onClick = {props.onSort.bind(null, 'lastName')}>LastName</th>
                    <th onClick = {props.onSort.bind(null, 'email')}>Email</th>
                    <th onClick = {props.onSort.bind(null, 'phone')}>Phone</th>
                </thead>
                <tbody>
                   {props.data.map(item =>(
                       <tr key = {item.id + item.phone}>
                           <td>{item.id}</td>
                           <td>{item.firstName}</td>
                           <td>{item.lastName}</td>
                           <td>{item.email}</td>
                           <td>{item.phone}</td>
                       </tr>

                   ))}
                </tbody>
            </table>
        )