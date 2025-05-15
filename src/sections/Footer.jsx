import logo from "../logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-16 text-sm">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Footer content wrapper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-lg font-bold">
              <img src={logo} alt="Logo" className="h-6 w-6" />
              Traffic
            </div>
            <p className="max-w-xs text-gray-600">
              HQ Public-Safety, 123 Main St.
              <br />
              support@uifry.com
            </p>
          </div>

          {/* Links Column */}
          <div className="space-y-3">
            <h5 className="font-medium text-gray-900">Links</h5>
            <ul className="space-y-2 text-gray-600">
              {["Home", "Blog"].map((txt) => (
                <li key={txt}>
                  <a href="#">{txt}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-3">
            <h5 className="font-medium text-gray-900">Legal</h5>
            <ul className="space-y-2 text-gray-600">
              {["Terms of Use", "Privacy Policy", "Cookie Policy"].map(
                (txt) => (
                  <li key={txt}>
                    <a href="#">{txt}</a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Product Column */}
          <div className="space-y-3">
            <h5 className="font-medium text-gray-900">Product</h5>
            <ul className="space-y-2 text-gray-600">
              {["Take Tour", "Live Demo", "Features"].map((txt) => (
                <li key={txt}>
                  <a href="#">{txt}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-3">
            <h5 className="font-medium text-gray-900">Newsletter</h5>
            <p className="text-gray-600">Stay up to date</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex max-w-xs overflow-hidden rounded-lg border border-gray-300"
            >
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-3 py-2 text-gray-800 focus:outline-none"
              />
              <button className="bg-blue-600 px-4 text-white">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Footer bottom text */}
        <p className="mt-10 text-center text-gray-500">
          ©{new Date().getFullYear()} Uifry. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
