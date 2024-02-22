/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
function Table({data, deletItem, gettingFilteredCategory}) {

    const categorys = ["Utilities","Bazar","Rent","Tour"];

  return (
    <>
        <div className="max-w-[77%] mx-auto border border-gray-600 mt-8 mb-12 pl-[95px] py-8 rounded-lg">
        {/* if i want to take value of option then i have to set onchange not onclick in select tag not in option tag and i have to pass event to collect the value */}
            <select className="select select-bordered w-full max-w-xs mt-3 mb-10 focus:outline-none" onChange={(e) => gettingFilteredCategory(e.target.value)}>
                <option selected value={""}>All</option>
                {
                    categorys.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ) )
                }
                
            </select>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th className="text-[22px]">Category</th>
                        <th className="text-[22px]">Description</th>
                        <th className="text-[22px]">Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                    {
                        data.map(expense => (

                            <tr className="hover" key={expense.id}>
                                <td className="text-[18px]">{expense.category}</td>
                                <td className="text-[18px]">{expense.description}</td>
                                <td className="text-[18px]">${expense.amount}</td>
                                <td className="text-[18px]"><button className="btn btn-primary" onClick={() => {
                                    deletItem(expense.id);
                                }}>Delete</button></td>
                            </tr>

                        ))
                    }

                    </tbody>
                    <tfoot>
                    <td>

                    </td>
                        <td className="text-[22px] text-red-700">
                            Total cost
                        </td>
                        <td className="text-[20px] text-red-700">
                            {
                                data.reduce((previous, recent) => {
                                    {/* resent is representing the data array */}
                                   return previous = previous + parseInt(recent.amount);
                                },0)
                            }
                        </td>
                    </tfoot>
                </table>
            </div>
        </div>
    </>
  )
}

export default Table