export default function Link({ href, target = "_blank", children }) {
  return (
    <a
      className="hover:text-blue-500 text-lg font-bold text-white"
      href={href}
      target={target}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
