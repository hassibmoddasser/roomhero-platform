import { useState } from "react";
import { useFormik } from "formik";
import Breadcrumb from "../layout/Breadcrumb";

import { useAddSupplierMutation } from "../../services/supplier";

const pages = [
  { name: "Zúlieferer", href: "#", current: false },
  { name: "Zulieferer hinzufügen", href: "#", current: true },
];

function Supplier() {
  const [supplier, setSupplier] = useState({
    name: "",
    website: "",
    comment: "",
    delivery: "",
  });

  const [addSupplier, result] = useAddSupplierMutation();

  const [values, setValues] = useState({});

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required!";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      website: "",
      comment: "",
      delivery: "",
    },
    validate,
    onSubmit: async (values) => {
      console.log(JSON.stringify(values, null, 2));
      await addSupplier(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="py-6">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
        <Breadcrumb pages={pages} />
        <h1 className="mt-8 text-2xl font-semibold text-gray-900">
          Zulieferer hinzufügen
        </h1>
      </div>
      <div className="max-w-2xl px-4 sm:px-6 md:px-8">
        {/* Replace with your content */}
        <div className="py-4">
          <form
            method="post"
            className="space-y-8 divide-y divide-gray-200"
            autoComplete="off"
            onSubmit={formik.handleSubmit}
          >
            <div className="space-y-8 divide-y divide-gray-200">
              <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                    {formik.errors.name ? (
                      <span className="text-red-600 text-sm">
                        {formik.errors.name}
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Website
                  </label>
                  <div className="mt-1">
                    <input
                      type="url"
                      name="website"
                      id="website"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                      onChange={formik.handleChange}
                      value={formik.values.website}
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="comment"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Kommentar
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="comment"
                      name="comment"
                      rows="5"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                      onChange={formik.handleChange}
                      value={formik.values.comment}
                    ></textarea>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="delivery"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Lieferzeit
                  </label>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="delivery"
                      id="delivery"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                      onChange={formik.handleChange}
                      value={formik.values.delivery}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5">
              <div className="flex justify-start">
                <button
                  type="submit"
                  className="inline-flex justify-center px-16 py-2 mr-3 text-sm font-medium text-white bg-yellow-600 border border-transparent rounded-md shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  Hinzufügen
                </button>
                <button
                  type="button"
                  className="px-8 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  Absagen
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* /End replace */}
      </div>
    </div>
  );
}

export default Supplier;
