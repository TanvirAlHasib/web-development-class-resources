import { useForm } from "react-hook-form";

// eslint-disable-next-line react/prop-types
function AddExpenses({expenses}) {

    const categorys = ["Utilities","Bazar","Rent","Tour"];

    const {
        register,
        handleSubmit,
        reset,
        // eslint-disable-next-line no-unused-vars
        formState: { errors },
      } = useForm()

    const submitedData = (data) => {
        expenses(data);
        reset();
    }

  return (
    <>
        <div className="max-w-[77%] mx-auto mt-11">
            <form onSubmit={handleSubmit(submitedData)} className="flex flex-col gap-4">
                <label className="input input-bordered flex items-center gap-2">
                Description
                <input type="text" className="grow" placeholder="cost of bazar..." {...register("description",{maxLength:30, minLength:5})} />

                {errors.description?.type === "maxLength" && (
                <p className="text-red-400">Max length is 30</p>
                )}

                {errors.description?.type === "minLength" && (
                    <p className="text-red-400">Min length is 5</p>
                )}

                </label>
                <label className="input input-bordered flex items-center gap-2">
                Amount
                <input type="text" className="grow" placeholder="$" {...register("amount",{required:true})} />

                {errors.amount?.type === "required" && (
                <p className="text-red-400">This field is required</p>
                )}

                </label>
                <select className="select select-bordered w-full" {...register("category",{required:true})}>
                <option disabled selected>All</option>

                    {
                        categorys.map(category => (
                            <option key={category} value={category} >{category}</option>
                        ) )
                    }
                
                </select>
                {errors.category?.type === "required" && <p className="text-red-400">This field is required</p>}
                <button className="btn btn-success" type="submit">Add</button>
            </form>
        </div>
    </>
  )
}

export default AddExpenses