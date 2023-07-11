import { CreateRoomAction } from '@/components/CreateRoomAction'

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="max-w-5xl flex">
        <div>
          <h1 className="mb-8 text-green-400 w-96">Refine your backlog, like a pro</h1>
          <div className="text-gray-100 mb-12">
            Planning poker estimations for distributed teams. Avoid uncertainty and rabbit-holes on your next big thing.
          </div>
            <CreateRoomAction />
        </div>
        <div className="w-[400px] h-[400px] bg-red-300 flex-shrink-0"></div>
      </div>
    </main>
  )
}

export default Home
