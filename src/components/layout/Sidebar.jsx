import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HomeIcon, UserIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const navigation = [
  {
    name: "Armaturenbrett",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Zulieferer hinzufügen",
    href: "/supplier",
    icon: UserIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
        </Dialog>
      </Transition.Root>
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-col flex-1 min-h-0 bg-gray-100">
          <div className="flex items-center flex-shrink-0 h-16 px-4 bg-white border-b-2 border-gray-100">
            <img
              className="w-auto h-8"
              src="https://www.roomhero.de/wp-content/uploads/ROOMHERO-Logo-standard-gross-1.png"
              alt="Workflow"
            />
            <span className="mx-2">|</span>
            <span className="font-semibold">Produktdatenbank</span>
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <nav className="flex-1 px-2 py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-200 text-gray-900"
                      : "text-gray-900 hover:bg-gray-200 hover:text-gray-900",
                    "group rounded-md py-2 px-2 flex items-center text-base"
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current
                        ? "text-gray-300"
                        : "text-gray-400 group-hover:text-gray-600",
                      "mr-3 flex-shrink-0 h-6 w-6"
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
