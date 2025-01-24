import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="text-center py-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Front.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "400px",
        }}
      >
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to 743 A Ave Property Management</h1>
        <p className="text-white text-lg mb-6">Manage Your Home With Ease.</p>
        <div className="flex justify-center space-x-4">
          <Link href="/properties">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Explore Rooms
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900">
              Contact Us
            </button>
          </Link>
          <Link href="/login">
            <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Login
            </button>
          </Link>
        </div>
      </section>

      {/* Content Below */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/rooms">
            <div className="p-6 border rounded-lg shadow-sm hover:bg-blue-100 cursor-pointer">
              <h3 className="text-lg font-semibold mb-2">View Rooms</h3>
              <p>Access details about your room and property amenities.</p>
            </div>
          </Link>
          <Link href="/payments">
            <div className="p-6 border rounded-lg shadow-sm hover:bg-blue-100 cursor-pointer">
              <h3 className="text-lg font-semibold mb-2">Make Payments</h3>
              <p>Pay your rent securely online with just a few clicks.</p>
            </div>
          </Link>
          <Link href="/maintenance">
            <div className="p-6 border rounded-lg shadow-sm hover:bg-blue-100 cursor-pointer">
              <h3 className="text-lg font-semibold mb-2">Request Maintenance</h3>
              <p>Report issues or request repairs for your room or property.</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
