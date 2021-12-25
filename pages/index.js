import Card from '../components/Card.jsx'

export default function Home() {
  return (
    <div className="main font-sans">
      <h1 className="w-full text-center p-8 text-blue-400 text-6xl font-bold">
        YT questions
      </h1>
      <div className="flex flex-row gap-4 p-3">
        <Card title="abcd">
          Officia in tempor qui deserunt ex labore proident velit proident cupidatat quis sed id fugiat veniam in ea do est qui eiusmod nisi esse sint sunt voluptate cupidatat duis magna magna voluptate mollit consectetur et.
        </Card>
        <Card title="abcd" subTitle="abcd">
          Officia in tempor qui deserunt ex labore proident velit proident cupidatat quis sed id fugiat veniam in ea do est qui eiusmod nisi esse sint sunt voluptate cupidatat duis magna magna voluptate mollit consectetur et.
        </Card>
      </div>
    </div>
  )
}