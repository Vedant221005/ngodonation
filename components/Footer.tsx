export function Footer() {
  return (
    <footer className="py-4 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto text-center">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Infinite Smiles. All rights reserved.
        </p>
      </div>
    </footer>
  );
}