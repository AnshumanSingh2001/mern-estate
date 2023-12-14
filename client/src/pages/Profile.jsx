import { useSelector } from 'react-redux'

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user)
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.avatar}
          alt="Profile"
          className="rounded-full w-24 h-24 object-cover cursor-pointer self-center mt-2"
        />
        {/* <form onSubmit={handleSubmit} className="flex flex-col gap-4"> */}
        <input
          type="text"
          id="username"
          placeholder="username"
          className="border p-3 rounded-lg"
          // onChange={handleChange}
        />
        <input
          type="email"
          id="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          // onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          // onChange={handleChange}
        />
        <button
          // disabled={loading}
          className="bg-slate-700 text-white
        rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80"
        >
          {/* {loading ? 'Loading...' : 'Sign In'} */}
          update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete account</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>
      </div>
      {/* {error && <p className="text-red-500 mt-5">{error}</p>} */}
    </div>
  )
}
export default Profile
