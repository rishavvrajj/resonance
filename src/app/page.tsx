import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="font-semibold text-2xl">
        Welcome To Resonance
      </h1>
      <div className="p-5 flex items-center justify-center gap-10">
      <OrganizationSwitcher/>
      <UserButton/>
      </div>
    </div>
  )
}

export default Home