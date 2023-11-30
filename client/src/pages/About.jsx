

export default function About() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold  mb-4 text-slate-800'>About</h1>
      <p className='mb-4 text-slate-700'>This full-stack application is built using MERN (MongoDB, Express, React, Node) stack. It includes authentication features that allows users to sign up, login, logout and provides access to protected routes only for authenticated users. </p>
      <p className='mb-4 text-slate-700'>The front-end of the application is built with react and uses React Router for client-side routing. The backend is built with NodeJS and express and MongoDB as the database. Authentication is implemented using JSON wen tokens (JWT). </p>
    </div>
  )
}
