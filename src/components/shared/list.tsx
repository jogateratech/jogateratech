interface ListItemProps {
  children: React.ReactNode;
}

const ListItem = ({ children }: ListItemProps) => (
  <li className="flex items-start gap-3 text-left text-[#aab1c9]">
    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1b2a22]">
      <svg
        className="h-3.5 w-3.5 text-[#25d3b8]"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M16.704 5.29a1 1 0 010 1.415l-7.2 7.2a1 1 0 01-1.415 0l-3.1-3.1a1 1 0 111.415-1.415l2.392 2.392 6.492-6.492a1 1 0 011.416 0z"
          clipRule="evenodd"
        />
      </svg>
    </span>
    <span>{children}</span>
  </li>
);

export default ListItem;
