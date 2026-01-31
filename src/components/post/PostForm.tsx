"use client";

import { handlePost } from "@/services/PostServices";
import { MapPin, Package, Plus, Trash2 } from "lucide-react";
import { FieldValues, useFieldArray, useForm } from "react-hook-form";
import Swal from "sweetalert2";

const bagTypes = [
  { label: "50kg Bag", value: "50kg_bag" },
  { label: "20kg Bag", value: "20kg_bag" },
  { label: "Small Bag", value: "small_bag" },
  { label: "Other", value: "other" },
];

const PostForm = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      bags: [{ bagType: "50kg_bag", count: 1 }],
      location: { address: "", coordinates: { lat: 23.8103, lng: 90.4125 } },
      description: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
   name: "bags",
  });

  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await handlePost(data);
      if (res?.success) {
       Swal.fire(
      {
          icon: "success",
          title: "Successfully Created Post ",
          text: "...",
          timer: 1500,
          showConfirmButton: false,
          color: "#228B22", // forest-green
      }
       )
        reset();
      }
    } catch (error: any) {
        Swal.fire(
            {
                icon: "error",
                title: "Sorry!",
                text: `An error occurred. Please try again later. {error.message}`,
                confirmButtonColor: "#228B22",
            }
        )
      console.error("Post Form Submission Error:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-eco-light rounded-2xl shadow-xl border border-lime-green/20">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-forest-green rounded-lg text-white">
          <Package size={24} />
        </div>
        <h2 className="text-2xl font-bold text-dark-green">Post Plastic Collection</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Bag Details Section */}
        <div className="space-y-4">
          <label className="block font-semibold text-dark-green mb-2">
            Bag Details:
          </label>
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="flex gap-3 items-end animate-in fade-in slide-in-from-left-2"
            >
              <div className="flex-1">
                <select
                  {...register(`bags.${index}.bagType` as const)}
                  className="w-full p-3 border-2 border-lime-green/30 rounded-xl focus:border-forest-green outline-none transition-all"
                >
                  {bagTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-24">
                <input
                  type="number"
                  placeholder="Qty"
                  {...register(`bags.${index}.count` as const, {
                    valueAsNumber: true,
                  })}
                  className="w-full p-3 border-2 border-lime-green/30 rounded-xl focus:border-forest-green outline-none"
                />
              </div>
              {fields.length > 1 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="p-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                >
                  <Trash2 size={20} />
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={() => append({ bagType: "small_bag", count: 1 })}
            className="flex items-center gap-2 text-forest-green font-medium hover:text-dark-green transition-all"
          >
            <Plus size={18} /> Add another bag
          </button>
        </div>

        <hr className="border-lime-green/20" />

        {/* Location Section */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 font-semibold text-dark-green">
            <MapPin size={18} /> Pickup Address:
          </label>
          <input
            {...register("location.address", { required: "Address is required" })}
            placeholder="Enter street or area name"
            className="w-full p-3 border-2 border-lime-green/30 rounded-xl focus:border-forest-green outline-none"
          />
          {errors.location?.address && (
            <p className="text-red-500 text-sm">
              {errors.location.address.message as string}
            </p>
          )}
        </div>

        {/* Description Section */}
        <div className="space-y-2">
          <label className="block font-semibold text-dark-green">
            Additional Info (Optional):
          </label>
          <textarea
            {...register("description")}
            placeholder="Write details about the plastic waste..."
            className="w-full p-3 border-2 border-lime-green/30 rounded-xl h-24 focus:border-forest-green outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 bg-forest-green text-white font-bold rounded-xl hover:bg-dark-green transition-colors shadow-lg shadow-forest-green/20"
        >
          Confirm Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;