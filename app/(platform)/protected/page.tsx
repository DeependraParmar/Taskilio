import { UserButton } from "@clerk/nextjs"

const ProtectedPage = () => {
  return (
    <div>
      protected page: <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default ProtectedPage;