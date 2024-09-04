/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { useForm } from "react-hook-form";

export const FormProductAvecVerif = ({
  submitMethod,
  productToModify,
  closeModal,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
  } = useForm();

  useEffect(() => {
    Object.keys(productToModify).forEach((key) => {
      setValue(key, productToModify[key]);
      clearErrors(key);
    });
  }, [productToModify]);

  const verifNumber = {
    required: "champ requis !",
    max: { value: 100, message: "Valeur max: 100" },
    min: { value: 0, message: "Valeur min: 0" },
  };

  const onSubmit = (product) => {
    submitMethod(product, productToModify.id);
    closeModal();
  };

  return (
    <>
      {productToModify && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-4 mb-5">
            <div>
              <input
                type="text"
                {...register("name", {
                  required: "Nom requis",
                })}
                className="flex"
              />
              {errors.name && <span>{errors.name.message}</span>}
            </div>

            <div>
              <input
                type="number"
                {...register("price", verifNumber)}
                className="flex"
              />
              {errors.price && <span>{errors.price.message}</span>}
            </div>

            <div>
              <input
                type="number"
                className="flex"
                {...register("number", verifNumber)}
              />
              {errors.number && <span>{errors.number.message}</span>}
            </div>

            <div>
              <input
                type="text"
                {...register("category", {
                  required: "catégorie requise !",
                  maxLength: { value: 10, message: "10 caractères max." },
                })}
                className="flex"
              />
              {errors.category && <span>{errors.category.message}</span>}
            </div>
          </div>
          <button type="submit" className="btn">
            Valider
          </button>
        </form>
      )}
    </>
  );
};
