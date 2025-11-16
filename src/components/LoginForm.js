import React from "react";
import { Formik, Form, Field } from "formik";

function validateEmail(value) {
  let error;
  if (!value) {
    error = "El email es requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Dirección de email inválida";
  }
  return error;
}

function validateUsername(value) {
  let error;
  if (!value) {
    error = "El nombre de usuario es requerido";
  }
  return error;
}

export const LoginForm = ({ handleAddUser, onClose }) => (
  <div className="flex items-center justify-center z-50"> {/* Aseguramos que todo el contenedor tenga z-index alto */}
    <div
      className="
        relative overflow-hidden rounded-2xl p-6
        bg-[#0d0f16]/80
        border border-white/10
        shadow-[0_0_40px_-10px_rgba(0,0,255,0.2)]
        backdrop-blur-md
        transition-all duration-300
        hover:shadow-[0_0_60px_-10px_rgba(0,120,255,0.5)]
        hover:border-blue-500/30 w-full max-w-md
        z-50"  
    >
      {/* Fondo con blur */}
      <div className="absolute inset-0 bg-linear-to-b from-blue-500/5 to-transparent opacity-40 z-0" /> 
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl z-0" />

      <h1 className="text-2xl font-bold text-center text-white mb-6">Registro</h1>

      <Formik
        initialValues={{
          username: "",
          email: "",
        }}
        onSubmit={(values) => {
          handleAddUser(values);
          onClose(); 
        }}
      >
        {({ errors, touched }) => (
          <Form className="space-y-6">
            <div className="relative z-10"> 
              <label htmlFor="username" className="block text-sm font-medium text-white">
                Nombre de Usuario
              </label>
              <Field
                id="username"
                name="username"
                validate={validateUsername}
                className="text-black mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-800 focus:outline-none focus:ring-indigo-500 z-10"
              />
              {errors.username && touched.username && (
                <div className="text-red-500 text-xs mt-1">{errors.username}</div>
              )}
            </div>

            <div className="relative z-10"> 
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                validate={validateEmail}
                className="text-black mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-800 focus:outline-none focus:ring-indigo-500 z-10"
              />
              {errors.email && touched.email && (
                <div className="text-red-500 text-xs mt-1">{errors.email}</div>
              )}
            </div>

            <div className="relative z-10"> 
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent bg-blue-950 rounded-md shadow-sm text-sm font-medium text-white transition-transform transform hover:scale-105 hover:border-2 hover:border-blue-500 z-10"
              >
                Enviar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  </div>
);
