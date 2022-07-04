import Breadcrumb from "../layout/Breadcrumb";

const pages = [{ name: "Armaturenbrett", href: "/", current: true }];

function Dashboard() {
  return (
    <div className="py-6">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
        <Breadcrumb pages={pages} />
        <h1 className="mt-8 text-2xl font-semibold text-gray-900">
          Armaturenbrett
        </h1>
      </div>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
        {/* Replace with your content */}
        <div className="py-4 ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            reprehenderit. Sit nam ipsum deleniti consequatur quaerat amet?
            Ducimus aliquam nostrum, facilis velit cum minus, vitae excepturi
            dolorem maiores provident unde!
          </p>
        </div>
        {/* /End replace */}
      </div>
    </div>
  );
}

export default Dashboard;
