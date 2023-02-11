import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../Shared/Lodading/Loading";

const ManageDoctors = () => {
    const [deletingDoctor,setDeletingDoctor] = useState(null);
    const closeModal = () =>{
        setDeletingDoctor(null);
    }

  const { data: doctors, isLoading,refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("https://doctors-portal-server-rust-seven.vercel.app/doctors", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  const handleDeleteDoctor = (doctor) =>{
    fetch(`https://doctors-portal-server-rust-seven.vercel.app/doctors/${doctor._id}`,{
        method: 'DELETE',
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res=>res.json())
    .then(data => {
        console.log(data);
        refetch();
        toast.success(`Doctor ${doctor.name} Deleted Successfully`);
    })
}

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="tex-3xl">Manage Doctors: {doctors?.length}</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={doctor.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <label onClick={()=>setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">
                  Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {
        deletingDoctor && <ConfirmationModal
            title={`Are you sure you want to delete?`}
            message={`If you delete ${deletingDoctor.name}, it can't be undone.`}
            closeModal = {closeModal}
            successButtonName="Delete"
            successAction = {handleDeleteDoctor}
            modalData= {deletingDoctor}>
        </ConfirmationModal>
      }
    </div>
  );
};

export default ManageDoctors;
